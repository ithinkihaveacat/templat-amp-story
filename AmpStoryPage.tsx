import { React } from "./jsx";
import id from "./id";

export enum Theme {
  Plain,
  Cover,
  Journey,
  WhatToBring,
  CantWait
}

interface Base {
  theme: Theme;
  children?: {
    [k: string]: any;
  };
}

interface Plain extends Base {
  theme: Theme.Plain;
}

interface Cover extends Base {
  theme: Theme.Cover;
  header: string;
  body: string;
  img_src: string;
}

interface Journey extends Base {
  theme: Theme.Journey;
  video_src: string;
  video_poster: string;
  header: string;
  body: string;
}

interface WhatToBring extends Base {
  theme: Theme.WhatToBring;
  bg_src: string;
  fg_src: string;
  header: string;
  body: string;
}

interface CantWait extends Base {
  theme: Theme.CantWait;
  bg_src: string;
  fg1_src: string;
  fg2_src: string;
}

export function AmpStoryPage(
  props: Plain | Cover | Journey | WhatToBring | CantWait
) {
  switch (props.theme) {
    case Theme.Plain:
      return <amp-story-page id={id()}>{props.children}</amp-story-page>;

    case Theme.Cover:
      const header = props.header.split(/\s/);
      return (
        <amp-story-page id={id()} class="cover">
          <amp-story-grid-layer template="fill">
            <amp-img
              class="bkgd"
              src={props.img_src}
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="fill" class="gradient" />
          <amp-story-grid-layer template="vertical" class="copy-layer">
            <h1
              animate-in="fly-in-bottom"
              animate-in-duration="0.55s"
              animate-in-delay="0.35s">
              <span class="horiz">{header[0]}</span>
              <span class="yellow">{header[1].toUpperCase()}</span>
              {header[2].toUpperCase()}
            </h1>
            <p
              class="copy"
              animate-in="fade-in"
              animate-in-duration="0.75s"
              animate-in-delay="0.75s">
              {props.body}
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
      );

    case Theme.Journey:
      return (
        <amp-story-page id={id()} class="journey">
          <amp-story-grid-layer template="fill">
            <amp-video
              width="960"
              height="1280"
              autoplay=""
              noaudio=""
              layout="responsive"
              src={props.video_src}
              poster={props.video_poster}
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical" class="copy-layer">
            <h2
              animate-in="fly-in-right"
              animate-in-duration="0.6s"
              animate-in-delay="0.2s">
              {props.header}
            </h2>
            <p
              class="copy"
              animate-in="fade-in"
              animate-in-duration="0.7s"
              animate-in-delay="0.6s">
              {props.body}
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
      );

    case Theme.WhatToBring:
      return (
        <amp-story-page id={id()} class="what-to-bring">
          <amp-story-grid-layer template="fill">
            <amp-img src={props.bg_src} width="960" height="1280" />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical" class="mars-wrapper">
            <amp-img
              class="mars"
              src={props.fg_src}
              width="960"
              height="450"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical" class="suitcase-wrapper">
            {props.children}
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical" class="copy-layer">
            <h2
              animate-in="fly-in-bottom"
              animate-in-duration="0.5s"
              animate-in-delay="1.05s">
              {props.header}
            </h2>
            <p
              animate-in="fade-in"
              animate-in-duration="0.6s"
              animate-in-delay="1.55s">
              {props.body}
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
      );

    case Theme.CantWait:
      return (
        <amp-story-page id={id()} class="cantwait">
          <amp-story-grid-layer template="fill">
            <amp-img
              src={props.bg_src}
              width="960"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="fill">
            <amp-img
              class="mars"
              src={props.fg1_src}
              width="960"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="fill">
            <amp-img
              class="astronaut"
              src={props.fg2_src}
              width="960"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical" class="copy-layer">
            {props.children}
          </amp-story-grid-layer>
        </amp-story-page>
      );
  }
}

export default AmpStoryPage;
