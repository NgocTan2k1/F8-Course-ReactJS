"use strict"
function logger(log) {
    console.log(log);
}

logger("Hello World!");

const logger2 = (log) => {
    console.log(log);
}

logger2("Hello World2");

const sum = (a, b) => a + b;
console.log(sum(5,6));

const infor = (name, age) => ({name: name, age: age});
console.log(infor("NgocTan", 21));

const course = {
    name: "JavaScripts",
    getName: () => { return this},
}

console.log(course.getName());