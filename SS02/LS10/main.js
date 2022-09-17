console.log("========== Rest ==========");
function logger1(a, b, ...params) {
    console.log(params);
}

logger1(1, 2, 3, 4, 5, 6, 7);

function logger2({name, price, ...rest}) {
    console.log(rest);
}

logger2({
    name: "JS",
    price: 100,
    description: "description",
});

function logger3([a, b, ...rest]) {
    console.log(rest);
};

logger3([1, 2, 3, 4, 5, 6, 7]);
console.log("");

console.log("========== Spread ==========");
console.log("========== Array ==========");
var array1 = ['JavaScript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
console.log("array1:\t", array1);
console.log("array2:\t", array2);
console.log("");

var array3 = [...array1, ...array2];
console.log("var array3 = [...array1, ...array2]");
console.log(array3);
console.log("");

var array3 = [...array2, ...array1];
console.log("var array3 = [...array2, ...array1]");
console.log(array3);
console.log("");

console.log("========== Object ==========");
var object1 = {
    name: "JavaScripts",
};

var object2 = {
    name: "ReactJS",
    price: 1000,
};

console.log("object1:\t", object1);
console.log("object2:\t", object2);

var object3 = {
    ...object1,
    ...object2,
};

console.log(object3);


console.log("========== Example1 ==========");
var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: "other",
    //
    //
    //
};
console.log(defaultConfig);
var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-bai-tap'
};
console.log(exerciseConfig);
console.log("");

console.log("========== Example2 ==========");
var array = ['JS','PHP',"Ruby", "ReactJS"];

function logger(...rest) {
    for(var i = 0; i < rest.length; i++) {
        console.log("rest[" + i + "]:\t", rest[i]);
    }
}

logger(...array);

