<template>
  <AppHeader/>
  <div class="app-body">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>
<style lang="scss">
.app-body {
  background-color: #f4f4f4;
}
</style>