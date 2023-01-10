type ansiBreaker = 0;
type ansiFormats = 1 | 2 | 3 | 4 | 9;
type ansiFontsColors = 30 | 31 | 32 | 33 | 34 | 35 | 36 | 97;
type ansiBgColors = 40 | 41 | 42 | 44 | 44 | 45 | 46 | 107;
type ansiId = ansiBreaker | ansiFormats | ansiFontsColors | ansiBgColors;
type ansiCode = `\x1b[${ansiId}m`;
type color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
type style = 'bold' | 'light' | 'italic' | 'underline' | 'crossed';
type types = 'title' | 'subtitle' | 'error' | 'warning' | 'info';

/**
 * Returns an ansi code from it's id.
 * @param  {ansiId} id
 * @returns ansiCode
 */
const code = (id: ansiId): ansiCode => `\x1b[${id}m`;

const BREAKER: ansiCode = code(0);

/**
 * Returns the ansi id of a font or background color given it's name.
 * @param  {color} color
 * @param  {boolean} isBg
 * @returns ansiCode
 */
const colorCodes = (color: color, isBg: boolean): ansiCode => {
  const baseId = isBg ? 40 : 30;
  const colors = {
    black: 0,
    red: 1,
    green: 2,
    yellow: 3,
    blue: 4,
    magenta: 5,
    cyan: 6,
    white: 67,
  };
  return code((colors[color] + baseId) as ansiFontsColors | ansiBgColors);
};

/**
 * Returns the ansi id of a text format given it's name.
 * @param  {style} style
 * @returns ansiCode
 */
const styleCodes = (style: style): ansiCode => {
  const styles = {
    bold: 1,
    light: 2,
    italic: 3,
    underline: 4,
    crossed: 9,
  };
  return code(styles[style] as ansiFormats);
};

/**
 * @param  {types} type
 * @returns string
 */
const formatTypes =
  (type: types) =>
    (text: string): string => {
      if (text === '') return '🚀';
      const types = {
        title: (text: string): string =>
          `🚀 ${colorCodes('green', true)}${colorCodes('white', false)}${styleCodes(
            'bold',
          )} ${text.toUpperCase()} ${BREAKER}`,
        subtitle: (text: string): string =>
          `#️⃣ ${colorCodes('cyan', false)}${styleCodes('italic')} ${text.toUpperCase()} ${BREAKER}`,
        error: (text: string): string =>
          `🔴 ${colorCodes('red', true)}${colorCodes('white', false)}${styleCodes('bold')} ERROR: ${BREAKER} ${colorCodes(
            'red',
            false,
          )}${styleCodes('underline')}${text}${BREAKER}`,
        warning: (text: string): string =>
          `🌡️  ${colorCodes('yellow', true)}${colorCodes('white', false)}${styleCodes(
            'bold',
          )} WARNING: ${BREAKER} ${colorCodes('yellow', false)}${text}${BREAKER}`,
        info: (text: string): string =>
          `👀 ${colorCodes('cyan', true)}${colorCodes('white', false)}${styleCodes('bold')} INFO: ${BREAKER} ${colorCodes(
            'cyan',
            false,
          )}${text}${BREAKER}`,
      };
      return types[type](text);
    };

/**
 * Formats an string with ansi codes for terminal console logs.
 * @param  {string} text
 * @param  {{color?:color;bg?:color;style?:style}} options?
 * @returns string
 */
export const format = (text: string, options?: { color?: color; bg?: color; style?: style }): string => {
  if (text === '') return '🚀';
  if (options === undefined) return `🚀 ${text}`;
  const { color, bg, style } = options;
  console.log({ color, bg, style });
  return `🚀 ${color !== undefined ? colorCodes(color, false) : ''}${bg !== undefined ? colorCodes(bg, true) : ''}${style !== undefined ? styleCodes(style) : ''
    }${text}${BREAKER}`;
};

/**
 * Returns a 'Title' formatted string;
 * @param  {string} text
 */
export const title = formatTypes('title');
/**
 * Returns a 'Subtitle' formatted string;
 * @param  {string} text
 */
export const subtitle = formatTypes('subtitle');
/**
 * Returns an 'Error' formatted string;
 * @param  {string} text
 */
export const error = formatTypes('error');
/**
 * Returns a 'Warning' formatted string;
 * @param  {string} text
 */
export const warning = formatTypes('warning');
/**
 * Returns an 'Info' formatted string;
 * @param  {string} text
 */
export const info = formatTypes('info');
