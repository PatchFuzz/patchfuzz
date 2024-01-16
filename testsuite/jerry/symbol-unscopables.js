













var obj = {
    prop1: 42,
    prop2: 13,
    prop3: "foo",
    prop4: 1
};

var obj2 = {
    foo: "foo"
};

obj[Symbol.unscopables] = {
    prop1: false,
    prop2: true,
    prop3: undefined,
    prop4: obj2
};

with (obj)
{
    assert(prop1 === 42);

    try {
      prop2;
      assert(false);
    } catch (e) {
      assert(e instanceof ReferenceError);
    }

    assert (prop3 === "foo");

    try {
      prop4;
      assert(false);
    } catch (e) {
      assert(e instanceof ReferenceError);
    }

    try {
      prop5;
      assert(false);
    } catch (e) {
      assert(e instanceof ReferenceError);
    }
}

var obj2 = {};
Object.defineProperty(obj2, Symbol.unscopables, { get: function () { throw 42; } });

with (obj2) {
  try {
    prop;
    assert(false);
  } catch (e) {
    assert(e instanceof ReferenceError);
  }
}

var obj3 = { foo: 12 };
Object.defineProperty(obj3, Symbol.unscopables, { get: function () { throw 42; } });

with (obj3) {
  try {
    typeof foo;
  } catch (e) {
    assert(e === 42);
  }
}

var symbol_obj = Array.prototype[Symbol.unscopables];
assert(symbol_obj.copyWithin === true);
assert(symbol_obj.entries === true);
assert(symbol_obj.fill === true);
assert(symbol_obj.find === true);
assert(symbol_obj.findIndex === true);
assert(symbol_obj.keys === true);
assert(symbol_obj.values === true);

assert(Object.getPrototypeOf(Array.prototype[Symbol.unscopables]) === null);

var obj3 = Object.getOwnPropertyDescriptor(Array.prototype[Symbol.unscopables], "find");
assert(obj3.value === true);
assert(obj3.writable === true);
assert(obj3.enumerable == true);
assert(obj3.configurable == true);

var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  assert(foo === 1);
  assert(typeof bar === "undefined");
}

let track = [];
let proxy = new Proxy({ a : 4, [Symbol.unscopables] : [] }, {
  has (t, p) {
    track.push(p);
    return Reflect.has(...arguments);
  },
  get (t, p, r) {
    track.push(p);
    return Reflect.get(...arguments);
  }
});

with (proxy){
  a;
}

assert(track.length == 3);
assert(track[0] === 'a');
assert(track[1] === Symbol.unscopables);
assert(track[2] === 'a');
