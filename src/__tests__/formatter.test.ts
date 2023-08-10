import { custom, title, sub, err, warn, info, log } from '../';
// import * as fs from 'fs';

// async function saveData(data = ''): Promise<void> {
//   // Note: This === symbol it's the same of 3 consecutive = symbols, 
//   //          it checks for type and value equality
//   if (data === '') {
//     throw new Error('Empty data!')
//   }
//   const content = JSON.stringify(data, null, '\t');
//   try {

//     /**
//      * If you want to add more than one result to your file
//      * change the writeFile function 
//      * for the appendFile function
//      */
//     //  @ts-expect-error
//     // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
//     await fs.writeFile('saveFile.txt', content);
//     console.log('File saved!');
//   } catch (err) {
//     console.log(err);
//   }
// }

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

test('Formatter on builder with correct parameters', async () => {
  const text = `${log.green.bgYellow.bold('Hello')} World`;
  expect(text).toEqual('\u001b[1m\u001b[43m\u001b[32mHello\u001b[0m\u001b[0m\u001b[0m World');
});