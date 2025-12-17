function testDetached() {
  var ab = new ArrayBuffer(10);
  var ta = new Int8Array(ab);
  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      detachArrayBuffer(ab);
    }

    try {
      var r = ta.subarray();
      print(r.length, ta.length);
    } catch (e) {
      print(e.name, "TypeError");
      print(i, 100);
      continue;
    }
    print(i < 100, true);
  }
}
testDetached();


function testShapeForOwnConstructor() {
  var ta = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      ta.constructor = Uint8Array;
    }

    var r = ta.subarray();
    print(r.length, ta.length);
    print(r.constructor, i < 100 ? Int8Array : Uint8Array);
  }
}
testShapeForOwnConstructor();


function testShapeForPrototype() {
  var ta = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      Object.setPrototypeOf(ta, Uint8Array.prototype);
    }

    var r = ta.subarray();
    print(r.length, ta.length);
    print(r.constructor, i < 100 ? Int8Array : Uint8Array);
  }
}
testShapeForPrototype();


function testFuse() {
  var ta = new Int8Array(10);

  
  print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);

  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      Int8Array.prototype.constructor = Uint8Array;
    }

    var r = ta.subarray();
    print(r.length, ta.length);
    print(r.constructor, i < 100 ? Int8Array : Uint8Array);
  }

  
  print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, false);
}


newGlobal().eval(`(${testFuse})()`);


print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);


function testStartIndexNonInteger() {
  var ta = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    
    var start = [0, 1.5][(i === 100)|0];
    var r = ta.subarray(start);
    print(r.length, ta.length - ((i === 100)|0));
  }
}
testStartIndexNonInteger();


function testEndIndexNonInteger() {
  var ta = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    
    var end = [5, 6.5][(i === 100)|0];
    var r = ta.subarray(0, end);
    print(r.length, ta.length - 5 + ((i === 100)|0));
  }
}
testEndIndexNonInteger();
