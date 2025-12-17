function testGC() {
  var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
  for (var i = 0; i < 20; i++) {
    arr.sort((x, y) => {
      if (i === 17) {
        gc();
      }
      return x.n - y.n;
    });
  }
  print(arr.map(x => x.n).join(""), "0135");
}
testGC();

function testException() {
  var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
  var ex;
  try {
    for (var i = 0; i < 20; i++) {
      arr.sort((x, y) => {
        if (i === 17) {
          throw "fit";
        }
        return x.n - y.n;
      });
    }
  } catch (e) {
    ex = e;
  }
  print(ex, "fit");
  print(i, 17);
}
testException();

function testRectifier() {
  var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
  for (var i = 0; i < 20; i++) {
    arr.sort(function(x, y, a) {
      print(arguments.length, 2);
      print(a, undefined);
      return y.n - x.n;
    });
  }
  print(arr.map(x => x.n).join(""), "5310");
}
testRectifier();

function testClassConstructor() {
  var normal = (x, y) => x.n - y.n;
  var dummy = {};
  var ctor = (class { constructor(x, y) {
    print(x, dummy);
  }});
  
  for (var i = 0; i < 20; i++) {
    new ctor(dummy, dummy);
  }
  for (var i = 0; i < 20; i++) {
    var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
    var ex;
    try {
      arr.sort(i < 17 ? normal : ctor);
    } catch (e) {
      ex = e;
    }
    print(ex instanceof TypeError, i >= 17);
    print(arr.map(x => x.n).join(""), i >= 17 ? "1305" : "0135");
  }
}
testClassConstructor();

function testSwitchRealms() {
  var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
  var g = newGlobal({sameCompartmentAs: this});
  g.foo = 123;
  var comp = g.evaluate(`((x, y) => {
    print(foo, 123);
    return x.n - y.n;
  })`);
  for (var i = 0; i < 20; i++) {
    arr.sort(comp);
  }
  print(arr.map(x => x.n).join(""), "0135");
}
testSwitchRealms();

function testCrossCompartment() {
  var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
  var g = newGlobal({newCompartment: true});
  var wrapper = g.evaluate(`((x, y) => {
    return x.n - y.n;
  })`);
  for (var i = 0; i < 20; i++) {
    arr.sort(wrapper);
  }
  print(arr.map(x => x.n).join(""), "0135");
}
testCrossCompartment();

function testBound() {
  var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
  var fun = (function(a, x, y) {
    "use strict";
    print(this, null);
    print(a, 1);
    return x.n - y.n;
  }).bind(null, 1);
  for (var i = 0; i < 20; i++) {
    arr.sort(fun);
  }
  print(arr.map(x => x.n).join(""), "0135");
}
testBound();

function testExtraArgs() {
  var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
  var cmp = (x, y) => x.n - y.n;
  for (var i = 0; i < 20; i++) {
    arr.sort(cmp, cmp, cmp, cmp, cmp, cmp, cmp);
  }
  print(arr.map(x => x.n).join(""), "0135");
}
testExtraArgs();

function testBailout() {
  var arr = [{n: 1}, {n: 3}, {n: 0}, {n: 5}];
  for (var i = 0; i < 110; i++) {
    arr.sort(function(x, y) {
      if (i === 108) {
        bailout();
      }
      return x.n - y.n;
    });
  }
  print(arr.map(x => x.n).join(""), "0135");
}
testBailout();

function testExceptionHandlerSwitchRealm() {
  var g = newGlobal({sameCompartmentAs: this});
  for (var i = 0; i < 25; i++) {
    var ex = null;
    try {
      g.Array.prototype.toSorted.call([2, 3], () => {
        throw "fit";
      });
    } catch (e) {
      ex = e;
    }
    print(ex, "fit");
  }
}
testExceptionHandlerSwitchRealm();
