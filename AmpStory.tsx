import { React } from "./jsx";

export default ({
  title,
  publisher,
  publisher_logo_src,
  poster_portrait_src,
  children
}: {
  [k: string]: any;
}) => {
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
        <title>{title}</title>
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
        {/* prettier-ignore */}
        <style amp-boilerplate="">body&#123;-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both&#125;@-webkit-keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;@-moz-keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;@-ms-keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;@-o-keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;@keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;</style>
        {/* prettier-ignore */}
        <noscript><style amp-boilerplate="">body&#123;-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none&#125;</style></noscript>
        <style amp-custom="">
          amp-story &#123; font-family: Go, "Concert One", sans-serif; &#125;
          amp-story-page * &#123; color: white; text-align: center; &#125;
        </style>
      </head>
      <body>
        <amp-story
          standalone=""
          title={title}
          publisher={publisher}
          publisher-logo-src={publisher_logo_src}
          poster-portrait-src={poster_portrait_src}
        >
          {children}
        </amp-story>
      </body>
    </html>
  );
};
