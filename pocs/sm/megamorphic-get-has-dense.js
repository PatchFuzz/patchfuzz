setJitCompilerOption("ic.force-megamorphic", 1);

function testBasic() {
  
  var objs = [[1, 2, 3], {0: 1, 1: 2, 2: 3}];
  var fun = x => x;
  fun[0] = 1;
  fun[1] = 2;
  fun[2] = 3;
  objs.push(fun);
  for (var i = 0; i < 20; i++) {
    var o = {};
    o["x" + i] = i;
    o[0] = 1;
    o[1] = 2;
    if (i < 10) {
      o[2] = 3;
    } else {
      
      o[3] = 4;
    }
    objs.push(o);
  }

  
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < objs.length; j++) {
      var obj = objs[j];
      print(obj[0], 1);
      print(obj[1], 2);
      print(obj[2], j < 13 ? 3 : undefined);
      print(obj[3], j >= 13 ? 4 : undefined);
      print(0 in obj, true);
      print(1 in obj, true);
      print(2 in obj, j < 13);
      print(3 in obj, j >= 13);
      print(Object.hasOwn(obj, 0), true);
      print(Object.hasOwn(obj, 1), true);
      print(Object.hasOwn(obj, 2), j < 13);
      print(Object.hasOwn(obj, 3), j >= 13);
    }
  }
}
testBasic();

function testNonNative() {
  var arr = [1, 2, 3];
  var proxy = new Proxy({}, {
    get(target, prop) { return 456; },
    has(target, prop) { return prop === "0"; },
  });
  for (var i = 0; i < 100; i++) {
    var obj = i < 95 ? arr : proxy;
    print(obj[0], i < 95 ? 1 : 456);
    print(0 in obj, true);
    print(1 in obj, i < 95);
    print(4 in obj, false);
    print(Object.hasOwn(obj, 0), i < 95);
    print(Object.hasOwn(obj, 1), i < 95);
    print(Object.hasOwn(obj, 4), false);
  }
}
testNonNative();
