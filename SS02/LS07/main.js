
function arrToObj(arr) {
    var results = {}
    for(var i = 0; i < arr.length; i++) {
       results[arr[i][0]] = arr[i][1];
    }
 
    return results;
 }
 
//  Expected results:

const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
]);
console.log(obj1)
// Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
['name', 'Duc Long'], 
['age', 18], 
['address', 'Ha Noi']
])
console.log(obj2)
// Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
