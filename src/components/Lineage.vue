<template>
  <div class="family-tree_branch">
    <div class="container">
      <div class="grid-inner" v-if="family.parents">
        <div class="grid grid-parents">
          <Individual v-for="(parent, index) in family.parents" :key="index" v-bind="{...parent, relation: getRelation(parent, 'parent')}"/>
        </div>
      </div>
      <div class="grid-inner">
        <div class="grid grid-partners grid-root">
          <Individual v-bind="{...family.root, relation: getRelation(family.root, 'root')}"/>
          <Individual v-for="(partner, index) in family.partners" :key="index" v-bind="{...partner, relation: getRelation(partner, 'partner')}"/>
        </div>
      </div>
      <!--#noofgen loop-->
      <div class="grid-inner" v-if="family.children">
        <div class="grid grid-children">
          <Individual v-for="(child, index) in family.children" :key="index" v-bind="{...child, relation: getRelation(child, 'child')}"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Individual from "./individual.vue";
import { IndividualType } from "../types";
import {type PropType, computed} from "vue";
import {useLineage} from "@/store";

const props = defineProps({
  lineageId: {
    type: Number as PropType<number>,
    required: true,
  },
})

const lineage = useLineage()

let family = computed(() => {
  return lineage.lineage[props.lineageId]
})

// functions

const getRelation = (individual: any, relation: string) => {
  switch (relation) {
    case 'partner':
      if (individual.individualType === IndividualType.ExPartner) {
        return individual.gender === 'male' ? 'ex-husband' : 'ex-wife'
      } else {
        return individual.gender === 'male' ? 'husband' : 'wife'
      }
    case 'child':
      return individual.gender === 'male' ? 'son' : 'daughter'
    case 'parent':
      return individual.gender === 'male' ? 'father' : 'mother'
    default:
      return 'root'
  }
}

</script>
<style lang="scss">
.grid.grid-children .card:nth-child(3n+1){
  grid-column-start: 2;
}
</style>