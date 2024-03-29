

try {
  Symbol.for (Symbol('foo'));
  assert (false);
} catch (e) {
  assert (e instanceof TypeError)
}

var a = Symbol.for ('foo');
var b = Symbol.for ('foo');

assert (a === b);
assert (a == b);

assert (Symbol.keyFor (a) === 'foo');
assert (Symbol.keyFor (b) === 'foo');


var c = Symbol.for (5);
var d = Symbol.for (5.58);
var e = Symbol.for ({});

assert (Symbol.keyFor (c) === '5');
assert (Symbol.keyFor (d) === '5.58');
assert (Symbol.keyFor (e) === '[object Object]');


var array = [];
for (var i = 0; i < 15; i++) {
  array[i] = Symbol.for ('foo' + i);

  for (var j = 0; j < i; j++) {
    assert (array[j] !== array[i]);
  }
}

try {
  Symbol.keyFor ('NonSymbolValue');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

for (var i = 0; i < 15; i++) {
  assert (Symbol.keyFor (array[i]) === ('foo' + i));
}
