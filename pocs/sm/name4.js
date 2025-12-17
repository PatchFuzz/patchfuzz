actual = '';
expected = 'undefined,';

function loop(f) {
  var p;
  for (var i = 0; i < 10; ++i) {
    p = f();
  }
  return p;
}

function make(k, j) {
  var g = function() { return k; }
  k = j;
  return g;
}

var f = make();
print(loop(f));


print(actual, expected)
