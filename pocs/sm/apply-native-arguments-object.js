;

const xs = [
  
  [],

  
  [1],

  
  [1, 2],

  
  [1, 2, 3],

  
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

  
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

function escape() {
  with ({}) ;
}

function f() {
  
  escape(arguments);

  
  return Array.apply(null, arguments);
}


with ({}) ;

for (let i = 0; i < 400; ++i) {
  let x = xs[i % xs.length];

  
  let expected = x.length !== 1 ? x : [,];

  let result = f.apply(null, x);
  print(arraysEqual(result, expected), true);
}
