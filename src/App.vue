<template>
  <AppHeader/>
  <div class="app-body">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>
<style lang="scss">
.app-body {
  padding: 1rem 1rem;
  background-color: #f4f4f4;
}
</style>