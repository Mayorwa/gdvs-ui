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
    <div v-if="isChild && familyStarted" class="card-options" @click="handleIndividualLineage(familyStarted)">
      <div class="card-options_branch">
        <Spinner v-if="isLoading"/>
        <Icon name="children" width="20px" height="20px" v-else/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {type PropType, ref, computed, getCurrentInstance, nextTick} from "vue";
import { IndividualType } from "@/types";
import Icon from '@/components/ui/Icon.vue';
import Spinner from "@/components/ui/Spinner.vue";
import {useLineage} from "@/store";

const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
  birthdate: {
    type: String as PropType<string>,
    required: true,
  },
  familyStarted: {
    type: String as PropType<string>,
  },
  familyComingFrom: {
    type: String as PropType<string>,
  },
  relation: {
    type: String as PropType<string>,
    required: true,
  },
  individualType: {
    type: String as PropType<IndividualType>,
    required: true,
  },
  deathdate: {
    type: String as PropType<string>,
  },
})

// data
const lineage = useLineage()
const isLoading = ref<boolean>(false);
const instance: any = getCurrentInstance();

// functions
const handleIndividualLineage = async (familyStartedId: string) => {
  isLoading.value = true;
  let resIdx = lineage.populateIndividualLineage(familyStartedId);
  if (resIdx){
    await nextTick()
    const family = instance?.parent?.parent?.refs?.familyRefs[resIdx];
    family?.$el?.scrollIntoView({behavior: "smooth", block: "start"});
  }
  isLoading.value = false;
}

// computed
const classes = computed(() => {
  // const style = this.handleSize()
  const variant = getIndividualClass(props.individualType)

  return `${variant} `
})

const isChild = computed(() => {
  return props.individualType === IndividualType.Child;
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
  } else if (individual === IndividualType.Parent) {
    return `card-parentNode`
  }
}

</script>