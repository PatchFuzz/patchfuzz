













assert(Object.is(2, "foo") === false);
assert(Object.is(null, 2) === false);

var x;
assert(Object.is(x, 2) === false);

assert(Object.is(null, null) === true);

assert(Object.is(2, 8) === false);
assert(Object.is(8, 8) === true);

assert(Object.is(3.14, 6.28) === false);
assert(Object.is(3.14, 3.14) === true);

assert(Object.is('foo', 'foo') === true);
assert(Object.is('foo', 'bar') === false);
assert(Object.is(new String('foo'), 'foo') === false);

assert(Object.is([], []) === false);

assert(Object.is(true, true) === true);
assert(Object.is(false, false) === true);
assert(Object.is(true, false) === false);
assert(Object.is(false, true) === false);
assert(Object.is("", false) === false);
assert(Object.is(0, false) === false);

sym1 = Symbol.for('foo');
sym2 = Symbol.for('foo');
assert(Object.is(sym1, sym2) === true);
assert(Object.is(Symbol('foo'), Symbol('foo')) === false);

var foo = { a: 1 };
var bar = { a: 1 };
var zoo = foo;
assert(Object.is(foo, foo) === true);
assert(Object.is(foo, bar) === false);
assert(Object.is(foo, zoo) === true);


assert(Object.is(+0, -0) === false);
assert(Object.is(+0, 0) === true);
assert(Object.is(-0, -0) === true);
assert(Object.is(-0, 0) === false);
assert(Object.is(NaN, 0/0) === true);
