function foo(o) {
  
  for (var s in o) {}

  
  
  
  var result = "";
  for (var s in o) {
    delete o.y;
    result += s;
  }
  assertEq(o[result], 42);
}

with ({}) {}
for (var i = 0; i < 100; i++) {
  var o = {};
  o["x" + i] = 42;
  o.y = 1;
  foo(o);
}


var g = newGlobal({newCompartment: false});
g.eval("var o = {x: 42, y: 1}");
foo(g.o);


var g2 = newGlobal({newCompartment: true});
g2.eval("var o = {x: 42, y: 1}");
foo(g2.o);
