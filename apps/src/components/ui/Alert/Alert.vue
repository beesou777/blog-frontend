<template>
  <div :class="['inline-flex items-center justify-center', classes]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
const sizeClasses = {
  sm: 'text-xs p-1 gap-1',
  base: 'text-sm p-1.5 gap-1.5',
};
</script>

<script setup lang="ts">
import type { AlertProps } from './types';

const props = withDefaults(defineProps<AlertProps>(), {
  size: 'base',
  strong: false,
  variant: 'success',
});

const classes = computed(() => [
  sizeClasses[props.size],
  props.strong ? 'text-white font-medium rounded-none' : 'rounded-md font-normal',
  {
    [`text-green-800 ${props.strong ? 'bg-green-600' : 'bg-green-100'}`]: props.variant === 'success',
    [`text-red-800 ${props.strong ? 'bg-red-800' : 'bg-red-100'}`]: props.variant === 'danger',
    [`text-yellow-800 ${props.strong ? 'bg-yellow-600' : 'bg-yellow-100'}`]: props.variant === 'warning',
  },
]);
</script>
