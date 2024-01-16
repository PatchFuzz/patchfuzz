

















var target = {};
var handler = { getPrototypeOf (target) {
  throw 42;
}};

var proxy = new Proxy(target, handler);

try {
  
  Object.getPrototypeOf(proxy);
  assert(false);
} catch (e) {
  assert(e === 42);
}

try {
  
  Object.prototype.isPrototypeOf(proxy);
  assert(false);
} catch (e) {
  assert(e === 42);
}

(function () {
  class e extends Array {};
  function f () {};
  function g () {};

  Object.setPrototypeOf(g, proxy);

  
  try {
    g instanceof f;
    assert(false);
  } catch (e) {
    assert(e === 42);
  }

  
  try {
    g instanceof e;
    assert(false);
  } catch (e) {
    assert(e === 42);
  }
})();

try {
  
  Function.prototype.bind.call(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = {};
var handler = {
  getPrototypeOf(target) {
    return Array.prototype;
  }
}
var proxy = new Proxy(target, handler);

assert(Object.getPrototypeOf(proxy) === Array.prototype);
assert(Reflect.getPrototypeOf(proxy) === Array.prototype);
assert(Array.prototype.isPrototypeOf(proxy));
assert(proxy instanceof Array);

var obj = Object.preventExtensions({});
assert(Object.getPrototypeOf(obj) === Object.prototype);

var handler = {
  getPrototypeOf(target) {
    return Object.prototype;
  }
}
var proxy = new Proxy(target, handler);
assert(Object.getPrototypeOf(proxy) === Object.prototype);


var target = {};
var handler = {};
var proxy = new Proxy(target, handler);

assert(Object.getPrototypeOf(proxy) === Object.prototype);


var target = {};
var handler = { getPrototypeOf: null };
var proxy = new Proxy(target, handler);

assert(Object.getPrototypeOf(proxy) === Object.prototype);


var target = {};
var handler = { getPrototypeOf: 42 };
var proxy = new Proxy(target, handler);

try {
  Object.getPrototypeOf(proxy)
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = {};
var handler = {};
var proxy = new Proxy(target, handler);

var target_prototype = {};
handler.getPrototypeOf = function() {
  return target_prototype ;
}

var proxy2 = new Proxy(proxy, handler);
assert(Object.getPrototypeOf(proxy2) === target_prototype);


var target = {};
var handler = {
  getPrototypeOf(target) {
    return 'foo';
  }
}
var proxy = new Proxy(target, handler);

try {
  Object.getPrototypeOf(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var target = Object.preventExtensions({});
var handler = {
  getPrototypeOf(target) {
    return {};
  }
}

var proxy = new Proxy(target, handler);

try {
  Object.getPrototypeOf(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
