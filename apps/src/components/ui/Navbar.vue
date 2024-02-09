<template>
  <nav class="flex items-center">
    <div class="flex items-center gap-4 border-r-2 pr-4">
      <NuxtLink v-for="menu in menuList" :key="menu.name" :to="menu.link">
        <UiNavbarItem :menu="menu" />
      </NuxtLink>
    </div>
    <div class="pl-4 flex items-center gap-4 text-xl">
      <ThemeSwitcher />
      <LanguageButton />
    </div>
  </nav>
</template>

<script setup>
const { t, locale } = useI18n();
const menuList = [
  {
    name: t('auth.login.name'),
    link: '/login',
  },
];

watch(
  () => locale.value,
  () => {
    menuList = [
      {
        name: t('auth.login.name'),
        link: '/login',
      },
    ];
  },
);
</script>
