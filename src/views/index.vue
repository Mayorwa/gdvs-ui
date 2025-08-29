<template>
  <div class="family-tree">
    <Lineage v-for="(_, index) in family" :key="index" :lineageId="index"/>
  </div>

</template>
<script lang="ts" setup>
import Lineage from "@/components/Lineage.vue";
import {useLineage} from "../store";
const lineage = useLineage()

const family = lineage.lineage

</script>