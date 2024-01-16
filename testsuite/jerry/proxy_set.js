


















function Monster() {
  this.eyeCount = 4;
}

var handler = {
  set(obj, prop, value) {
    if (prop == 'eyeCount') {
      obj[prop] = value;
    } else {
      obj[prop] = "foo";
    }
  }
};

var monster = new Monster();
var proxy = new Proxy(monster, handler);

proxy.eyeCount = 1;
proxy.foo = "bar";

assert(monster.eyeCount === 1);
assert(monster.foo === "foo");

var target = { foo: "foo"};
var handler = {
  set: function(obj, prop, value) {
    obj[prop] = "";
  }
};
var proxy = new Proxy(target, handler);

proxy.foo = 12;
assert(target.foo === "");

var properties = ["bla", "0", 1, Symbol(), {[Symbol.toPrimitive]() {return "a"}}];

var target = {};
var handler = {};
var proxy = new Proxy(target, handler);




var target = {};
var handler = {
  set(obj, prop, value) {
    obj[prop] = value;
  }
};

var proxy = new Proxy(target, handler);
var proxy2 = new Proxy(proxy, handler);

proxy2.prop = "foo";

assert(target.prop === "foo");


var target = {};
var handler = {
  set(obj, prop, value) {
    obj[prop] = value;
  }
};

var revocable = Proxy.revocable (target, {});
var proxy = revocable.proxy;
revocable.revoke();

try {
  proxy.prop = 42;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var target = {};
var handler = { set() {return 42} };
var proxy = new Proxy(target, handler);

Object.defineProperty(target, "key", {
  configurable: false,
  writable: false,
  value: 0
});

try {
  proxy.key = 600;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

Object.defineProperty(target, "key2", {
  configurable: false,
  set: undefined
});

try {
  proxy.key2 = 500;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var setPropProxy = new Proxy({}, {});
setPropProxy["alma"] = 3;

var desc = Object.getOwnPropertyDescriptor(setPropProxy, "alma");

assert(desc.writable === true);
assert(desc.enumerable === true);
assert(desc.configurable === true);
assert(desc.value === 3);
