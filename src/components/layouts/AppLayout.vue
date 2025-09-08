<template>
  <div>
    <AppHeader/>
    <div class="app-body">
      <slot/>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
</script>