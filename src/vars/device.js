const size = {
  mobile: '320px',
  mobileTablet: '480px',
  tablet: '768px',
  desktop: '1280px',
  preMobile: '319px',
  preMobileTablet: '479px',
  preTablet: '767px',
  preDesktop: '1279px',
};
export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileTablet: `(min-width: ${size.mobileTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  preMobile: `(max-width: ${size.preMobile})`,
  preMobileTablet: `(max-width: ${size.preMobileTablet})`,
  preTablet: `(max-width: ${size.preTablet})`,
  preDesktop: `(max-width: ${size.preDesktop})`,
};
