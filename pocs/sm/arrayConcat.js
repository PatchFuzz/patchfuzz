for (var i = 9; i < 10; i++)
  print([2].concat([3])[0], 2);

function f(a, b) {
  return a.concat(b)[0];
}
function g() {
  var x = [];
  var y = [1];
  for (var i = 0; i < 50; i++)
    print(f(x, y), 1);
  eval('y[0] = "three"');
  print(f(x, y), "three");
}
g();
