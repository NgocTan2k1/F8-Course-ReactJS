console.log("========== Array ==========");
var array = ["JS", "PHP", "Ruby"];
//case1
console.log("========== Basic ==========");
var a = array[0];
var b = array[1];
var c = array[2];
console.log("a:", a)
console.log("b:", b);
console.log("c:", c);
console.log("");
//case2 destructuring
console.log("========== Destructuring ==========");
var [x, y, z] = array;
console.log("var [x, y, z] = array");
console.log("x:", x)
console.log("y:", y)
console.log("z:", z);
console.log("");
var [m, , n] = array;
console.log("var [m, , n] = array");
console.log("m:", m);
console.log("n:", n);
console.log("");
// rest
console.log("========== Rest ==========");
var [k, ...rest] = array;
console.log("var [k, ...rest] = array");
console.log("k:\t\t", k);
console.log("rest:\t", rest);
console.log("");

var [d, e, ...rest] = array;
console.log("var [d, e, ...rest] = array");
console.log("d:\t\t", d);
console.log("e:\t\t", e);
console.log("rest:\t", rest);
console.log("");


console.log("========== Object ==========");
var course = {
    name: "JavaScript",
    price: 1000,
    image: "image",
    children: {
        name: "ReactJS",
        price: 1100,
    },
    decription: "decription",
};

console.log("var {name, price, image, price2} = course");
var {name, price, image, price2} = course;
console.log("name:\t", name);
console.log("price:\t", price);
console.log("image:\t", image);
console.log("price2:\t", price2);
console.log("");

console.log("========== Reset Name ==========");
console.log("var {name: nameParent, price: priceParent, image: imageParent} = course");
var {name: nameParent, price: priceParent, image: imageParent} = course;
console.log("nameParent:\t\t", nameParent);
console.log("priceParent:\t", priceParent);
console.log("imageParent:\t", imageParent);
console.log("");

console.log("========== Get Children Object ==========");
console.log("var {name, children: {name}} = course");
var {name, children: {name}} = course;
console.log("name: ", name);
console.log("");

console.log("var {name, children: {name: childrenName}} = course");
var {name, children: {name: childrenName}} = course;
console.log("name:\t\t\t", name);
console.log("childrenName:\t", childrenName);
console.log("");

console.log("========== Rest ==========");
console.log("var {name, ...rest} = course");
var {name, ...rest} = course;
console.log("name:\t", name);
console.log("rest:\t", rest);
console.log("");

console.log("========== Get key not defind ==========");
console.log("var {name, decription = \"default decription\", decription1 = \"default decription\"} = course");
var {name, decription = "default decription", decription1 = "default decription"} = course;
console.log("name:\t\t\t", name);
console.log("decription:\t\t", decription);
console.log("decription1:\t", decription1);
console.log("");

console.log("========== Rest with Function ==========");
function logger(...params) {
    console.log(params);
}
logger(1, 2, 3, 4, 5, 6, 7, 8, 9);
