







function foo(i) {
  with({}) {};
  x = {};
  x.a = 0.23;
  x.b = 0.3;
  return x;
}

var all = [];
function step() {
  for (var i = 0; i < 100; i++) {
    var z = foo(i);
    
    z.c = 0.1 + z.b
    all.push(z);
  }
  gc(1);
  gc(1);
}

step();

step();
