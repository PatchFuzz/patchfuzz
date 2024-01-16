

assert(Symbol('desc').description === "desc");
assert(Symbol.iterator.description === "Symbol.iterator");
assert(Symbol.for('foo').description === "foo");
assert(`${Symbol('foo').description}bar` === "foobar");

var desc = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description');

assert(desc.set === undefined);
assert(typeof desc.get === "function");
assert(desc.writable === undefined);
assert(desc.enumerable === false);
assert(desc.configurable === true);

var sym = Symbol('foo')
assert(desc.get.call(Object(sym)) === "foo")

var obj_sym = Object(Symbol('foo'));
assert(obj_sym.description === "foo");

try {
  desc.get.call(null);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  desc.get.call(123);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  desc.get.call('test');
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  desc.get.call(undefined);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  desc.get.call({});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  desc.get.call(new Proxy({}, {}));
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

assert(Symbol("").description !== undefined);
assert(Symbol().description === undefined);
