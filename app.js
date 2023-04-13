/*
<div id="parent">
  <div id="child">
    <h1>hello world</h1>
    <h2>hello 2 world</h2>
  </div>
  <div id="child2">
    <h1>hello world</h1>
    <h2>hello 2 world</h2>
  </div>
</div>;

*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", {}, "hello world"), 
   React.createElement("h1", {}, "hello world")]
  ), React.createElement(
    "div",
    { id: "child2" },
   [ React.createElement("h1", {}, "hello 2 world"), 
   React.createElement("h1", {}, "hello world")]
  )]
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world in react"
);

console.log(parent); // return object

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)














