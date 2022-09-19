//<h1 title="Hello" class="heading">Hello Guys!!!</h1>
//DOM
const h1DOM = document.createElement('h1');
h1DOM.title = "Hello";
h1DOM.className = "heading";

h1DOM.innerText = "DOM - Hello Guys!!!";
document.body.appendChild(h1DOM);

//React
const h1React = React.createElement('h1', {
    title: "Hello",
    className: "heading",
}, "React - Hello Guys!!!");
console.dir(h1DOM);
console.log(h1React);

//
// <ul>
//      <li>JavaScripts</li>
//      <li>ReactJS</li>
// </ul>
//DOM
//ul
const ulDOM = document.createElement('ul');
ulDOM.id = "ul-id-DOM";
ulDOM.style = "font-size: 30px; color: red;";

//li1
const liDOM1 = document.createElement('li');
liDOM1.id = "li-1-DOM";
liDOM1.style = "list-style: none;";
liDOM1.innerHTML = "JavaScripts";

//li2
const liDOM2 = document.createElement('li');
liDOM2.id = "li-2-DOM";
liDOM2.style = "list-style: none;";

liDOM2.innerHTML = "ReactJS";

//append li for ul
ulDOM.appendChild(liDOM1);
ulDOM.appendChild(liDOM2);

//append ul for body
document.body.appendChild(ulDOM);


//React
const ulReact = React.createElement(
    'ul',
    {
        id: "ul-id-React",
        style: "font-size: 30px; color: red;",
    },
    React.createElement('li', {id: "li-1-DOM", style: "list-style: none;" }, "JavaScripts"),
    React.createElement('li', {id: "li-1-DOM", style: "list-style: none;" }, "ReactJS"),
);

console.log(ulReact);


//
// <div>
//      <h2 title="Học React tại F8">Học React JS</h2>
//      <p>Học ReactJS từ cơ bản đến nâng cao</p>    
// </div>
//

// DOM

// div
const divDOM = document.createElement('div');
// class of div
divDOM.className = "post-item";

// h2
const h2DOM = document.createElement('h2');
// title of h2
h2DOM.title = "Học React tại F8";
// text of h2
h2DOM.innerText = "Học ReactJS";

// p
const pDOM = document.createElement('p');

// text of p
pDOM.innerText = "Học ReactJS từ cơ bản đến nâng cao";

// append h2, p for div
divDOM.appendChild(h2DOM);
divDOM.appendChild(pDOM);

//append div for body
document.body.appendChild(divDOM);

// React
const divReact = React.createElement(
    "div",
    {className: "post-item"},
    React.createElement('h2', { title: "Học React tại F8", }, "Học ReactJS"),
    React.createElement('p', {}, "Học ReactJS từ cơ bản đến nâng cao")
);

console.log(divReact);