

var a = Symbol ('foo');
var b = Symbol ('bar');

assert (a !== b);
assert (a === a);
assert (typeof a === 'symbol');
assert (a.toString() == 'Symbol(foo)');
assert (Object.prototype.toString.call (a) === "[object Symbol]");
assert (JSON.stringify (a) === undefined);

var obj = { c : 10, d : 20};
obj[a] = 'EnumerableSymbolProp';
assert (obj[a] === 'EnumerableSymbolProp');


Object.defineProperty(obj, b, { value : 'NonEnumerableSymbolProp' });

var counter = 0;

for (var v in obj) {
  assert (v === 'c' || v === 'd');
  counter++;
}

assert (counter === 2);

var keys = Object.keys (obj);
assert (keys.length === 2);
assert (keys[0] === 'c' || keys[0] === 'd');
assert (keys[1] === 'd' || keys[1] === 'c');

var c = Symbol ('bar');
var obj2 = {};
obj2[b] = 'foo';
obj2[c] = 'bar';

assert (obj2[b] == 'foo');
assert (obj2[c] == 'bar');

try {
  new Date (Symbol ('2018-11-09'));
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  a + 'append_string';
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

assert (Object (a) == a);
assert (Object (a) !== a);


var a = ['hasInstance',
         'isConcatSpreadable',
         'iterator',
         'match',
         'replace',
         'search',
         'species',
         'split',
         'toPrimitive',
         'toStringTag',
         'unscopables'];

a.forEach (function (e) {
  assert (Symbol[e].toString() === ('Symbol(Symbol.' + e +')'));
  assert (typeof Symbol[e] === 'symbol');
  
  var desc = Object.getOwnPropertyDescriptor(Symbol, e)
  assert (desc.writable === false);
  assert (desc.enumerable === false);
  assert (desc.configurable === false);
});

var obj = {};
Object.defineProperty(obj, a, { 'get' : function () {throw new ReferenceError ('foo'); } });
Object.defineProperty(obj, b, { value : 5 });
assert (obj[b] === 5);

try {
  obj[a];
  assert (false);
} catch (e) {
  assert (e instanceof ReferenceError);
  assert (e.message === 'foo');
}

var descriptor = Object.getOwnPropertyDescriptor(obj, b);

assert (descriptor.configurable === false);
assert (descriptor.enumerable === false);
assert (descriptor.writable === false);
assert (descriptor.value === 5);

var foo = Symbol ('foo');
assert (foo[Symbol.toStringTag] === 'Symbol');


var symA = Symbol ('foobar');
var symB = Symbol ('foobar');
assert (symA !== symB);
assert (symA != symB);

var obj = { foobar : 55 };
obj[symA] = 77;
assert (obj["foobar"] !== obj[symA]);
assert (obj["foobar"] != obj[symA]);
