import { React } from "./jsx";
import id from "./id";

export enum Theme {
  London,
  Paris
}

type URL = string;

interface Base {
  theme: Theme,
  children?: {
    [k: string]: any
  }
}

interface London extends Base {
  theme: Theme.London,
  background: URL;
}

interface Paris extends Base {
  theme: Theme.Paris;
  message: string;
}

export function AmpStoryPage(props: London | Paris) {
  switch (props.theme) {
    case Theme.London:
      return <amp-story-page id={id()}>{props.children}</amp-story-page>;

    case Theme.Paris:
      return <amp-story-page id={id()}>{props.children}</amp-story-page>;
  }
}

export default AmpStoryPage;
