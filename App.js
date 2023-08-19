/*
<div id="parent">
  <div id="child">
    <h1>"I am h1 tag!"</h1>
  </div>
</div>

*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag!")
  )
);
// this is how we create nested html structure inside react application by using create Element and using 3rd argument which takes up children that we have to pass in
console.log(parent); //object

/*
<div id="parent">
  <div id="child">
    <h1>I am h1 tag!</h1>
    <h2>I am h2 tag!</h2>
  </div>
</div>

*/
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag!"),
    React.createElement("h2", {}, "I am h2 tag!"),
  ])
);
// when we have siblings/more than 1 children then we need to pass in children 3rd arg as array of children

/*
<div id="parent">
  <div id="child">
    <h1>I am h1 tag!</h1>
    <h2>I am h2 tag!</h2>
  </div>
  <div id="child2">
    <h1>I am h1 tag!</h1>
    <h2>I am h2 tag!</h2>
  </div>
</div>

*/
const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag!"),
    React.createElement("h2", {}, "I am h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag!"),
    React.createElement("h2", {}, "I am h2 tag!"),
  ]),
]);
// This became so big and so tedius to write thats y we have jsx!!!

const heading = React.createElement(
  "h1",
  { className: "heading1", id: "heading" },
  "Hello World from React."
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent3); //render method converts this js object/react element into actual h1 tag  and put into DOM which browser understands
