import { React } from "./jsx";

export default ({ children }: { [k: string]: any }) => {
  return <html amp="" lang="en">
    <head>
      <meta charset="utf-8"/>
      <script async="" src="https://cdn.ampproject.org/v0.js"></script>
      <script async="" custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
      <title>Hello, Ken Burns!</title>
      <link rel="canonical" href="https://ithinkihaveacat.github.io/hello-world-amp-story/"/>
      <link href="https://fonts.googleapis.com/css?family=Asap:700" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
      <style amp-boilerplate="">body&#123;-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both&#125;@-webkit-keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;@-moz-keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;@-ms-keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;@-o-keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;@keyframes -amp-start&#123;from&#123;visibility:hidden&#125;to&#123;visibility:visible&#125;&#125;</style><noscript><style amp-boilerplate="">body&#123;-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none&#125;</style></noscript>
    </head>
    <body>
      <amp-story
        standalone=""
        title="Hello, Ken Burns"
        publisher="Michael Stillwell"
        publisher-logo-src="https://s.gravatar.com/avatar/3928085cafc1e496fb3d990a9959f233?s=150"
        poster-portrait-src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cantilever_bridge_human_model.jpg/627px-Cantilever_bridge_human_model.jpg">
        <amp-story-page id="start">
          <amp-story-grid-layer template="thirds">
            <div grid-area="middle-third">
              <h1>Ready?</h1>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>
      </amp-story>
    </body>
  </html>
}