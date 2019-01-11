import AmpStory from "./AmpStory";

import { React } from "./jsx";

const Welcome = ({ first, last }: { first: string; last: string }) => {
  if (first === "Clem") {
    return <h1>Why hello there {first} {last}</h1>;
  } else {
    return <h1>Hello {first} {last}</h1>;
  }
};

const Sidebar = ({ children }: { [k: string]: string }) => {
  return <div class="sidebar">{children}</div>;
};

const a = { first: "jjj", last: "kkk" };

const App = ({ last }: { last: string }) => (
  <div>
    <Sidebar>
      <ul>
        <li><Welcome first="a" last="b"/></li>
        <li><Welcome {...a}/></li>
      </ul>
    </Sidebar>
    <Welcome first="Clem" last={last} />
    <Welcome first="Clint" last={last} />
    <Welcome first="Cline" last={last} />
  </div>
);

const context = {
  title: "Foo Bar",
  metadata: {
    author: "Clem",
    date: "today",
  },
};

console.log(`<!doctype html>`);
console.log(<AmpStory {...context}><App last="Citizen"/></AmpStory>);
