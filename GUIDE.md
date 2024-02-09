# Detailed overview & further development guide

Welcome to the [Nuxt.js 3](https://nuxt.com/) with Tailwind, Headless UI and PWA project! This guide will provide you with an overview of the project structure, tools, and best practices to help you get started quickly.

### Project Structure

This project is built using [TurboRepo](https://turbo.build/repo), a powerful development tool that enables efficient monorepo management and simplifies the process of building and maintaining complex software systems. By leveraging TurboRepo's features, this project has achieved a scalable and modular architecture, allowing for easy collaboration among multiple teams and ensuring consistent development practices across the codebase.

For detailed information on how to get started, configure, and use this project built with TurboRepo, please refer to the [official documentation](https://turbo.build/repo/docs).

#### Web application

Web app follows a Nuxt.js [Structure](https://nuxt.com/docs/guide/directory-structure/nuxt) file structure:

```shell

apps/
 └── web/
     ├── ...
     ├── assets                   # Static assets
     ├── components/              # Project Components
     │   ├── Footer/
     │   └── ...
     ├── composables/             # Custom hooks
     ├── layouts/                 # Layouts
     ├── mocks/                   # Static data
     ├── pages/                   # Pages
     │   ├── index.vue            # App index page component
     │   └── ...
     ├── public/                  # Public assets
     ├── server/                  # In-app backend server
     ├── .eslintrc.js             # ESLint configuration
     ├── .lintstagedrc.js         # Lint-Staged configuration
     ├── app.vue                  # Application entry point
     ├── cypress.config.js        # Cypress configuration
     ├── jest.config.ts           # Jest configuration
     ├── nuxt.config.js           # Nuxt.js configuration
     ├── package.json             # Package entry point
     ├── tailwind.config.js       # TailwindCSS configuration
     ├── tsconfig.json            # TypeScript configuration
     ├── vitest.config.mjs        # Vitest configuration
     └── ...

```

List of essential directories:

- `composables` reusable composition functions, e.g. data fetching and UI composables
- `mocks` mock data used across the application, e.g. footer links

### Functions

This project follows a few conventions to help with organizing your code:

- Each function is located in a dedicated module and exported from the `index.ts` file.
- Names are short and descriptive.
- Functions are exported using named export.
- Modules are matching the name of the function.
- TypeScript types and tests are located close to the function file.

Expected file/folder structure:

```shell
<module-directory>/
 └── Function/
     ├─ index.ts
     ├─ types.ts
     ├─ Function.ts
     └─ __tests__/
         └─ Function.spec.ts
```

### Composables

Composables are useful when stateful logic has to be reused across components - e.g. handling product data or controlling component state.
Project composables are located in the `/apps/src/composables/` directory and each have the following structure:

```shell
hooks/
 └── useProduct/
     ├─ index.ts
     ├─ types.ts
     ├─ useProduct.ts
     └─ __tests__/
         └─ useProduct.spec.ts
```

Naming convention:

- each composables should be prefixed with `use` keyword (`useProduct`)
- composable should follow `Camel case` pattern (`useProductReviews`)

We are using internal [Nuxt.js state management](https://nuxt.com/docs/getting-started/state-management) to lock the data responsibility along with the composition functions (composables). State connected to the certain composable is read-only and modified by the internal modifiers (functions). You can check the `useCart.ts` composable as a reference.

### Components

Components used in the boilerplate web app are located in the `components` directory and each component has the following file structure:

- Project components:

  - Representational components that are designed to fulfill project requirements.
  - TypeScript types and tests ale located close to the component

Expected file/folder structure:

```shell
components/
 └── Footer/
     ├─ index.ts
     ├─ types.ts
     ├─ Footer.vue
     └─ __tests__/
         └─ Footer.spec.ts
```

#### Naming convention:

- Vue (Nuxt) components should follow `Pascal case` pattern (`CategoryFilters`, `Heading`)
- The types for component's props should be named `{Component}Props`. For example, `GalleryProps` or `HeadingProps`

### Localization

The boilerplate ships with a basic setup for i18n localization powered by the [Nuxt-i18n](https://i18n.nuxtjs.org) library. Project locale translations are stored in `locale/[namespace].json` files. Translations are grouped by _features_, and imported only where required to minimize bundle size.
Refer to the [Nuxt-i18n](https://i18n.nuxtjs.org) for the translating content with SSR.

### Testing

The project provides a basic setup for testing JS code with [Vitest](https://vitest.dev/) and [Vue Test Utils](https://test-utils.vuejs.org/guide/) for testing Vue (Nuxt) components.

Testing configuration files:

- `vitest.config.ts` - `Vitest` config file
- `vue-test-utils.extend.ts` - mocks for third party objects

### Conventions enforced by automated tooling

To help you code with best practices in mind, this boilerplate comes with some automated tooling.

- All test descriptions follow naming convention `it('should ... ')`.
- Commit message enforces [Conventional Commits](https://www.conventionalcommits.org/) specification and use [commitizen](http://commitizen.github.io/cz-cli/) library.
- Automatic code linting is managed by [lint-staged](https://github.com/okonet/lint-staged) library and [Husky](https://typicode.github.io/husky/)

### Performance tools

In order to optimize and enhance the performance of the application, several performance tools have been integrated into the development workflow.

#### Nuxi (Nuxt CLI Tool) Bundle Analyzer

[Nuxi Bundle Analyzer](https://nuxt.com/docs/api/commands/analyze#nuxi-analyze) is a valuable performance tool employed in this project. It provides insights into the size and composition of the application's JavaScript bundles, allowing developers to identify and analyze any potential bottlenecks or optimizations. By visualizing the bundle size and dependencies, the Bundle Analyzer helps in identifying opportunities for code splitting, reducing bundle sizes, and optimizing the overall performance of the application.

> **Note**
> To analyze your app bundles run `npx nuxi analyze` command.

_You can use bundle analyzer to check the whole application structure along with server, or simply jump into the `apps/src` folder to analyze your web application._

#### Web performance automated testing

As one of our main goals is to help you deliver fast, performant websites, we included and configured CI/CD performance testing tools into this boilerplate.

The purpose of these tests is to help you catch performance regressions during the development process. For example, if you accidentally include a large library or create a long task that will not meet your performance criteria you will get an error/warning.

There are 2 options to run those tests:

**Run tests manually on the local environment**

To run the Lighthouse CI (LHCI) test, go to your main project folder and run the following command

```shell
yarn lhci:mobile
```

If you didn’t run the production build earlier, before running test you will need to

... install all dependencies by

```shell
yarn install
```

... then build project.

```shell
yarn build
```

LHCI configuration & assertion values are stored in `/lighthouserc.json`.

You can find more information about configuring LHCI in [THIS ARTICLE](https://web.dev/lighthouse-ci/) and in [official documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md).

**Run tests automatically on GitHub Action**

In the default configuration, automatic LHCI tests will run on every PR. you don’t even need to have the codebase released, the build is done automatically during the GitHub Action.

You can find workflow configuration at `/.github/workflows/run-lhci-test.yml`

You can configure your LHCI tests to block the merging of a Pull Request if the performance results fall below a certain threshold.

#### More about performance

Additional performance good practices and information can be found [HERE](https://docs.vuestorefront.io/v2/performance/intro.html).
