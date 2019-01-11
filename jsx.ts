// Proxy React.createElement and React.Fragment to their vhtml equivalents. A
// temporary workaround until TypeScript has better support for Fragments and
// JSX systems other than React; see https://github.com/developit/vhtml/pull/16.

import h = require("./vhtml");

// How to generate vhtml.js?
//
// git clone git@github.com:ithinkihaveacat/vhtml.git
// git checkout support-fragments
// npm i
// cp dist/vhtml.js ~/workspace/beebo-site

export const React = {
  createElement: h,
  Fragment: ({ children }: { children: string[] }) => h(null, null, ...children),
};
