

















var target = {};
var handler = { deleteProperty (target) {
  throw 42;
}, get (object, propName) {
  if (propName == "length") {
    return 5;
  }
}};

var proxy = new Proxy(target, handler);

var a = 5;


with (proxy) {
  delete a
}

try {
  
  Array.prototype.pop.call(proxy);
  assert(false);
} catch (e) {
  assert(e === 42);
}


var target = {foo: "bar"};
var handler = {
  deleteProperty(obj, prop) {
    delete obj[prop];
  }
}

var proxy = new Proxy(target, handler);

assert(target.foo === "bar")
assert(proxy.foo === "bar");

assert(delete proxy.foo === false);

assert(target.foo === undefined);
assert(proxy.foo === undefined);

assert(target.bar === undefined);
assert(delete proxy.bar == false);
assert(target.bar === undefined);

var handler2 = {
  deleteProperty(obj, prop) {
    delete obj[prop];
    return true;
  }
}

var proxy = new Proxy(target, handler2);

assert(target.bar === undefined);
assert(delete proxy.bar == true);
assert(target.bar === undefined);


var target = {1: 42};
var handler = {};
var proxy = new Proxy(target, handler);

assert(target[1] === 42)
assert(delete proxy[1] === true)
assert(target[1] === undefined);


var target = {2: 52};
var handler = { deleteProperty: null};
var proxy = new Proxy(target, handler);

assert(target[2] === 52)
assert(delete proxy[2] === true)
assert(target[2] === undefined);


var target = {};
var handler = { deleteProperty: true };
var proxy = new Proxy(target, handler);

try {
  delete proxy[0];
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var revocable = Proxy.revocable ({}, {});
var proxy = revocable.proxy;
revocable.revoke();

try {
  delete proxy.foo;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = {prop: "foo"};
var handler = {
  deleteProperty(obj, prop) {
    delete obj[prop];
  }
};

var proxy1 = new Proxy(target, handler);
var proxy2 = new Proxy(proxy1, handler);

assert(target.prop === "foo");
assert(proxy1.prop === "foo");
assert(proxy2.prop === "foo");

delete proxy2.prop;

assert(target.prop === undefined);
assert(proxy1.prop === undefined);
assert(proxy2.prop === undefined);


var target = {};
var handler = {
  deleteProperty(obj, prop) {
    delete obj[prop];
    return true;
  }
};

Object.defineProperty(target, "foo", {
  configurable: false,
  value: "foo"
});

var proxy = new Proxy (target, handler);

try {
  delete proxy.foo;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var trapCalls = 0;
var p = new Proxy({prop: 1}, {
  deleteProperty: function(t, prop) {
    Object.preventExtensions(t);
    trapCalls++;
    return true;
  },
});

try {
  Reflect.deleteProperty (p, "prop");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

assert (trapCalls == 1);
