<template>
  <div class="family-tree">
    <Lineage v-for="(_, index) in family" :key="index" ref="familyRefs" :lineageId="index"/>
  </div>

</template>
<script lang="ts" setup>
import {ref} from "vue";
import Lineage from "@/components/Lineage.vue";
import {useLineage} from "@/store";
import {storeToRefs} from "pinia";

const lineage = useLineage()

const familyRefs = ref('familyRefs');

const {lineage: family} = storeToRefs(lineage);

/*watch(familyRefs, async (_,oldValue) => {
  if (oldValue === 'familyRefs') {return;}
  const lastFamily = familyRefs.value[familyRefs.value.length - 1];
  if (lastFamily) {
    await nextTick();
    lastFamily?.$el?.scrollIntoView({behavior: "smooth", block: "start"});
  }
}, {deep: true});*/
</script>