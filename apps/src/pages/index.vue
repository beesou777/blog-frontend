<template>
  <div class="container mx-auto flex-1 py-4 w-full px-4">
    <div class="flex flex-col h-full items-center justify-center">
      <h1
        class="drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-bold uppercase text-center"
      >
        Nuxt Bolier Plate
      </h1>
      <div class="px-4 mt-6 text-center max-w-[500px] md:max-w-[600px]">
        <p>{{ $t('starterText') }}</p>
      </div>
      <div class="flex space-x-4 ml-2 mt-8 justify-center md:justify-start">
        <UiButton size="lg" text="Nuxt 3" to="https://nuxt.com" class="font-extrabold" />
        <UiButton text="Github" :to="project.github" size="lg" class="font-extrabold" type="secondary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { project } = useAppConfig();

useHead({
  title: '',
  meta: [{ name: 'description', content: 'A Nuxt App with Tailwindcss, Headless UI and PWA' }],
});
</script>
