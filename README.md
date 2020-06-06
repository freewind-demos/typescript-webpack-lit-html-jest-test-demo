TypeScript Webpack lit-html Jest Test Demo
=======================================

Write test for lit-html with jest.

```
npm install
npm run test
```

Reports error:

```
FAIL  src/sayHello.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /workspace/typescript-webpack-lit-html-jest-test-demo/node_modules/lit-html/lit-html.js:31
    import { defaultTemplateProcessor } from './lib/default-template-processor.js';
    ^^^^^^

    SyntaxError: Cannot use import statement outside a module

    > 1 | import {html, TemplateResult} from 'lit-html';
        | ^
      2 |
      3 | export default function sayHello(name: string): TemplateResult {
      4 |   return html`<h1>Hello ${name}</h1>`;

      at Runtime._execModule (node_modules/jest-runtime/build/index.js:1166:56)
      at Object.<anonymous> (src/sayHello.ts:1:1)
      at Object.<anonymous> (src/sayHello.test.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.339 s
Ran all test suites.
error Command failed with exit code 1.
```

I tried all kinds of configurations I found, but can't fix it.

Fixed by the help from @Teneff, thanks!

https://stackoverflow.com/questions/62200568/syntaxerror-cannot-use-import-statement-outside-a-module-when-writing-test-wi/62216912#62216912
