













var obj = {};
Object.defineProperties(obj, {
  "foo": {
    value: true,
    writable: true
  },
  "bar": {
    value: "baz",
    writable: false
  },
  "Hello": {
    value: "world",
    writable: false
  },
  "inner_object": {
    value : {
      "a" : 1,
      "b" : {
        value: "foo"
      }
    }
  }
});

print(obj.foo === true);
print(obj.bar === "baz");
print(obj.Hello === "world");
print(obj.inner_object.a === 1);
print(obj.inner_object.b.value === "foo");


try {
  Object.defineProperties(obj, undefined);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  Object.defineProperties(obj, null);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  Object.defineProperties(undefined, {
    "foo": {
      value: true,
      writable: true
    }
  });
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  Object.defineProperties([], undefined);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


var obj2 = {
  a: 5
};
try {
  Object.defineProperties(obj2, {
    "foo": {
      value: true,
      writable: true
    },
    "bar": {
      value: 3,
      set: 3
    },
    "Hello": {
      value: "world",
      writable: false
    }
  });
  print(false);
} catch (e) {
  print(e instanceof TypeError);
  print(obj2.foo === undefined);
  print(obj2.set === undefined);
  print(obj2.Hello === undefined);
  print(obj2.a === 5);
}


var obj = {};
Object.defineProperties(obj, {
  "foo": {
    value: 42,
    writable: true,
  },
  "bar": {
    get: function() { return this.foo },
    set: function(v) { this.foo = v }
  }
});

print(obj.bar === 42);
obj.bar = "baz";
print(obj.foo === "baz");


var obj = {};
var props = {
  prop1: {
    value: 1,
    writable: true,
  },
  get bar() {
    throw new TypeError("foo");
    return { value : 2, writable : true };
  },
  prop2: {
    value: 3,
    writable: true,
  },
  prop3: {
    value: 4,
    writable: true,
  }
};

try {
  Object.defineProperties(obj, props);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
  print(e.message === "foo");
}


var obj = {};
Object.defineProperties(obj, {
  "foo": {
    value: 42,
    writable: true,
  },
  "a": {
    value: "b",
    configurable: true
  },
  "bar": {
    get: function() {
      delete this.a;
      return this.foo;
    },
  }
});

print(obj.a === "b");
print(obj.bar === 42);
print(obj.a === undefined);

var obj = {};
var props = {
  prop1: {
    value: 1,
    writable: true,
  },
  get bar() {
    delete props.prop1;
    delete props.prop2;
    return { value : 2, writable : true };
  },
  prop2: {
    value: 3,
    writable: true,
  },
  prop3: {
    value: 4,
    writable: true,
  }
};

Object.defineProperties(obj, props);
var bar_desc = Object.getOwnPropertyDescriptor(obj, 'bar');
print(bar_desc.value === 2);
print(bar_desc.writable === true);
print(obj.prop2 === undefined);

var prop1_desc = Object.getOwnPropertyDescriptor(obj, 'prop1');
var prop3_desc = Object.getOwnPropertyDescriptor(obj, 'prop3');
print(prop1_desc.value === 1);
print(prop1_desc.writable === true);
print(prop3_desc.value === 4);
print(prop3_desc.writable === true);

var object = {};
var symbol = Symbol("symbol");

Object.defineProperties(object, {
  "foo": {
    value: true,
    writable: true
  },
  [symbol]: {
    value: "a symbol",
    configurable: true
  }
});

print(object.foo === true);
print(object[symbol] === "a symbol");

try {
  Object.defineProperties(undefined, {
    [symbol]: {
      value: "a symbol",
      writable: true
    }
  });
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


var obj2 = {
  a: 5
};
try {
  Object.defineProperties(obj2, {
    "foo": {
      value: true,
      writable: true
    },
    [symbol]: {
      value: "a symbol",
      set: 3
    }
  });
  print(false);
} catch (e) {
  print(e instanceof TypeError);
  print(obj2.foo === undefined);
  print(obj2[symbol] === undefined);
  print(obj2.a === 5);
}


var object = {};
Object.defineProperties(object, {
  "foo": {
    value: 42,
    writable: true,
  },
  [symbol]: {
    get: function() { return this.foo },
    set: function(v) { this.foo = v }
  }
});

print(object[symbol] === 42);
object[symbol] = "baz";
print(object[symbol] === "baz");


var object = {};
var props = {
  [symbol]: {
    value: 3,
    writable: true
  },
  get bar() {
    throw new TypeError("foo");
    return { value : 2, writable : true };
  },
};

try {
  Object.defineProperties(object, props);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
  print(e.message === "foo");
}

var object = {};
Object.defineProperties(object, {
  "foo": {
    value: 42,
    writable: true,
  },
  [symbol]: {
    value: "a symbol",
    configurable: true
  },
  "bar": {
    get: function() {
      delete this[symbol];
      return this.foo;
    },
  }
});

print(object[symbol] === "a symbol");
print(object.bar === 42);
print(object[symbol] === undefined);

var object = {};
var props = {
  [symbol]: {
    value: "a symbol",
    configurable: true
  },
  get bar() {
    delete props[symbol];
    delete props.prop1;
    return { value : 2, writable : true };
  },
  prop1: {
    value: 3,
    writable: true,
  },
};

Object.defineProperties(object, props);
var bar_desc = Object.getOwnPropertyDescriptor(object, 'bar');
print(bar_desc.value === 2);
print(bar_desc.writable === true);
print(object.prop1 === undefined);
print(object[symbol] === undefined);
