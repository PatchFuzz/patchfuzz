

















var target = {};
var handler = { has (target) {
  throw 42;
}};

var proxy = new Proxy(target, handler);

try {
  
  "foo" in proxy;
  assert(false);
} catch (e) {
  assert(e === 42);
}

try {
  
  with (proxy) {
    p;
    assert(false);
  }
  assert(false);
} catch (e) {
  assert(e === 42);
}

try {
  
  with (proxy) {
    function a (){}
    assert(false);
  }
  assert(false);
} catch (e) {
  assert(e === 42);
}


var target = {
  "target_one": 1
};

var handler = {
  has: function(target, prop) {
    return prop == "present";
  }
}

var proxy = new Proxy(target, handler);

assert("present" in proxy === true);
assert("non_present" in proxy === false);

var target = {
  foo: 5,
  bar: 10
};

var handler = {
  has: function(target, prop) {
    if (prop[0] === 'f') {
      return false;
    }
    return prop in target;
  }
};

var proxy = new Proxy(target, handler);

assert("foo" in proxy === false);
assert("bar" in proxy === true);


var target = {
  foo: "foo"
};
var handler = {};
var proxy = new Proxy(target, handler);

assert("foo" in proxy === true);


var target = {
  foo: "foo"
};
var handler = {has: null};
var proxy = new Proxy(target, handler);

assert("foo" in proxy === true);


var target = {
  foo: "foo"
};
var handler = {has: 42};
var proxy = new Proxy(target, handler);

try {
  "foo" in proxy;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = {
  foo: "foo"
};

var handler = {
  has: function(target, prop) {
    return prop in target;
  }
}

var proxy1 = new Proxy(target, handler);
var proxy2 = new Proxy(proxy1, handler);

assert("foo" in proxy2 === true);


var target = {};

Object.defineProperty(target, "prop", {
  configurable: false,
  value: 10
})

var handler = {
  has: function(target, prop) {
    return false;
  }
}

var proxy = new Proxy(target, handler);

try {
  'prop' in proxy;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var target = { a: 10 };
Object.preventExtensions(target);

var proxy = new Proxy(target, handler);

try {
  'a' in proxy;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
