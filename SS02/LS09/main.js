const {
    a = 'default',
    b,
    ...rest
} = {
    b: "value1",
    c: "value2",
    d: "value3",
};

console.log(a, b, rest);

//Output: default, value1, {c: "value2", d: "value3"};