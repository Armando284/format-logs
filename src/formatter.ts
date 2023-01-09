type ansiBreaker = 0;
type ansiFormats = 1 | 2 | 3 | 4 | 9;
type ansiFontsColors = 30 | 31 | 32 | 33 | 34 | 35 | 36 | 97;
type ansiBgColors = 40 | 41 | 42 | 44 | 44 | 45 | 46 | 107;
type ansiId = ansiBreaker | ansiFormats | ansiFontsColors | ansiBgColors;
type ansiCode = `\x1b[${ansiId}m`;
type color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
type style = 'bold' | 'light' | 'italic' | 'underline' | 'crossed';
interface options {
  color?: color;
  bg?: color;
  style?: style;
}

const BREAKER: ansiBreaker = 0;
const code = (id: ansiId): ansiCode => `\x1b[${id}m`;

const colorCodes = (color: color, isBg: boolean): ansiFontsColors | ansiBgColors => {
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
  return (colors[color] + baseId) as ansiFontsColors | ansiBgColors;
};

const styleCodes = (style: style): ansiFormats => {
  const styles = {
    bold: 1,
    light: 2,
    italic: 3,
    underline: 4,
    crossed: 9,
  };
  return styles[style] as ansiFormats;
};

export const format = (text: string, options: options): string => {
  const { color, bg, style } = options;
  if (text === '') return '';
  if (color === undefined && bg === undefined && style === undefined) return text;
  return `${color !== undefined ? code(colorCodes(color, false)) : ''}${
    bg !== undefined ? code(colorCodes(bg, true)) : ''
  }${style !== undefined ? code(styleCodes(style)) : ''}${text}${code(BREAKER)}`;
};
