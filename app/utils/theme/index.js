import colors from './colors';
import fonts from './fonts';
import zIndex from './zIndex';
import dimension from './dimensions';
import transition from './transition';

const theme = {
  black: colors.BLACK,
};

const themes = { dimension, zIndex, ...theme };
export default themes;
