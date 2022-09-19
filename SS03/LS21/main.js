// React
//h1
const h1React = React.createElement('h1', {
    title: "Hello",
    className: "heading",
}, "React - Hello Guys!!!");

//ul
const ulReact = React.createElement(
    'ul',
    {   
        id: "ul-React",
        className: "",
    },
    React.createElement('li', {id: "li-React-1", }, "JavaScripts"),
    React.createElement('li', {id: "li-React-2", }, "ReactJS"),
);
console.log(ulReact);

//div
const divReact = React.createElement(
    "div",
    {className: "post-item"},
    React.createElement(
        'h2',
        { 
            title: "Học React tại F8", 
        }, 
        "Học ReactJS"
    ),
    React.createElement('p', {}, "Học ReactJS từ cơ bản đến nâng cao")
);

// React Version-17
// const root1 = document.getElementById("root1");
// const root2 = document.getElementById("root2");
// const root3 = document.getElementById("root3");

// ReactDOM.render(h1React, root1);
// ReactDOM.render(ulReact, root2);
// ReactDOM.render(divReact, root3);

// React Version-18
const rootContainer1 = document.getElementById("root1");
const rootContainer2 = document.getElementById("root2");
const rootContainer3 = document.getElementById("root3");

const root1 = ReactDOM.createRoot(rootContainer1);
const root2 = ReactDOM.createRoot(rootContainer2);
const root3 = ReactDOM.createRoot(rootContainer3);

root1.render(h1React);
root2.render(ulReact);
root3.render(divReact);
