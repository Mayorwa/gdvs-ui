<template>
  <button
      :name="name"
      class="button"
      :class="[classes]"
      :disabled="disabled || loading || inactive"
  >
    <span v-if="loading">
      <Spinner/>
    </span>

    <slot v-else></slot>
  </button>
</template>

<script lang="ts" setup>
import Spinner from "@/components/ui/Spinner.vue";
import {computed} from "vue";

const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator: value =>
          [
            'primary',
            'transparent',
            'inline',
          ].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    btnClass: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    name: String,
});

const classes = computed(() => {
    const size = props.size ? `btn-${props.size}` : ''
    const variant = props.variant ? `button--${props.variant}` : ''
    const disabled = props.disabled ? 'btn-disabled': ''
    const loading = props.loading ? 'btn-loading': ''

    return `${size} ${variant} ${disabled} ${loading} ${props.btnClass}`
})
</script>
<style lang="scss">
.button {
  font-family: inherit;
  height: 40px;
  line-height: 1;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 6px;
  border: 1px solid transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all .5s;
  white-space: nowrap;

  &--primary {
    background: var(--bg-primary);
    color: var(--bg-white);
    border-color: var(--bg-primary);

    &:hover {
      border-color: var(--bg-primary);
      background: rgba(var(--bg-primary), 0.8);
    }
  }
}

</style>