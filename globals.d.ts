// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules

// Type checking for intrinsic elements (i.e. lower-case elements like <foo />),
// see https://www.typescriptlang.org/docs/handbook/jsx.html

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: {
      [k: string]: string | number | { __html: string } | undefined;
      dangerouslysetinnerhtml?: { __html: string };
    };
  }
}
