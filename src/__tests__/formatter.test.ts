import { format, title, subtitle, error, warning, info } from '../';

test('Formatter on correct parameters', () => {
  const text = `${format('Hello', { color: 'green', bg: 'yellow', style: 'bold' })} World`;
  expect(text).toEqual('🚀 \x1b[32m\x1b[43m\x1b[1mHello\x1b[0m World');
});

test('Formatters to work without text', () => {
  const text1 = `${format('', { color: 'green', bg: 'yellow', style: 'bold' })} World`;
  const text2 = `${title('')} World`;
  const text3 = `${subtitle('')} World`;
  const text4 = `${error('')} World`;
  const text5 = `${warning('')} World`;
  const text6 = `${info('')} World`;
  const result = '🚀 World';
  expect(text1).toEqual(result);
  expect(text2).toEqual(result);
  expect(text3).toEqual(result);
  expect(text4).toEqual(result);
  expect(text5).toEqual(result);
  expect(text6).toEqual(result);
});

test('Formatter with no formats', () => {
  const text = `${format('Hello')} World`;
  expect(text).toEqual('🚀 Hello World');
});

test('Title with text', () => {
  const text = `${title('Hello')} World`;
  expect(text).toEqual(`🚀 \x1b[42m\x1b[97m\x1b[1m HELLO \x1b[0m World`);
});

test('Subtitle with text', () => {
  const text = `${subtitle('Hello')} World`;
  expect(text).toEqual(`#️⃣ \x1b[36m\x1b[3m HELLO \x1b[0m World`);
});

test('Error with text', () => {
  const text = `${error('Hello')} World`;
  expect(text).toEqual(`🔴 \x1b[41m\x1b[97m\x1b[1m ERROR: \x1b[0m \x1b[31m\x1b[4mHello\x1b[0m World`);
});

test('Warning with text', () => {
  const text = `${warning('Hello')} World`;
  expect(text).toEqual(`🌡️  \x1b[43m\x1b[97m\x1b[1m WARNING: \x1b[0m \x1b[33mHello\x1b[0m World`);
});

test('Info with text', () => {
  const text = `${info('Hello')} World`;
  expect(text).toEqual(`👀 \x1b[46m\x1b[97m\x1b[1m INFO: \x1b[0m \x1b[36mHello\x1b[0m World`);
});
