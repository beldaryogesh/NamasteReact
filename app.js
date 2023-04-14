import React from "react";
import ReactDOM  from "react-dom/client";


const parent = React.createElement(
  "h1",
  { id: "parent" },
  "hello world in reactjs!"
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world in react"
);

console.log(parent); // return object

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)














