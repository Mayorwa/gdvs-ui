<template>
  <svg :width="width" :height="height" :viewBox="viewBox" class="icon">
    <use :xlink:href="`/sprite.svg#icon-${name}`"></use>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from "vue";
export default defineComponent({
  name: 'IconUI',
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
    viewBox: {
      type: String as PropType<string>,
      default: '0 0 32 32',
    },
    width: {
      type: String as PropType<string>,
      default: '24px',
    },
    height: {
      type: String as PropType<string>,
      default: '24px',
    },
  },
})
</script>
