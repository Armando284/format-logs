export type ansiCode = `\x1b[${number}m`;

export type color =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'brightBlack'
  | 'brightRed'
  | 'brightGreen'
  | 'brightYellow'
  | 'brightBlue'
  | 'brightMagenta'
  | 'brightCyan'
  | 'brightWhite';

export type bgColor =
  | 'bgBlack'
  | 'bgRed'
  | 'bgGreen'
  | 'bgYellow'
  | 'bgBlue'
  | 'bgMagenta'
  | 'bgCyan'
  | 'bgWhite'
  | 'bgBrightBlack'
  | 'bgBrightRed'
  | 'bgBrightGreen'
  | 'bgBrightYellow'
  | 'bgBrightBlue'
  | 'bgBrightMagenta'
  | 'bgBrightCyan'
  | 'bgBrightWhite';

export type style = 'bold' | 'light' | 'italic' | 'underline' | 'crossed';

export type formats = color | bgColor | style;

export interface ILogFormatter {
  (text: string): string,
  styles: formats[],
  black: ILogFormatter,
  red: ILogFormatter,
  green: ILogFormatter,
  yellow: ILogFormatter,
  blue: ILogFormatter,
  magenta: ILogFormatter,
  cyan: ILogFormatter,
  white: ILogFormatter,
  brightBlack: ILogFormatter,
  brightRed: ILogFormatter,
  brightGreen: ILogFormatter,
  brightYellow: ILogFormatter,
  brightBlue: ILogFormatter,
  brightMagenta: ILogFormatter,
  brightCyan: ILogFormatter,
  brightWhite: ILogFormatter,
  bgBlack: ILogFormatter,
  bgRed: ILogFormatter,
  bgGreen: ILogFormatter,
  bgYellow: ILogFormatter,
  bgBlue: ILogFormatter,
  bgMagenta: ILogFormatter,
  bgCyan: ILogFormatter,
  bgWhite: ILogFormatter,
  bgBrightBlack: ILogFormatter,
  bgBrightRed: ILogFormatter,
  bgBrightGreen: ILogFormatter,
  bgBrightYellow: ILogFormatter,
  bgBrightBlue: ILogFormatter,
  bgBrightMagenta: ILogFormatter,
  bgBrightCyan: ILogFormatter,
  bgBrightWhite: ILogFormatter,
  bold: ILogFormatter,
  light: ILogFormatter,
  italic: ILogFormatter,
  underline: ILogFormatter,
  crossed: ILogFormatter,
}