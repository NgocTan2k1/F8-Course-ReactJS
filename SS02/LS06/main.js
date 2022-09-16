var name = "JavaScript";
var price = 210;

const course1 = {
    name: name,
    price: price,
    getName: function() {
        return this.name;
    },
};

const course2 = {
    name,
    price,
    getName() {
        return this.name; 
    },
};

console.log("course1: \t", course1);
console.log("course2: \t", course2);

var filedName = "name";
var filedPrice = 'price';
var filedGetName = "getName";

const course3 = {
    [filedName]: name,
    [filedPrice]: price,
    [filedGetName]: function() {
        return this[filedName];
    },
};
console.log("course3: \t", course3[filedName]);
