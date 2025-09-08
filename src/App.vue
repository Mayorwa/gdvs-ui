<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>
<script setup lang="ts">
import { computed } from "vue";
import {useRoute} from "vue-router";
import AppLayout from "@/components/layouts/AppLayout.vue";
import EmptyLayout from "@/components/layouts/EmptyLayout.vue";

const route = useRoute()

const layoutComponent = computed(() => {
  let currentLayout
  const routeLayout = route.meta.layout?.toLowerCase()
  switch (routeLayout) {
    case 'app':
      currentLayout = AppLayout
      break
    default:
      currentLayout = EmptyLayout
  }
  return currentLayout
})
</script>
<style lang="scss">
.app-body {
  background-color: #f4f4f4;
  padding-bottom: 4rem;
}
</style>