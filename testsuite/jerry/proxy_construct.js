

















var target = function () {};
var handler = { construct (target) {
  throw 42;
}};

var proxy = new Proxy(target, handler);

try {
  
  new proxy(5)
  assert(false);
} catch (e) {
  assert(e === 42);
}

try {
  
  Array.of.call(proxy);
  assert(false);
} catch (e) {
  assert(e === 42);
}


var proxy = new Proxy({},{});

try {
  new proxy();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var proxy2 = new Proxy(proxy, {});

try {
  new proxy2();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var called = false;

function Target() {
  called = true;
  this.property1 = 'value1';
};

Target.prototype = {};
var proxy = new Proxy(Target, {});

assert(called === false);

var instance = new proxy();

assert(called === true);
assert('value1' === instance.property1);
assert(Target.prototype === Object.getPrototypeOf(instance));

var proxy2 = new Proxy(proxy, {});
called = false;
var instance2 = new proxy2();

assert(called === true);
assert('value1' === instance2.property1);
assert(Target.prototype === Object.getPrototypeOf(instance));

function Target2(a, b) {
  this.sum = a + b;
};
var handler = {
  construct(t, c, args) {
      return { sum: 42 };
  }
};
var proxy = new Proxy(Target2, handler);
assert((new proxy(1, 2)).sum === 42);

function Target3(arg1, arg2) {
  this.arg1 = arg1;
  this.arg2 = arg2;
}
var seen_target, seen_arguments, seen_new_target;
var handler = {
  construct(target, args, new_target) {
    seen_target = target;
    seen_arguments = args;
    seen_new_target = new_target;
    return Reflect.construct(target, args, new_target);
  }
}
var proxy = new Proxy(Target3, handler);
var instance = new proxy('a', 'b');

assert(Target3 === seen_target);
assert(JSON.stringify(seen_arguments) === '["a","b"]');
assert(proxy === seen_new_target);
assert('a' === instance.arg1);
assert('b' === instance.arg2);

var instance2 = Reflect.construct(proxy, ['a1', 'b1'], Array);
assert(Target3 === seen_target);
assert(JSON.stringify(seen_arguments) === '["a1","b1"]');
assert(Array === seen_new_target);
assert('a1'=== instance2.arg1);
assert('b1' === instance2.arg2);

var p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    throw 42;
  }
});

try {
  new p();
  assert(false);
} catch (e) {
  assert(e === 42);
}


var p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    return 1;
  }
});

try {
  new p();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError); 
}

var p = new Proxy({}, {
  construct: function(target, argumentsList, newTarget) {
    return {};
  }
});

try {
  new p();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError); 
}
