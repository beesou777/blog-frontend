import { createSharedComposable, syncRefs, useBreakpoints as useBreakpointsVueUse } from '@vueuse/core';

/**
 * @description Composable that prepares breakpoints-dependent refs
 * @example
 * ``` ts
 * const { isMobile, isTablet, isDesktop } = useBreakpoints();
 * ```
 */
export const useBreakpoints = createSharedComposable(() => {
  const breakpoints = useBreakpointsVueUse({
    mobile: '568px',
    tablet: '768px',
    desktop: '1024px',
  });

  const isMobile = ref(true);
  const isTablet = ref(false);
  const isDesktop = ref(false);

  onMounted(() => {
    syncRefs(breakpoints.greaterOrEqual('mobile'), isMobile);
    syncRefs(breakpoints.greaterOrEqual('tablet'), isTablet);
    syncRefs(breakpoints.greaterOrEqual('desktop'), isDesktop);
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
});
