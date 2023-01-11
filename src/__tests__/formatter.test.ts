import { custom, title, sub, err, warn, info } from '../';

test('Formatter on correct parameters', () => {
  const text = `${custom('Hello', 'green', 'bgYellow', 'bold')} World`;
  expect(text).toEqual('\u001b[1m\u001b[43m\u001b[32mHello\u001b[0m\u001b[0m\u001b[0m World');
});

test('Formatters to work without text', () => {
  const text1 = `${custom('', 'green', 'bgYellow', 'bold')} World`;
  const text2 = `${title('')} World`;
  const text3 = `${sub('')} World`;
  const text4 = `${err('')} World`;
  const text5 = `${warn('')} World`;
  const text6 = `${info('')} World`;
  const result = ' World';
  expect(text1).toEqual(result);
  expect(text2).toEqual(result);
  expect(text3).toEqual(result);
  expect(text4).toEqual(result);
  expect(text5).toEqual(result);
  expect(text6).toEqual(result);
});

test('Formatter with no formats', () => {
  const text = `${custom('Hello')} World`;
  expect(text).toEqual('Hello World');
});

test('Title with text', () => {
  const text = `${title('Hello')} World`;
  expect(text).toEqual(`🚀 \u001b[1m\u001b[97m\u001b[42m Hello \u001b[0m\u001b[0m\u001b[0m World`);
});

test('Subtitle with text', () => {
  const text = `${sub('Hello')} World`;
  expect(text).toEqual(`#️⃣  \u001b[4m\u001b[36mHello\u001b[0m\u001b[0m World`);
});

test('Error with text', () => {
  const text = `${err('Hello')} World`;
  expect(text).toEqual(
    `🔴 \u001b[1m\u001b[97m\u001b[41m ERROR: \u001b[0m\u001b[0m\u001b[0m \u001b[31mHello\u001b[0m World`,
  );
});

test('Warning with text', () => {
  const text = `${warn('Hello')} World`;
  expect(text).toEqual(
    `🌡️  \u001b[1m\u001b[97m\u001b[43m WARNING: \u001b[0m\u001b[0m\u001b[0m \u001b[33mHello\u001b[0m World`,
  );
});

test('Info with text', () => {
  const text = `${info('Hello')} World`;
  expect(text).toEqual(
    `👀 \u001b[1m\u001b[97m\u001b[46m INFO: \u001b[0m\u001b[0m\u001b[0m \u001b[36mHello\u001b[0m World`,
  );
});
