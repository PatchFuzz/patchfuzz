

function f(a) {
  
  
  
  
  var v = arguments[0];
  assertEq(v, 1);

  
  throw null;

  
  a = 4;
}
f(1);
