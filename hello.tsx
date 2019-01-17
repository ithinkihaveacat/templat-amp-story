import AmpStory from "./AmpStory";
import { Theme, AmpStoryPage } from "./AmpStoryPage";

import { React } from "./jsx";

const metadata = {
  title: "Hello, AMP Story!",
  publisher: "Michael Stillwell",
  publisher_logo_src:
    "https://s.gravatar.com/avatar/3928085cafc1e496fb3d990a9959f233?s=150",
  poster_portrait_src:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cantilever_bridge_human_model.jpg/627px-Cantilever_bridge_human_model.jpg"
};

console.log(`<!doctype html>`);
console.log(
  <AmpStory {...metadata}>
    <AmpStoryPage theme={Theme.London} background="jjjj">
      <h1>HULLO!!!</h1>
    </AmpStoryPage>
  </AmpStory>
);
