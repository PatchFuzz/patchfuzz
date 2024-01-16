

var m1 = new WeakSet();

var k1 = {};
assert (m1.add (k1) instanceof WeakSet);
assert (m1.has (k1) === true);

k1 = {};
gc (); 

assert (m1.has (k1) === false);
assert (m1.delete(k1) === false);
assert (m1.add (k1) instanceof WeakSet);
assert (m1.has (k1) === true);

assert (m1.delete ("str") === false);
assert (m1.has (42) === false);

try {
  m1.add (42);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

gc ();
assert (m1.delete(k1) === true);
gc ();
assert (m1.has (k1) === false);
k1 = {};
gc ();

Object.freeze(k1);
assert (m1.add (k1) instanceof WeakSet);
assert (m1.has (k1) === true);
k1 = {};
gc ();

var m2 = new WeakSet();

k1 = {};
gc ();
var k2 = {};

m1.add (k1);
m1.add (k2);
m2.add (k1);
m2.add (k2);

m2.delete (k1);
gc ();
k1 = {};
k2 = {};
gc ();

new WeakSet().add(new WeakSet().add(new WeakSet().add(new WeakSet().add(new WeakSet().add(new WeakSet().add(new WeakSet()))))));
gc();

try {
  WeakSet();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  WeakSet.prototype.get.call({});
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

assert (new WeakSet(null) instanceof WeakSet);

k1 = {};
k2 = {};
m1 = new WeakSet([k1, k2]);
assert (m1.has (k1));
assert (m1.has (k2));
gc();
m1 = undefined;
gc();

m1 = new WeakSet();
k1 = {};
m1.add (k1);
m1.add (k1);
m1.add (k1);
assert (m1.has (k1));
k1 = {};
gc();

m1 = new WeakSet();
m1.add (k1);
m1.add (k1);
m1.add (k1);
assert (m1.has (k1));
m1 = new WeakSet();
gc();

try {
  new WeakSet([1,2,3,4]);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

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
try {
  new WeakMap(iter);
} catch(e){}

assert(closed === true);

m1.add([]);

assert (WeakSet.prototype.toString() === "[object WeakSet]");

WeakSet.prototype.add = function () { throw "abrupt add" };

try {
  new WeakSet([{}]);
  assert (false);
} catch (e) {
  assert (e === "abrupt add");
}

Object.defineProperty(WeakSet.prototype, 'add', {
  get: () => { throw "abrupt add getter" }
});

try {
  new WeakSet([]);
  assert (false);
} catch (e) {
  assert (e === "abrupt add getter");
}

[Symbol.toStringTag].forEach(e => assert (Reflect.ownKeys(WeakSet.prototype).includes(e)));
