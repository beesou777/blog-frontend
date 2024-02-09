<template>
  <footer class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]">
    <div
      class="flex-1 justify-between container mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-600 dark:text-gray-300"
    >
      <div>
        {{ $t('footerCopyRight', { year: new Date().getFullYear() }) }}
      </div>
      <div>{{ companyName }}</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { name: companyName } = useAppConfig();
</script>
