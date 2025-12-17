let obj = { a: 1, b: 2, c: 3 };
let { a, ...rest } = obj;

print(Object.keys(rest).length, 2);

let obj1 = { a: 1, b: 2, c: 3 };
let { ...rest1 } = obj;

print(Object.keys(rest1).length, 3);
