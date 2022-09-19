const h1 = document.querySelector('#heading');
console.log(h1);

const h2 = document.createElement('h2');
console.log(h2)
h2.innerHTML = "Hello World1 !!!";

const div = document.createElement('div');
console.log(div)
div.innerText = "Hello Guys !!!";

const body = document.querySelector('body');
console.log(body);
body.appendChild(h2);
body.appendChild(div);

h2.id = 'headingh2';
h2.className = "classHeading";
h2.style = "font-size: 20px; color: red;";
Object.assign(h2.style, {
    backgroundColor: "violet",
    fontWeight: 100,
});