<template>
  <div>
    <div class="grid-inner">
      <div class="grid grid-partners">
        <Individual v-bind="{...family.root, relation: getRelation(family.root, 'root')}"/>
        <Individual v-for="(partner, index) in family.partners" :key="index" v-bind="{...partner, relation: getRelation(partner, 'partner')}"/>
      </div>
    </div>
    <!--#noofgen loop-->
    <div class="grid-inner">
      <div class="grid grid-children">
        <Individual classs="" v-for="(child, index) in family.children" :key="index" v-bind="{...child, relation: getRelation(child, 'child')}"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Individual from "./individual.vue";
import { IndividualType } from "../types";
import {onMounted, type PropType, ref} from "vue";

const props = defineProps({
  individualId: {
    type: String as PropType<string>,
    required: true,
  },
})

const family = ref({
  root: {
    name: 'Peter Allison',
    individualType: IndividualType.Individual,
    gender: 'male',
    birthdate: '1926',
    deathdate: '1999',
  },
  partners: [
    {
      name: 'Monica Allison',
      individualType: IndividualType.Partner,
      gender: 'female',
      birthdate: '1930',
      deathdate: '2003',
    },
  ],
  children: [
    {
      name: 'Rachael Allison',
      individualType: IndividualType.Child,
      gender: 'female',
      birthdate: '1943',
      deathdate: '2013',
    },
    {
      name: 'Jennifer Allison',
      individualType: IndividualType.Child,
      gender: 'female',
      birthdate: '1945',
      deathdate: '2014',
    },
    {
      name: 'Peter II Allison',
      individualType: IndividualType.Child,
      gender: 'male',
      birthdate: '1965',
    }/*,
    {
      name: 'David Allison',
      individualType: IndividualType.Child,
      gender: 'male',
      birthdate: '1972',
    }*/
  ],
  parents: {}
})

onMounted(() => {
  getFamilyInfo()
})

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
    default:
      return 'root'
  }
}
const getFamilyInfo = () => {
  return props.individualId;
}

</script>
<style lang="scss">
.grid.grid-children .card:nth-child(3n+1){
  grid-column-start: 2;
}
</style>