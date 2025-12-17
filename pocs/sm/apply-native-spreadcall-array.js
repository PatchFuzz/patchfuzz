;

const xs = [
  
  [],

  
  [1],

  
  [1, 2],

  
  [1, 2, 3],

  
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

  
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

function f(x) {
  
  return Array(...x);
}


with ({}) ;

for (let i = 0; i < 400; ++i) {
  let x = xs[i % xs.length];

  
  let expected = x.length !== 1 ? x : [,];

  let result = f(x);
  print(arraysEqual(result, expected), true);
}
