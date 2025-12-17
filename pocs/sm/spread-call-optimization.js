function testBasic() {
  
  function argslen() { return arguments.length; }

  
  function arg0() { return arguments[0]; }

  
  function argIndex(i) { return arguments[i]; }

  
  function noFormalsLen() { return argslen(...arguments); }
  function noFormals0() { return arg0(...arguments); }
  function noFormalsIndex() { return argIndex(...arguments); }

  
  function formalsLen(x, y, z) { return argslen(...arguments); }
  function formals0(x, y, z) { return arg0(...arguments); }
  function formalsIndex(x, y, z) { return argIndex(...arguments); }

  
  function restLen(...rest) { return argslen(...arguments); }
  function rest0(...rest) { return arg0(...arguments); }
  function restIndex(...rest) { return argIndex(...arguments); }

  
  function defaultLen(x = 0) { return argslen(...arguments); }
  function default0(x = 0) { return arg0(...arguments); }
  function defaultIndex(x = 0) { return argIndex(...arguments); }

  for (let i = 0; i < 100; ++i) {
    print(noFormalsLen(), 0);
    print(noFormalsLen(1), 1);
    print(noFormalsLen(1, 2, 3), 3);

    print(formalsLen(), 0);
    print(formalsLen(1), 1);
    print(formalsLen(1, 2, 3), 3);

    print(restLen(), 0);
    print(restLen(1), 1);
    print(restLen(1, 2, 3), 3);

    print(defaultLen(), 0);
    print(defaultLen(1), 1);
    print(defaultLen(1, 2, 3), 3);

    print(noFormals0(), undefined);
    print(noFormals0(100), 100);
    print(noFormals0(100, 200, 300), 100);

    print(formals0(), undefined);
    print(formals0(100), 100);
    print(formals0(100, 200, 300), 100);

    print(rest0(), undefined);
    print(rest0(100), 100);
    print(rest0(100, 200, 300), 100);

    print(default0(), undefined);
    print(default0(100), 100);
    print(default0(100, 200, 300), 100);

    print(noFormalsIndex(), undefined);
    print(noFormalsIndex(0), 0);
    print(noFormalsIndex(0, 100), 0);
    print(noFormalsIndex(0, 100, 200, 300), 0);
    print(noFormalsIndex(1, 100), 100);
    print(noFormalsIndex(1, 100, 200, 300), 100);

    print(formalsIndex(), undefined);
    print(formalsIndex(0), 0);
    print(formalsIndex(0, 100), 0);
    print(formalsIndex(0, 100, 200, 300), 0);
    print(formalsIndex(1, 100), 100);
    print(formalsIndex(1, 100, 200, 300), 100);

    print(restIndex(), undefined);
    print(restIndex(0), 0);
    print(restIndex(0, 100), 0);
    print(restIndex(0, 100, 200, 300), 0);
    print(restIndex(1, 100), 100);
    print(restIndex(1, 100, 200, 300), 100);

    print(defaultIndex(), undefined);
    print(defaultIndex(0), 0);
    print(defaultIndex(0, 100), 0);
    print(defaultIndex(0, 100, 200, 300), 0);
    print(defaultIndex(1, 100), 100);
    print(defaultIndex(1, 100, 200, 300), 100);
  }
}
testBasic();

function testOverriddenIterator() {
  function g(x) {
    return x;
  }

  function f(i) {
    if (i === 100) {
      arguments[Symbol.iterator] = function() {
        return ["bad"].values();
      };
    }
    return g(...arguments);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i), i !== 100 ? i : "bad");
  }
}
testOverriddenIterator();

function testOverriddenLength() {
  function g(x, y = 0) {
    return x + y;
  }

  function f(i) {
    if (i === 100) {
      arguments.length = 1;
    }
    return g(...arguments);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i, i), i !== 100 ? i * 2 : i);
  }
}
testOverriddenLength();

function testOverriddenElement() {
  function g(x, y) {
    return x + y;
  }

  function f(i) {
    if (i === 100) {
      arguments[1] = 0;
    }
    return g(...arguments);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i, i), i !== 100 ? i * 2 : i);
  }
}
testOverriddenElement();

function testDeletedElement() {
  function g(x, y = 0) {
    return x + y;
  }

  function f(i) {
    if (i === 100) {
      delete arguments[1];
    }
    return g(...arguments);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i, i), i !== 100 ? i * 2 : i);
  }
}
testDeletedElement();

function testForwardedArg() {
  function g(x, y) {
    return x + y;
  }

  function f(i) {
    function closedOver() {
      if (i === 100) i = 0;
    }
    closedOver();
    return g(...arguments);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i, i), i !== 100 ? i * 2 : i);
  }
}
testForwardedArg();

function testModifiedArrayIteratorPrototype() {
  function g(x, y) {
    return x + y;
  }

  const ArrayIteratorPrototype = Reflect.getPrototypeOf([][Symbol.iterator]());
  const ArrayIteratorPrototypeNext = ArrayIteratorPrototype.next;
  function newNext() {
    var result = ArrayIteratorPrototypeNext.call(this);
    if (!result.done) {
      result.value *= 2;
    }
    return result;
  }

  function f(i) {
    if (i === 100) {
      ArrayIteratorPrototype.next = newNext;
    }
    return g(...arguments);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i, i), i < 100 ? i * 2 : i * 4);
  }
}
testModifiedArrayIteratorPrototype();
