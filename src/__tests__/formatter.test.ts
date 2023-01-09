import { format } from '../';

test('Formatter on correct parameters', () => {
  const text = `${format('Hello', { color: 'green', bg: 'yellow', style: 'bold' })} World`;
  expect(text).toEqual('\x1b[32m\x1b[43m\x1b[1mHello\x1b[0m World');
});

test('Formatter without text', () => {
  const text = `${format('', { color: 'green', bg: 'yellow', style: 'bold' })} World`;
  expect(text).toEqual(' World');
});

test('Formatter with no formats', () => {
  const text = `${format('Hello', {})} World`;
  expect(text).toEqual('Hello World');
});
