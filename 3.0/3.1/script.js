const arr = [1, 2, 3, 4, 5];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(arr.reduce(reducer));

arr.push(100, 101, 102);

console.log(arr.reduce(reducer));
