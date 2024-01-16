

var set = new Set();
var int = 1;
assert (set.size === 0);
assert (set.add (int) === set);
assert (set.has (int));
assert (set.size === 1);

var str = "foobar"
assert (set.add (str) === set);
assert (set.has (str));
assert (set.size === 2);

var number = 5.78;
assert (set.add (number) === set);
assert (set.has (number));
assert (set.size === 3);

var object = { a : 2, b : 4};
assert (set.add (object) === set);
assert (set.has (object));
assert (set.size === 4);

var func = function () {};
assert (set.add (func) === set);
assert (set.has (func));
assert (set.size === 5);

var symbol = Symbol ("foo");
assert (set.add (symbol) === set);
assert (set.has (symbol));
assert (set.size === 6);

assert (!set.has(5));
assert (!set.has("foo"));
assert (!set.has({ a : 2, b : 4}));
assert (!set.has(function () {}));
assert (!set.has(Symbol ("foo")));

var elements = [int, str, number, object, func, symbol];

var i = 0;
set.forEach (function (value, key) {
  assert (key === elements[i]);
  assert (value === elements[i]);
  i++;
});

assert (set.delete (int));
assert (set.size === 5);
assert (set.delete (str));
assert (set.size === 4);
assert (set.delete (number));
assert (set.size === 3);
assert (set.delete (object));
assert (set.size === 2);
assert (set.delete (func));
assert (set.size === 1);
assert (set.delete (symbol));
assert (set.size === 0);

set = new Set([1, 2, 3, 4]);
assert (set.has(1));
assert (set.has(2));
assert (set.has(3));
assert (set.has(4));

assert (set.size === 4);
assert (set.add (2) === set);
assert (set.size === 4);
assert (set.delete (2));
assert (set.size === 3);

set.clear();
assert(set.size === 0);

set.add(3);
assert(set.delete(3));
assert(!set.delete(3));

function createIterable(arr, methods = {}) {
  let iterable = function *() {
    let idx = 0;
    while (idx < arr.length) {
      yield arr[idx];
      idx++;
    }
  }();
  iterable['return'] = methods['return'];
  iterable['throw'] = methods['throw'];

  return iterable;
};

var closed = false;
var iter = createIterable([1, 2, 3], {
  'return': function(){ closed = true; return {}; }
});
var add = Set.prototype.add;
Set.prototype.add = function(){ throw 0 };
try {
  new Set(iter);
} catch(e){}
Set.prototype.add = add;

assert(closed === true);


var s = new Set([1, 2, 3]);

s.forEach(function(value, key, thisArg) {
  assert (typeof thisArg === "object");
  assert(thisArg === s);
});

var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});

assert(k === Infinity);
assert(set.has(+0) === true);

[Symbol.iterator, Symbol.toStringTag].forEach(e => assert (Reflect.ownKeys(Set.prototype).includes(e)));
