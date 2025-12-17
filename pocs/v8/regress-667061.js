var caught = false;
try {
  (('foo'))();
} catch (o) {
  print(o instanceof TypeError);
  caught = true;
}
print(caught);



function h(o) {
  return o.x();
}

var caught = false;
try {
  h({ x: 1 });
} catch (o) {
  print(o instanceof TypeError);
  caught = true;
}
print(caught);



function g(o) {
  return o.x();
}

function O(x) { this.x = x; };
var o = new O(function() { return 1; });
print(1, g(o));  
print(1, g(o));  

var caught = false;
try {
  g(new O(3));
} catch (o) {
  print(o instanceof TypeError);
  caught = true;
}
print(caught);



function f(o) {
  return o.x();
}

print(1, f({ x: function () { return 1; }}));  
print(2, f({ x: function () { return 2; }}));  
print(3, f({ x: function () { return 3; }}));  

var caught = false;
try {
  f({ x: 4 });
} catch (o) {
  print(o instanceof TypeError);
  caught = true;
}
print(caught);
