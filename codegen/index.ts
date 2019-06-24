import prettier from 'prettier';
import componentCode from './componentCode';
import duplicateWrapperComponentCode from './duplicateWrapperComponentCode';

const code = prettier.format(
  `
  ${componentCode}
  ${duplicateWrapperComponentCode}
  `,
  { parser: 'typescript' },
);

// For debugging purposes.
// console.log(code.split('\n').map((line, index) => `${index + 1}${line}`).join('\n'));

process.stdout.write(code);