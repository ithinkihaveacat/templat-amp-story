import AmpStory from "./AmpStory";
import { AmpImgInit } from "./AmpImg";
import { Theme, AmpStoryPage } from "./AmpStoryPage";

import { React } from "./jsx";

const metadata = {
  schema: {
    "@context": "http://schema.org",
    "@type": "CreativeWork",
    headline: "The Mars Cruise",
    url: "https://www.example.com"
  },
  story: {
    title: "Hello, AMP Story!",
    publisher: "Michael Stillwell",
    publisher_logo_src:
      "https://s.gravatar.com/avatar/3928085cafc1e496fb3d990a9959f233?s=150",
    poster_portrait_src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cantilever_bridge_human_model.jpg/627px-Cantilever_bridge_human_model.jpg"
  }
};

const AmpImg = AmpImgInit({ quality: 0.9 });

console.log(`<!doctype html>`);
console.log(
  <AmpStory {...metadata}>
    <AmpImg src="/foo.png" />
    <AmpStoryPage theme={Theme.Plain} />
    <amp-story-bookend src="./json/bookend.json" layout="nodisplay" />
  </AmpStory>
);
