


















var target = {};
var handler = { isExtensible (target) {
  throw 42;
}};

var proxy = new Proxy(target, handler);

try {
  
  Object.isFrozen(proxy)
  assert(false);
} catch (e) {
  assert(e === 42);
}

try {
  
  Object.isSealed(proxy)
  assert(false);
} catch (e) {
  assert(e === 42);
}

try {
  
  Object.isExtensible(proxy)
  assert(false);
} catch (e) {
  assert(e === 42);
}


var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
assert(Object.isExtensible(target) === true)
assert(Object.isExtensible(proxy) === true);
Object.preventExtensions(target);
assert(Object.isExtensible(target) === false);
assert(Object.isExtensible(proxy) === false);


var target = {};
var handler =  { isExtensible: null };
var proxy = new Proxy(target, handler);
assert(Object.isExtensible(target) === true)
assert(Object.isExtensible(proxy) === true);
Object.preventExtensions(target);
assert(Object.isExtensible(target) === false);
assert(Object.isExtensible(proxy) === false);


var target = {};
var handler =  { isExtensible: true };
var proxy = new Proxy(target, handler);

try {
  Object.isExtensible(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError); 
}


var target = { prop1: true };
var handler = {
  isExtensible(target) {
    target.prop1 = false;
    return Object.isExtensible(target);
  }
};

var proxy = new Proxy(target, handler);
assert(Object.isExtensible(proxy) === true);
assert(target.prop1 === false);
Object.preventExtensions(target);
assert(Object.isExtensible(target) === false);
assert(Object.isExtensible(proxy) === false);


var target = {};
var handler = {
  isExtensible(target) {
    return false;
  }
};

var proxy = new Proxy(target, handler);

try {
  Object.isExtensible(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = {};
var handler = { 
  isExtensible (target) {
    return Object.isExtensible(target);
  }
};

var revocable = Proxy.revocable (target, {});
var proxy = revocable.proxy;
revocable.revoke();

try {
  Object.isExtensible(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = {};
var handler1 = {
  isExtensible(target) {
    return Object.isExtensible(target);
  }
};

var handler2 = {
  isExtensible(target) {
    return false;
  }
};

var proxy = new Proxy(target, handler1);
var proxy2 = new Proxy(proxy, handler1);
assert(Object.isExtensible(proxy2) === true);

var proxy3 = new Proxy(proxy, handler2);

try {
  Object.isExtensible(proxy3);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var proxy4 = new Proxy(proxy2, handler1);
Object.preventExtensions(target);
assert(Object.isExtensible(proxy4) === false);
