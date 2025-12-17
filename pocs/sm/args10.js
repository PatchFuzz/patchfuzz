actual = '';
expected = 'function h(x, y) { return arguments; },2,4,8,';

function h(x, y) { return arguments; }

var p;
for (var i = 0; i < 5; ++i) {
  p = h(i, i*2);
}
print(p.callee);
print(p.length);
print(p[0]);
print(p[1]);


print(actual, expected)
