import { ansiCode, formats } from '.'

const code = (id: number): ansiCode => `\x1b[${id}m`;

const format =
  (id: number) =>
    (text: string): string => {
      if (text === '') return '';
      if (id === undefined) return `${text}`;
      return `${code(id)}${text}${BREAKER}`;
    };

const BREAKER: ansiCode = code(0);

const fontColors = {
  black: format(30),
  red: format(31),
  green: format(32),
  yellow: format(33),
  blue: format(34),
  magenta: format(35),
  cyan: format(36),
  white: format(37),
  brightBlack: format(90),
  brightRed: format(91),
  brightGreen: format(92),
  brightYellow: format(93),
  brightBlue: format(94),
  brightMagenta: format(95),
  brightCyan: format(96),
  brightWhite: format(97),
};

const bgColors = {
  bgBlack: format(40),
  bgRed: format(41),
  bgGreen: format(42),
  bgYellow: format(43),
  bgBlue: format(44),
  bgMagenta: format(45),
  bgCyan: format(46),
  bgWhite: format(47),
  bgBrightBlack: format(100),
  bgBrightRed: format(101),
  bgBrightGreen: format(102),
  bgBrightYellow: format(103),
  bgBrightBlue: format(104),
  bgBrightMagenta: format(105),
  bgBrightCyan: format(106),
  bgBrightWhite: format(107),
};

const styles = {
  bold: format(1),
  light: format(2),
  italic: format(3),
  underline: format(4),
  crossed: format(9),
};

const base = {
  ...fontColors,
  ...bgColors,
  ...styles,
};

export const compose = (text: string, ...ms: formats[]): string => {
  if (text === '') return '';
  return `${ms.reduce((a: string, b: formats) => base[b](a), text)}`;
};

export const title = (text: string): string => {
  if (text === '') return '';
  return `🚀 ${compose(` ${text} `, 'bgGreen', 'brightWhite', 'bold')}`;
};
export const sub = (text: string): string => {
  if (text === '') return '';
  return `#️⃣  ${compose(text, 'cyan', 'underline')}`;
};
export const err = (text: string): string => {
  if (text === '') return '';
  return `🔴 ${compose(' ERROR: ', 'bgRed', 'brightWhite', 'bold')} ${compose(text, 'red')}`;
};
export const warn = (text: string): string => {
  if (text === '') return '';
  return `🌡️  ${compose(' WARNING: ', 'bgYellow', 'brightWhite', 'bold')} ${compose(text, 'yellow')}`;
};
export const info = (text: string): string => {
  if (text === '') return '';
  return `👀 ${compose(' INFO: ', 'bgCyan', 'brightWhite', 'bold')} ${compose(text, 'cyan')}`;
};