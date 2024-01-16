

















var target = {};
var handler = { preventExtensions (target) {
  throw 42;
}};

var proxy = new Proxy(target, handler);

try {
  
  Object.freeze(proxy)
  assert(false);
} catch (e) {
  assert(e === 42);
}

try {
  
  Object.seal(proxy)
  assert(false);
} catch (e) {
  assert(e === 42);
}


var target = {};
var handler = {};
var proxy = new Proxy(target, handler);

assert(Object.isExtensible(target) === true);
assert(Object.isExtensible(proxy) === true);
Object.preventExtensions(proxy);
assert(Object.isExtensible(target) === false);
assert(Object.isExtensible(proxy) === false);


var target = {};
var handler = { preventExtensions: null };
var proxy = new Proxy(target, handler);

assert(Object.isExtensible(target) === true);
assert(Object.isExtensible(proxy) === true);
Object.preventExtensions(proxy);
assert(Object.isExtensible(target) === false);
assert(Object.isExtensible(proxy) === false);


var target = {};
var handler = { preventExtensions: 42 };
var proxy = new Proxy(target, handler);

try {
  Object.preventExtensions(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = { foo: "bar" };
var handler = {
  preventExtensions(target) {
    target.foo = "foo"
    Object.preventExtensions(target);
    return true;
  }
}

var proxy = new Proxy(target, handler);
assert(Object.isExtensible(target) === true);
assert(Object.isExtensible(proxy) === true);
assert(target.foo === "bar");
Object.preventExtensions(proxy);
assert(Object.isExtensible(target) === false);
assert(Object.isExtensible(proxy) === false);
assert(target.foo === "foo");


var target = {};
var handler = {
  preventExtensions(target) {
    return true;
  }
}

var proxy = new Proxy(target, handler);

try {
  Object.preventExtensions(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = {};
var handler = {
  preventExtensions(target) {
    Object.preventExtensions(target);
    return true;
  }
}

var proxy1 = new Proxy(target, handler);
var proxy2 = new Proxy(proxy1, handler);

assert(Object.isExtensible(target) === true);
assert(Object.isExtensible(proxy1) === true);
assert(Object.isExtensible(proxy2) === true);
Object.preventExtensions(proxy2);
assert(Object.isExtensible(target) === false);
assert(Object.isExtensible(proxy1) === false);
assert(Object.isExtensible(proxy2) === false);

var target = {};
var handler = {
  preventExtensions(target) {
    return true;
  }
}

var proxy1 = new Proxy(target, handler);
var proxy2 = new Proxy(proxy1, handler);

try {
  Object.preventExtensions(proxy2);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
