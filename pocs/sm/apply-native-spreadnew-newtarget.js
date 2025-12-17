;

const xs = [
  
  [],

  
  [1],

  
  [1, 2],

  
  [1, 2, 3],

  
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

  
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

class ArrayWithExplicitConstructor extends Array {
  constructor(...args) {
    super(...args);
  }
}

class ArrayWithImplicitConstructor extends Array {
  constructor(...args) {
    super(...args);
  }
}

function f(...x) {
  return new ArrayWithExplicitConstructor(...x);
}

function g(...x) {
  return new ArrayWithImplicitConstructor(...x);
}


with ({}) ;

for (let i = 0; i < 400; ++i) {
  let x = xs[i % xs.length];

  
  let expected = x.length !== 1 ? x : [,];

  let result = f.apply(null, x);
  print(arraysEqual(result, expected), true);
  print(Object.getPrototypeOf(result), ArrayWithExplicitConstructor.prototype);
}

for (let i = 0; i < 400; ++i) {
  let x = xs[i % xs.length];

  
  let expected = x.length !== 1 ? x : [,];

  let result = g.apply(null, x);
  print(arraysEqual(result, expected), true);
  print(Object.getPrototypeOf(result), ArrayWithImplicitConstructor.prototype);
}
