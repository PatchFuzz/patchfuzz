

















var target = {};
var handler = { setPrototypeOf (target) {
  throw 42;
}};

var proxy = new Proxy(target, handler);

try {
  
  Object.setPrototypeOf(proxy, {});
  assert(false);
} catch (e) {
  assert(e === 42);
}


var targetProto = {};
var target = {
  foo: false
};

var handler = {
  setPrototypeOf(target, targetrProto) {
    target.foo = true;
    return false;
  }
};

var proxy = new Proxy(target, handler);

assert(Reflect.setPrototypeOf(proxy, targetProto) === false);
assert(target.foo === true);

try {
  Object.setPrototypeOf(proxy, targetProto);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  Object.setPrototypeOf(proxy, undefined);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  Object.setPrototypeOf(proxy, 1);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var target = {};
var handler = {};
var prototype = [];

var proxy = new Proxy(target, handler);

Object.setPrototypeOf(proxy, prototype);
assert(Object.getPrototypeOf(target) === prototype);

handler.setPrototypeOf = function(target, proto) {
  return false;
};

try {
  Object.setPrototypeOf(proxy, {});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

handler.setPrototypeOf = function(target, proto) {
  return undefined;
};

try {
  Object.setPrototypeOf(proxy, {});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

handler.setPrototypeOf = function(proto) {};

try {
  Object.setPrototypeOf(proxy, {});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var proto = {};
Object.setPrototypeOf(proto, Function.prototype);

var seen_prototype;
var seen_target;

handler.setPrototypeOf = function(target, proto) {
  seen_target = target;
  seen_prototype = proto;
  return true;
}

Object.setPrototypeOf(proxy, proto);
assert(target === seen_target);
assert(proto === seen_prototype);


var target = {};
var handler = {};
var handler2 = {};
var target2 = new Proxy(target, handler2);
var proxy2 = new Proxy(target2, handler);
var prototype = [2,3];

Object.setPrototypeOf(proxy2, prototype);

assert(prototype === Object.getPrototypeOf(target));


var target = {};
var handler = {
    setPrototypeOf(target, proto) {
        Object.setPrototypeOf(target, Function.prototype);
        Object.preventExtensions(target);
        return true;
    }
}

var proxy = new Proxy(target, handler);

try {
  Object.setPrototypeOf(proxy, Array.prototype);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
