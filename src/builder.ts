import { formats, ILogFormatter, custom } from '.'

const logStyles: formats[] = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'brightBlack',
  'brightRed',
  'brightGreen',
  'brightYellow',
  'brightBlue',
  'brightMagenta',
  'brightCyan',
  'brightWhite',
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
  'bgWhite',
  'bgBrightBlack',
  'bgBrightRed',
  'bgBrightGreen',
  'bgBrightYellow',
  'bgBrightBlue',
  'bgBrightMagenta',
  'bgBrightCyan',
  'bgBrightWhite',
  'bold',
  'light',
  'italic',
  'underline',
  'crossed',
];

function addStyle(style: formats): void {
  // @ts-expect-error
  if (this.styles === undefined) {
    // @ts-expect-error
    this.styles = [];
  }
  // @ts-expect-error
  this.styles.push(style);
}

// @ts-expect-error
const logFn: ILogFormatter = function (text: string): string {
  // @ts-expect-error
  if (this.styles !== undefined && this.styles !== null && this.styles.length > 0) {
    // @ts-expect-error
    return custom(text, ...this.styles);
  }
  return text;
}

logStyles.forEach((style) => {
  Object.defineProperty(logFn, style, {
    get(): ILogFormatter {
      addStyle.call(this, style);
      return this;
    },
  });
});

export const log = logFn;