import { darken, lighten, rgba } from 'polished'

const themeColors = {
  primary: '#0573db',
  base: '#ECEFF3',
  danger: '#DD0000',
  darkGray: '#333333',
  gray: '#9B9B9B',
  lightGray: '#D9D9D9',
  white: '#FFFFFF',
  black: '#000000',
  text: '#191919',
  lightText: '#F0F0F0'
};

const colorVariations = {
  lighter: 0.05,
  lightest: 0.1,
  darker: 0.1,
  darkest: 0.2,
  overlay: 0.45,
  overlayHover: 0.5,
};

/**
 * Creates variables with diffent shades given a color.
 * @param {string} name the color name prefix
 * @param {string} color the color code of the base variant
 * @param {boolean} overlay whether or not to include overlay colors
 */
function makeVariations(name, color, overlay = false) {
  const variations = {};
  variations[name] = color;
  variations[`${name}Lighter`] = lighten(colorVariations.lighter, color);
  variations[`${name}Lightest`] = lighten(colorVariations.lightest, color);
  variations[`${name}Darker`] = darken(colorVariations.darker, color);
  variations[`${name}Darkest`] = darken(colorVariations.darkest, color);
  if (overlay) {
    variations[`${name}Overlay`] = lighten(colorVariations.overlay, color);
    variations[`${name}OverlayHover`] = lighten(colorVariations.overlayHover, color);
  }
  return variations;
};
export function createTheme(colorObject) {
   return {
    ...makeVariations('primary', colorObject && colorObject.primary? colorObject.primary: themeColors.primary, true),
    ...makeVariations('base', colorObject && colorObject.base? colorObject.base: themeColors.base),
    ...makeVariations('danger',colorObject && colorObject.danger?colorObject.danger: themeColors.danger, true),
    ...makeVariations('darkGray',colorObject && colorObject.darkGray? colorObject.darkGray: themeColors.darkGray),
    ...makeVariations('gray', colorObject && colorObject.gray? colorObject.gray: themeColors.gray),
    ...makeVariations('lightGray',colorObject && colorObject.lightGray? colorObject.lightGray: themeColors.lightGray),
        black: colorObject && colorObject.black ?colorObject.black: themeColors.black,
        white: colorObject && colorObject.white? colorObject.white: themeColors.white,
        text: colorObject && colorObject.text?colorObject.text: themeColors.text,
        lightText: colorObject && colorObject.lightText?colorObject.lightText: themeColors.lightText,
        shadow: rgba(colorObject && colorObject.black?colorObject.black: themeColors.black, 0.12)
    };
}
export const theme = createTheme();
