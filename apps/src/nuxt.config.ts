import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Nuxt PWA' },
        { name: 'theme-color', content: '#018937' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
      ],
    },
  },
  imports: {
    dirs: ['composables/**', 'utils/**'],
  },
  colorMode: {
    classSuffix: '',
  },
  css: [resolve('./assets/scss/app.scss')],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'DM Sans': [300, 400, 500, 600],
        },
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json',
          },
          {
            code: 'de',
            iso: 'de-DE',
            file: 'de.json',
          },
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en',
      },
    ],
    'nuxt-headlessui',
    '@nuxt/image',
    'nuxt-icon',
    '@vite-pwa/nuxt',
    'nuxt-lazy-hydrate',
  ],
  // module::pinia
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },
  // eslint-disable-next-line unicorn/expiring-todo-comments
  // TODO: build is consistently failing because of this. check whether we need pre-render check.
  nitro: {
    prerender: {
      crawlLinks: false,
    },
    compressPublicAssets: true,
  },
  routeRules: {
    '/_ipx/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/icons/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/favicon.ico': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL ?? 'http://localhost:3000',
      showNetPrices: true,
      logoUrl: (process.env.API_URL ?? 'http://localhost:3000') + '/images/logo.png',
      useWebp: process.env?.USE_WEBP === '1' ?? false,
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,json,css,html,ico,svg,png,webp,ico,woff,woff2,ttf,eit,otf}', 'icons/*'],
      globIgnores: ['manifest**.webmanifest'],
      additionalManifestEntries: [
        {
          url: '/offline',
          revision: Math.random().toString(32),
        },
      ],
      navigationPreload: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkOnly',
          options: {
            precacheFallback: {
              fallbackURL: '/offline',
            },
          },
        },
      ],
      cleanupOutdatedCaches: true,
    },
    manifest: {
      name: 'Nuxt Tailwind CSS',
      short_name: 'NuxtPWA',
      theme_color: '#018937',
      icons: [
        {
          src: 'icons/icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: 'icons/icon-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
        {
          src: 'icons/icon-310x310.maskable.png',
          sizes: '310x310',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    registerWebManifestInRouteRules: true,
  },
});
