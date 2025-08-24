<template>
  <div class="card" :class="[classes]">
    <div class="card-label" v-if="relation !== 'root'">
					<span class="card-label_inner">{{ relation }}</span>
    </div>
    <div class="card-img" style="background-image: url('/default-portrait.jpg')"></div>

    <div class="card-content">
      <div class="card-content_inner">
        <h3>{{ props.name}}</h3>
        <p>({{ `${props.birthdate} ${props.deathdate ? ` - ${props.deathdate}` :  ''}` }})</p>
      </div>
    </div>

    <div v-if="isChild()" class="card-options">
      <div class="card-options_branch">
        <Icon name="children" width="20px" height="20px"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type PropType, computed} from "vue";
import { IndividualType } from "@/types";
import Icon from '@/components/ui/Icon.vue';
const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
  birthdate: {
    type: String as PropType<string>,
    required: true,
  },
  relation: {
    type: String as PropType<string>,
    required: true,
  },
  individualType: {
    type: IndividualType as PropType<IndividualType>,
    required: true,
  },
  deathdate: {
    type: String as PropType<string>,
  },
})

const classes = computed(() => {
  // const style = this.handleSize()
  const variant = getIndividualClass(props.individualType)

  return `${variant} `
})

const getIndividualClass = (individual: IndividualType) => {
  if (individual === IndividualType.Child) {
    return `card-childNode`
  } else if (individual === IndividualType.Partner) {
    return `card-subNode`
  } else if (individual === IndividualType.ExPartner) {
    return `card-Node`
  } else if (individual === IndividualType.Individual) {
    return `card-root`
  }
}

const isChild = () => {
  return props.individualType === IndividualType.Child;
}
</script>