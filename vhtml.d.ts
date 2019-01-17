// How to generate vhtml.js?
//
// git clone git@github.com:ithinkihaveacat/vhtml.git
// git checkout support-fragments
// npm i
// cp dist/vhtml.js ~/workspace/beebo-site

// https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html

export = h;

declare function h(
  name: string | null,
  attrs: { [k: string]: any } | null,
  ...children: string[]
): string;
