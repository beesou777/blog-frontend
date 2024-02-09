/**
 * Composable for setting the page title.
 * Used in layouts. Title can be changed in pages through the `useHead` composable.
 */
export const usePageTitle = () => {
  const { name } = useAppConfig();

  useHead({
    titleTemplate: (title) => {
      return title ? `${title} | ${name}` : name;
    },
  });
};
