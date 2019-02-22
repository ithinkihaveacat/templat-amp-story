import AmpStory from "./AmpStory";
// import { AmpImgInit } from "./AmpImg";
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
    title: "The Mars Cruise",
    publisher: "The AMP Project",
    publisher_logo_src: "./img/publisher-src.png",
    poster_portrait_src: "./img/portrait-src.jpg",
    poster_square_src: "./img/square-src.jpg",
    poster_landscape_src: "./img/landscape-src.jpg",
    background_audio: "./audio/Asche_Spencer-Contemplative_312.mp3"
  }
};

// const AmpImg = AmpImgInit({ quality: 0.9 });

console.log(`<!doctype html>`);
console.log(
  <AmpStory {...metadata}>
    <AmpStoryPage
      theme={Theme.Cover}
      img_src="./img/01/bkgd.jpg"
      header="The Mars Cruise"
      body="Get ready for the best trip of your life. Keep reading to see all that awaits you on the Red Planet."
    />
    <AmpStoryPage
      theme={Theme.Journey}
      video_src="./video/02-bkgd.mp4"
      video_poster="./img/02/bkgd-poster.jpg"
      header="The Journey"
      body="Every 2 years, when Earth and Mars are closest to each other, the voyage to the fourth planet takes a brisk 9 months."
    />
    <AmpStoryPage
      theme={Theme.WhatToBring}
      bg_src="./img/03/bkgd.jpg"
      fg_src="./img/03/mars.png"
      header="What to Bring"
      body="Aside from warm clothes, there are a few essentials you’ll want to bring from home: like a space suit, solar phone charger, sextant, and a good book">
      <div>
        <amp-img
          class="suitcase"
          src="./img/03/suitcase.png"
          layout="responsive"
          width="960"
          height="663"
          animate-in="fly-in-bottom"
          animate-in-duration="0.85s"
          animate-in-delay="0.45s"
        />
        <amp-img
          class="books"
          src="./img/03/books.png"
          layout="responsive"
          width="960"
          height="663"
          animate-in="fly-in-top"
          animate-in-duration="0.75s"
          animate-in-delay="0.8s"
        />
        <amp-img
          class="sextant"
          src="./img/03/sextant.png"
          layout="responsive"
          width="960"
          height="663"
          animate-in="fly-in-top"
          animate-in-duration="1.25s"
          animate-in-delay="1.2s"
        />
        <amp-img
          class="helmet"
          src="./img/03/helmet.png"
          layout="responsive"
          width="960"
          height="680"
          animate-in="fly-in-top"
          animate-in-duration="0.75s"
          animate-in-delay="1.1s"
        />
        <amp-img
          class="suitcase-front"
          src="./img/03/suitcase-front.png"
          layout="responsive"
          width="960"
          height="663"
          animate-in="fly-in-bottom"
          animate-in-duration="0.85s"
          animate-in-delay="0.45s"
        />
      </div>
    </AmpStoryPage>
    <AmpStoryPage
      theme={Theme.CantWait}
      bg_src="./img/06/bkgd.jpg"
      fg1_src="./img/06/mars.png"
      fg2_src="./img/06/astronaut.png">
      <h2
        animate-in="fly-in-top"
        animate-in-duration="0.55s"
        animate-in-delay="0.35s">
        <span class="horiz italic">We</span>
        can't wait
        <span class="italic">to have</span>
        <span class="last">you aboard!</span>
      </h2>
    </AmpStoryPage>
    <amp-story-bookend src="./json/bookend.json" layout="nodisplay" />
  </AmpStory>
);
