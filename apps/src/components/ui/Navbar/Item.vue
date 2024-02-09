<template>
  <span
    :class="{
      'text-gray-900 dark:text-gray-100 font-bold': isActive,
      'text-gray-900 dark:text-gray-100': !isActive,
    }"
  >
    {{ menu.name }}
  </span>
</template>

<script setup lang="ts">
const route = useRoute();

const props = defineProps<{
  menu: {
    name: string;
    link: string;
  };
}>();

const isActive = computed(() => {
  if (props.menu.link === route.path) return true;

  return false;
});
</script>
