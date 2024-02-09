<template>
  <div class="overflow-x-hidden">
    <UiHeader class="h-[64px] max-h-[64px]" />

    <div class="flex w-full pt-[64px]" :style="{ 'min-height': 'var(--layout-page-content-min-height)' }">
      <slot></slot>
    </div>

    <UiFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>
