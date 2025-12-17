var shapes = [];
for (var i = 0; i < 8; i++) {
  shapes.push({x: 1, ["y" + i]: 1});
}

function foo(o, o2, cond) {
  var result = 0;
  for (var i = 0; i < 2; i++) {
    if (cond) {
      result += o.x; 
    }
  }
  result += o2.x; 
  return result;
}


with ({}) {}
for (var i = 0; i < 2000; i++) {
  foo({x: 1}, shapes[i%6], i % 2 == 0);
}



foo(undefined, shapes[6], false);


for (var i = 0; i < 9; i++) {
  foo(undefined, shapes[6], false);
}



foo({x:1}, shapes[7], false);


for (var i = 0; i < 2000; i++) {
  foo({x: 1}, shapes[i%8], i % 2 == 0);
}
