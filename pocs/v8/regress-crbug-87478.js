function f(array) { return array[0]; }
function args(a) { return arguments; }

for (var i = 0; i < 10; i++) {
  f(args(1));
}
f('123');
