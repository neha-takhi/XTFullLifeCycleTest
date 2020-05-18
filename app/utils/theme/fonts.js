// @flow
type typography = { [key: string]: string | any };

const FALLBACK_FONT = 'Helvetica, Arial, sans-serif';
const GOTHAM_ULTRA_ITALIC = 'Gotham-Ultra-Italic, Helvetica';
const GOTHAM_LIGHT_ITALIC = 'Gotham-Light-Italic, Helvetica';
const GOTHAM_BOOK_ITALIC = 'Gotham-Book-Italic, Helvetica';
const GOTHAM_EXTRA_LIGHT_ITALIC = 'Gotham-Extra-Light-Italic, Helvetica';
const GOTHAM_ULTRA = 'Gotham-Ultra, Helvetica';
const GOTHAM_MEDIUM = 'Gotham-Medium, Helvetica';
const GOTHAM_EXTRA_LIGHT = 'Gotham-Extra-Light, Helvetica';
const GOTHAM_THIN = 'Gotham-Thin, Helvetica';
const GOTHAM_THIN_ITALIC = 'Gotham-Thin-Italic, Helvetica';
const GOTHAM_MEDIUM_ITALIC = 'Gotham-Medium-Italic, Helvetica';
const GOTHAM_LIGHT = 'Gotham-Light, Helvetica';
const GOTHAM_BOLD_ITALIC = 'Gotham-Bold-Italic, Helvetica';
const GOTHAM_BOLD = 'Gotham-Bold, Helvetica';
const GOTHAM_BOOK = 'Gotham-Book, Helvetica';
const GOTHAM_BLACK = 'Gotham-Black, Helvetica';
const GOTHAM_BLACK_ITALIC = 'Gotham-Black-Italic, Helvetica';

const FONT_IX = '0.97rem'; // 9.7px
const FONT_X = '10px';
const FONT_XXS = '1.17rem;'; // 11.7px
const FONT_XS = '1.2rem'; // 12px
const FONT_S = '1.4rem'; // 14px
const FONT_L = '1.6rem'; // 16px
const FONT_XVI = '1.68rem';
const FONT_XL = '1.8rem'; // 18px
const FONT_XXL = '2.0rem'; // 20px
const FONT_XXII = '2.02rem'; // 20.2px
const FONT_XXXL = '2.4rem'; // 24px
const FONT_XXIV = '2.42rem'; // 24.2px
const FONT_XXXXXL = '2.6rem'; // 26px
const FONT_XXIX = '2.9rem'; // 29px
const FONT_XXXXL = '3.2rem'; // 32px
const FONT_XXXXXXL = '3.4rem'; // 34px
const FONT_XXXIV = '3.48rem'; // 34.8px
const FONT_XXXXXXXL = '4.8rem'; // 48px
const FONT_XXXXXVII = '5.7rem'; // 57px
const FONT_XXXXXXXXL = '8.0rem'; // 80px
const LETTER_SPACING = '0';
const FONT_NORMAL = 'normal';
const FONT_BOOK = '400';
const FONT_300 = '300';
const FONT_MEDIUM = '500';
const FONT_SEMI_BOLD = '600';
const FONT_BOLD = '700';
const BASE_LINE_HEIGHT = '1.5';
const LINE_HEIGHT_FONT_XXS = '1.58rem';
const LINE_HEIGHT_FONT_S = '1.89rem';
const LINE_HEIGHT_FONT_XVI = '2.27rem';
const LINE_HEIGHT_FONT_XXI = '2.03rem';
const LINE_HEIGHT_FONT_XXII = '2.32rem';
const LINE_HEIGHT_HEADER_FONT_XXVII = '2.73rem';
const LINE_HEIGHT_HEADER_FONT_XXIV = '2.78rem';
const LINE_HEIGHT_HEADER_FONT_XXVIII = '2.86rem';
const LINE_HEIGHT_HEADER_FONT_XXXXI = '4.11rem';
const ICON_FONT = '6.4rem';
const LINE_HEIGHT_FONT_L = '1.61rem'; // 16.1px
const LINE_HEIGHT_FONT_XIII = '1.35rem'; // 13.5px

// Typography
export default ({
  GOTHAM_ULTRA_ITALIC,
  GOTHAM_LIGHT_ITALIC,
  GOTHAM_BOOK_ITALIC,
  GOTHAM_EXTRA_LIGHT_ITALIC,
  GOTHAM_ULTRA,
  GOTHAM_MEDIUM,
  GOTHAM_EXTRA_LIGHT,
  GOTHAM_THIN,
  GOTHAM_THIN_ITALIC,
  GOTHAM_MEDIUM_ITALIC,
  GOTHAM_LIGHT,
  GOTHAM_BOLD_ITALIC,
  GOTHAM_BOLD,
  GOTHAM_BOOK,
  GOTHAM_BLACK,
  GOTHAM_BLACK_ITALIC,
  FALLBACK_FONT,
  FONT_X,
  FONT_XS,
  FONT_XXS,
  FONT_S,
  FONT_L,
  FONT_XVI,
  LETTER_SPACING,
  FONT_NORMAL,
  FONT_BOOK,
  FONT_MEDIUM,
  FONT_SEMI_BOLD,
  FONT_BOLD,
  BASE_LINE_HEIGHT,
  LINE_HEIGHT_FONT_XXS,
  LINE_HEIGHT_FONT_S,
  LINE_HEIGHT_FONT_XXI,
  LINE_HEIGHT_FONT_XXII,
  LINE_HEIGHT_FONT_XVI,
  FONT_XL,
  FONT_XXL,
  FONT_XXIV,
  FONT_XXII,
  FONT_XXXL,
  FONT_XXXXL,
  FONT_XXXXXL,
  FONT_XXXXXXL,
  FONT_XXXXXVII,
  FONT_XXXXXXXL,
  FONT_XXXXXXXXL,
  FONT_XXIX,
  FONT_XXXIV,
  LINE_HEIGHT_HEADER_FONT_XXVII,
  LINE_HEIGHT_HEADER_FONT_XXIV,
  LINE_HEIGHT_HEADER_FONT_XXVIII,
  LINE_HEIGHT_HEADER_FONT_XXXXI,
  FONT_300,
  FONT_IX,
  ICON_FONT,
  LINE_HEIGHT_FONT_L,
  LINE_HEIGHT_FONT_XIII,
}: typography);
