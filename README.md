# Format Logs

> Simple and flexible to use formatting for terminal console logs.

![examples](assets/examples.png)

## Install

```bash
npm i format-logs
```

## Usage

```javascript
import { custom } from 'format-logs';

console.log(custom('Hello World', 'green'));
```

It is also possible to easily compose complex large styles.

```javascript
import { custom } from 'format-logs';

// Using method composition
// Creates an string with bold font, yellow background and green text color
// All text styles can be used like this
console.log(log.green.bgYellow.bold('Hello World'));

// Creates an string with blue background, white text and bold font style.
console.log(custom('Hello World', 'bgBlue', 'white', 'bold'));

// It's also possible to combine it with normal strings.
console.log(`${custom('Hello', 'brightBlue', 'bgWhite', 'underline')} World!`);
```

There are also already defined styles.

```javascript
import { title, sub, err, warn, info } from 'format-logs';

// Creates a title string;
console.log(title('title'));

// Creates a subtitle string;
console.log(sub('subtitle'));

// Creates an error string;
console.log(err('error'));

// Creates a warning string;
console.log(warn('warning'));

// Creates an information string;
console.log(info('information'));
```

![Defined styles examples](assets/examples2.png)

## Styles

* `bold` : Bold style text.
* `light` : Light style text.
* `italic` : Italic style text.
* `underline` : Underline style text.
* `crossed` : Crossed style text.

## Colors

* `black` : Black text color.
* `red` : Red text color.
* `green` : Green text color.
* `yellow` : Yellow text color.
* `blue` : Blue text color.
* `magenta` : Magenta text color.
* `cyan` : Cyan text color.
* `white` : White text color.
* `brightBlack` : Bright black text color.
* `brightRed` : Bright red text color.
* `brightGreen` : Bright green text color.
* `brightYellow` : Bright yellow text color.
* `brightBlue` : Bright blue text color.
* `brightMagenta` : Bright magenta text color.
* `brightCyan` : Bright cyan text color.
* `brightWhite` : Bright white text color.

## Background colors

* `bgBlack` : Black background color.
* `bgRed` : Red background color.
* `bgGreen` : Green background color.
* `bgYellow` : Yellow background color.
* `bgBlue` : Blue background color.
* `bgMagenta` : Magenta background color.
* `bgCyan` : Cyan background color.
* `bgWhite` : White background color.
* `bgBrightBlack` : Bright black background color.
* `bgBrightRed` : Bright red background color.
* `bgBrightGreen` : Bright green background color.
* `bgBrightYellow` : Bright yellow background color.
* `bgBrightBlue` : Bright blue background color.
* `bgBrightMagenta` : Bright magenta background color.
* `bgBrightCyan` : Bright cyan background color.
* `bgBrightWhite` : Bright white background color.
