import React from "react";
import ReactDOM from "react-dom";
import './index.css'
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "classname",
    style: { color: "red" },
  },
  "hello guys"
);

const div = (
  <div style={{color:"red"}} >
    <h1>heading</h1>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </div>
);

const hello = <h1>hello</h1>
console.log(hello);

const div2 = (
  <div>
    <h1>heading</h1>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </div>
);

console.log(div2)


// const div = c(
//     "h1",
//     {
//       id: "heading",
//       className: "classname",
//       style: { color: "red" },
//     },

//     [c(
//       "h1",
//       {
//         id: "heading",
//         className: "classname",
//         style: { color: "red" },
//       },
//       "hello guys"
//     ),
//     c(
//       "ul",
//       {
//         id: "heading",
//         className: "classname",
//         style: { color: "red" },
//       },
//       [
//         c(
//           "li",
//           {
//             id: "heading",
//             className: "classname",
//             style: { color: "red" },
//           },
//           "item 1"
//         ),
//         c(
//           "li",
//           {
//             id: "heading",
//             className: "classname",
//             style: { color: "red" },
//           },
//           "item 2"
//         ),
//         c(
//           "li",
//           {
//             id: "heading",
//             className: "classname",
//             style: { color: "red" },
//           },
//           "item 3"
//         ),
//       ]
//     ),

//   ]
//   );

//   <div>
//   <h1>hello</h1>
//   <ul>
//     <li>item 1</li>
//     <li>item 2</li>
//     <li>item 3</li>
//   </ul>
// </div>

// const subheading = React.createElement(
//   "h3",
//   {
//     id: "subheading",
//   },
//   "hello sub heading"
// );
// const subheading2 = React.createElement(
//   "h3",
//   {
//     id: "subheading",
//   },
//   "hello sub heading"
// );

// const div = React.createElement("div", {}, [heading, subheading,subheading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// setTimeout(()=>{
//     var hello = document.getElementById("subheading");
//     console.log(hello);
// }, 5)

root.render([div, div2]);
