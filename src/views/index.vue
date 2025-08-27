<template>
  <div class="family-tree" v-for="(_, index) in family" :key="index">
    <Lineage :lineageId="index"/>
  </div>

</template>
<script lang="ts" setup>
import Lineage from "@/components/Lineage.vue";
import {useLineage} from "../store";
const lineage = useLineage()

const family = lineage.lineage

</script>