// const heading = document.createElement("h1");
// heading.innerHTML = 'Hello World from Javascript';

// const root = document.getElementById("root");
// root.appendChild(heading);

// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, // attributes to the element
//     "Hello World from React!"
// );

// console.log(heading); // just an object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// render method converting the creatElement object to the h1 tag and put in over the dom.  

// nested elements
{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tage</h2>
    </div>
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tage</h2>
    </div>
</div> */}

const parent = React.createElement("div", 
    {id: "parent"},
    [React.createElement(
        "div", 
        {id: "child", key: 1},
        [React.createElement("h1", {key:1}, "I'm an h1 tag"),
         React.createElement("h2", {key:2}, "I'm an h2 tag"),
    ]),
    React.createElement(
        "div", 
        {id: "child2", key: 2},
        [React.createElement("h1", {key:1}, "I'm an h1 tag"),
         React.createElement("h2", {key:2}, "I'm an h2 tag"),
    ])]
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(parent);

// JSX as it makes easier to write html as code will become complex with create Element.
