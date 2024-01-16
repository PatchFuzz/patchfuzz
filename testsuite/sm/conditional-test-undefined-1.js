function g(array) {
  
  
  
  
  
  if (array.does_not_exist || array.slice) {
    return 1;
  }
  return 0;
}

function f() {
  var array = [];
  var r = 0;
  for (let i = 0; i < 100; ++i) {
    r += g(array);
  }
  assertEq(r, 100);
}

for (let i = 0; i < 2; ++i) f();