export interface NuxtAppConfig {
  name?: string;
  description?: string;
  project: {
    github: string;
  };
  author?: {
    name?: string;
    links?: {
      github?: string;
      website?: string;
    };
  };
}

export default defineAppConfig({
  name: 'Nuxt Tailwind PWA',
  description: 'a starter template for Nuxt 3 with HeadlessUI, Tailwindcss and PWA.',
  project: {
    github: 'https://github.com/Rohan-Shakya/nuxt-tailwind-pwa',
  },
  author: {
    name: 'Rohan Shakya',
    links: {
      github: 'https://github.com/Rohan-Shakya',
      website: 'https://www.shakyarohan.com.np',
    },
  },
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
});
