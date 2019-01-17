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
  const AMP_BOILERPLATE = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`;
  const AMP_CUSTOM = `
    amp-story { font-family: Go, "Concert One", sans-serif; }
    amp-story-page * { color: white; text-align: center; }
  `;
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
        <React.Fragment dangerouslysetinnerhtml={{ __html: AMP_BOILERPLATE }} />
        <style amp-custom="" dangerouslysetinnerhtml={{ __html: AMP_CUSTOM }} />
      </head>
      <body>
        <amp-story
          standalone=""
          title={title}
          publisher={publisher}
          publisher-logo-src={publisher_logo_src}
          poster-portrait-src={poster_portrait_src}>
          {children}
        </amp-story>
      </body>
    </html>
  );
};
