<template>
  <div class="container mx-auto flex-1 py-4 w-full px-4">
    <div class="flex flex-col h-full items-center justify-center">
      <UiAlert
        :class="{
          'fixed duration-150 left-1/2 -translate-x-1/2': true,
          '-top-full': !showAlert,
          'top-20': showAlert,
        }"
        :variant="notification.variant"
      >
        <p class="px-3">{{ notification.text }}</p>
      </UiAlert>

      <h1 class="drop-shadow-xl text-2xl sm:text-3xl md:text-4xl block font-bold uppercase text-center">
        {{ $t('auth.login.heading') }}
      </h1>

      <div class="mb-6 max-w-sm w-full">
        <form class="mt-8 space-y-6 w-full">
          <div>
            <label for="email" class="sr-only">{{ $t('form.emailLabel') }}:</label>
            <input
              v-model="email"
              type="email"
              id="email"
              autocomplete="email"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              :placeholder="$t('form.emailLabel')"
            />
          </div>
          <div>
            <label for="password" class="sr-only">{{ $t('form.passwordLabel') }}:</label>
            <input
              v-model="password"
              type="password"
              id="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              :placeholder="$t('form.passwordLabel')"
            />
          </div>
          <div>
            <UiButton
              class="capitalize w-full md:w-auto"
              text="reset"
              type="primary"
              size="md"
              @click.prevent="handleSubmit"
            >
              {{ $t('auth.login.submitLabel') }}
            </UiButton>
          </div>
        </form>
        <div class="my-5">
          <UiDivider />
        </div>
        <div class="text-center">
          <p>
            {{ $t('auth.login.createAccount') }}
            <NuxtLink to="/" class="text-primary hover:underline ml-2">
              {{ $t('auth.login.createAccountLinkLabel') }}
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Login',
  meta: [{ name: 'description', content: 'A Nuxt App with Tailwindcss, Headless UI and PWA' }],
});

const email = ref('');
const password = ref('');

const showAlert = ref(false);

const { t } = useI18n();
const notification = reactive<{
  text: string;
  variant?: 'success' | 'warning' | 'danger';
}>({
  text: '',
  variant: 'success',
});

const handleSubmit = async () => {
  if (!email.value) {
    notification.text = t('errorMessages.email.required');
    notification.variant = 'danger';
    showAlert.value = true;
    return setTimeout(() => (showAlert.value = false), 2000);
  }
  if (!password.value) {
    notification.text = t('errorMessages.password.required');
    notification.variant = 'danger';
    showAlert.value = true;
    return setTimeout(() => (showAlert.value = false), 2000);
  }

  try {
    notification.text = t('notification.loginSuccess');
    notification.variant = 'success';
    showAlert.value = true;
    setTimeout(() => (showAlert.value = false), 2000);
    reset();
  } catch (error) {
    notification.text = t('notification.loginFailed');
    notification.variant = 'danger';
    showAlert.value = true;
    setTimeout(() => (showAlert.value = false), 2000);
    console.error('Login failed', error);
  }
};

const reset = () => {
  email.value = '';
  password.value = '';
};
</script>
