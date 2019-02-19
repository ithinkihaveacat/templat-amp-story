import { readFileSync } from "fs";
// import { resolve } from "url";

import { React } from "./jsx";

import Schema from "./Schema";

interface StoryMetadata {
  title: string;
  publisher: string;
  publisher_logo_src?: string;
  poster_portrait_src?: string;
  poster_square_src?: string;
  poster_landscape_src?: string;
  background_audio?: string;
}

interface SchemaMetadata {
  "@context": string;
  "@type": string;
  headline: string;
  url: string;
}

export default (props: {
  story: StoryMetadata;
  schema: SchemaMetadata;
  children?: string[];
}) => {
  const AMP_BOILERPLATE = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`;
  const AMP_CUSTOM = readFileSync("custom.css").toString();
  return (
    <html amp="" lang="en">
      <head>
        <meta charset="utf-8" />
        <script async="" src="https://cdn.ampproject.org/v0.js" />
        <script
          async=""
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
        <script
          async=""
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        />
        <title>{props.story.title}</title>
        <link
          rel="canonical"
          href="https://ithinkihaveacat.github.io/hello-world-amp-story/"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Concert+One"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <React.Fragment dangerouslysetinnerhtml={{ __html: AMP_BOILERPLATE }} />
        <style amp-custom="" dangerouslysetinnerhtml={{ __html: AMP_CUSTOM }} />
        <Schema {...props.schema} />
      </head>
      <body>
        <amp-story
          standalone=""
          title={props.story.title}
          publisher={props.story.publisher}
          publisher-logo-src={props.story.publisher_logo_src}
          poster-portrait-src={props.story.poster_portrait_src}
          poster-square-src={props.story.poster_square_src}
          poster-landscape-src={props.story.poster_landscape_src}
          background-audio={props.story.background_audio}>
          {props.children}
        </amp-story>
      </body>
    </html>
  );
};
