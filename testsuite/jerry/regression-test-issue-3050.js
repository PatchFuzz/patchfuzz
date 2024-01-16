













var counter = 0;
var expected = [0];

var b = [$];
function dConstr () { }
dConstr.prototype = b;
var d = new dConstr()
for (var $ in d) {
  counter++;
  assert($ in expected);
}

assert(counter === 1);
