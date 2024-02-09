<template>
  <header
    class="flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-gray-950/[0.5]"
  >
    <div class="flex-1 flex items-center justify-between container mx-auto px-4">
      <NuxtLink to="/" class="flex items-center gap-1">
        <NuxtImg src="/nuxt.png" :alt="companyName" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ companyName }}</span>
      </NuxtLink>
      <UiNavbar />
    </div>
  </header>
</template>

<script setup lang="ts">
const { name: companyName } = useAppConfig();
</script>
