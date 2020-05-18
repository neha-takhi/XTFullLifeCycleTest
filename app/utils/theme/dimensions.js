// @flow
// eslint-disable-next-line no-unused-vars
type dimension = {
  [key: string]: number | Object,
};

// Component dimension
const dimensionConst = {
  MIN_WIDTH_MOBILE: 360,
  MIN_WIDTH_DESKTOP: 960,
  MIN_WIDTH_MID_DESKTOP: 1366,
  MAX_WIDTH_MOBILE: 959,
  MIN_WIDTH_TABLET: 48,
  MIN_WIDTH_LARGE_DESKTOP: 1920,
  MAX_WIDTH_TABLET: 64,
};

const mediaQuery = {
  extraLarge: `(min-width: ${dimensionConst.MIN_WIDTH_LARGE_DESKTOP}px)`,
  midDesktop: `(min-width:${dimensionConst.MIN_WIDTH_MID_DESKTOP}px)`,
  large: `(min-width: ${dimensionConst.MIN_WIDTH_DESKTOP}px)`,
  smallMax: `(max-width: ${dimensionConst.MAX_WIDTH_MOBILE}px)`,
  tablet: `(min-width: ${dimensionConst.MIN_WIDTH_TABLET}rem)`,
  small: `(min-width: ${dimensionConst.MIN_WIDTH_MOBILE}px)`,
  tabletMax: '(min-width: 500px) and (max-width: 959px)',
  desktopMin: '(min-width: 960px) and (max-width: 1024px)',
};

export default { dimensionConst, mediaQuery };
