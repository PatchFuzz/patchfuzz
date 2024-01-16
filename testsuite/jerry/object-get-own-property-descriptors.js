













var object = {};
var symbol = Symbol("symbol");

function getter() { return 2; }
function setter(value) {}


object[symbol] = "symbol";

Object.defineProperties(object, {
  "foo" : {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  },
  "bar": {
    value: "bar",
    writable: true,
    enumerable: false,
    configurable: true,
  },
  "baz": {
    value: undefined,
    writable: false,
    enumerable: true,
    configurable: false,
  },
});

var descriptors = Object.getOwnPropertyDescriptors(object);


var keys = Object.keys(descriptors);
var names = Object.getOwnPropertyNames(descriptors);
var symbols = Object.getOwnPropertySymbols(descriptors);

assert(keys.length === names.length);
assert(symbols.length === 1);

for (var idx = 0; idx < keys.length; idx++) {
  assert(keys[idx] === names[idx]);
}

assert(descriptors[symbol].value === "symbol");

assert(descriptors["foo"].get === getter);
assert(descriptors["foo"].set === setter);
assert(descriptors["foo"].enumerable === true);
assert(descriptors["foo"].configurable === true);

assert(descriptors["bar"].value === "bar");
assert(descriptors["bar"].writable === true);
assert(descriptors["bar"].enumerable === false);
assert(descriptors["bar"].configurable === true);

assert(descriptors["baz"].value === undefined);
assert(descriptors["baz"].writable === false);
assert(descriptors["baz"].enumerable === true);
assert(descriptors["baz"].configurable === false);


for (let i of Object.getOwnPropertyNames(object)) {
  let lhs = JSON.stringify(Object.getOwnPropertyDescriptor(object, i));
  let rhs = JSON.stringify(descriptors[i]);

  assert(lhs === rhs);
}

var array_desc = Object.getOwnPropertyDescriptors(Array);
assert(array_desc.prototype.value === Array.prototype);
assert(array_desc.prototype.writable === false);
assert(array_desc.prototype.configurable === false);
assert(array_desc.prototype.enumerable === false);

try {
  Object.getOwnPropertyDescriptors(undefined);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

var proxy_get_desc_handler = new Proxy(object, {
  getOwnPropertyDescriptor(target, prop) {
    throw new Error("Error");
  }
});

var proxy_own_keys_handler = new Proxy(object, {
  ownKeys: 42,
});

try {
  Object.getOwnPropertyDescriptors(proxy_get_desc_handler);
  assert(false);
} catch(e) {
  assert(e instanceof Error);
}

try {
  Object.getOwnPropertyDescriptors(proxy_own_keys_handler);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}
