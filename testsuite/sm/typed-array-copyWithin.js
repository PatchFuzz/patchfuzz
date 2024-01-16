



load(libdir + "asserts.js");

const constructors = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
];

for (var constructor of constructors) {

    assertEq(constructor.prototype.copyWithin.length, 2);

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3),
                 new constructor([4, 5, 3, 4, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(1, 3),
                 new constructor([1, 4, 5, 4, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(1, 2),
                 new constructor([1, 3, 4, 5, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(2, 2),
                 new constructor([1, 2, 3, 4, 5]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, 4),
                 new constructor([4, 2, 3, 4, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(1, 3, 4),
                 new constructor([1, 4, 3, 4, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(1, 2, 4),
                 new constructor([1, 3, 4, 4, 5]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(0, -2),
                 new constructor([4, 5, 3, 4, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(0, -2, -1),
                 new constructor([4, 2, 3, 4, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3, -2),
                 new constructor([1, 3, 3, 4, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3, -1),
                 new constructor([1, 3, 4, 4, 5]));
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3),
                 new constructor([1, 3, 4, 5, 5]));

    
    assertThrowsInstanceOf(function() {
      constructor.prototype.copyWithin.call(null, 0, 3);
    }, TypeError, "Assert that copyWithin fails if this value is null");

    assertThrowsInstanceOf(function() {
      var throw42 = { valueOf: function() { throw 42; } };
      constructor.prototype.copyWithin.call(null, throw42, throw42, throw42);
    }, TypeError, "Assert that copyWithin fails if this value is null");

    assertThrowsInstanceOf(function() {
      var throw42 = { valueOf: function() { throw 42; } };
      constructor.prototype.copyWithin.call(undefined, throw42, throw42, throw42);
    }, TypeError, "Assert that copyWithin fails if this value is undefined");

    assertThrowsInstanceOf(function() {
      constructor.prototype.copyWithin.call(undefined, 0, 3);
    }, TypeError, "Assert that copyWithin fails if this value is undefined");

    
    assertThrowsInstanceOf(function() {
      constructor.prototype.copyWithin.call("hello world", 0, 3);
    }, TypeError, "Assert that copyWithin fails if this value is string");

    assertThrowsInstanceOf(function() {
      var throw42 = { valueOf: function() { throw 42; } };
      constructor.prototype.copyWithin.call("hello world", throw42, throw42, throw42);
    }, TypeError, "Assert that copyWithin fails if this value is string");

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(3, 0),
                 new constructor([1, 2, 3, 1, 2]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(3, 0, 4),
                 new constructor([1, 2, 3, 1, 2]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(0.2, 3.9),
                 new constructor([4, 5, 3, 4, 5]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(-0, 3),
                 new constructor([4, 5, 3, 4, 5]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(0, 7),
                 new constructor([1, 2, 3, 4, 5]));

    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(7, 0),
                 new constructor([1, 2, 3, 4, 5]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(-7, 0),
                 new constructor([1, 2, 3, 4, 5]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(-5, 0),
                 new constructor([1, 2, 3, 4, 5]));

    
    assertDeepEq(new constructor([]).copyWithin(0, 3),
                 new constructor([]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(2, 1, 4),
                 new constructor([1, 2, 2, 3, 4]));

    
    arr = new constructor([1, 2, 3, 4, 5]);
    arr.copyWithin(2, 1, 4);
    assertDeepEq(arr.copyWithin(2, 1, 4),
                 new constructor([1, 2, 2, 2, 3]));

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, undefined),
                 new constructor([4, 5, 3, 4, 5]));

    
    arr = new constructor([0, 1, 2, 3, 5]);
    Object.defineProperty(arr, "length", {
      get: function () { throw new Error("length accessor called"); }
    });
    arr.copyWithin(1, 3);

    var large = 10000;

    
    arr = new constructor(large);
    assertDeepEq(arr.copyWithin(45, 900), arr);

    
    for (var i = 0; i < large; i++) {
      arr[i] = Math.random();
    }
    arr.copyWithin(45, 900);

    
    for (var i = 0; i < large; i++) {
      arr[i] = { num: Math.random() };
    }
    arr.copyWithin(45, 900);

    
    assertEq(arr.length, large);

    
    assertDeepEq(new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, null),
                 new constructor([1, 2, 3, 4, 5]));

    
    var tarray = new constructor(8);
    try
    {
      tarray.copyWithin({ valueOf: function() { throw 42; } });
      throw new Error("expected to throw");
    }
    catch (e)
    {
      assertEq(e, 42, "should have failed converting target to index");
    }

    function detachAndConvertTo(x) {
      return { valueOf() {
                 detachArrayBuffer(tarray.buffer);
                 return x;
               } };
    }

    
    tarray = new constructor([1, 2, 3, 4, 5]);
    try
    {
      tarray.copyWithin(0, 3, detachAndConvertTo(4));
      throw new Error("expected to throw");
    }
    catch (e)
    {
      assertEq(e instanceof TypeError, true,
               "expected throw with detached buffer during set");
    }

    
    tarray = new constructor([1, 2, 3, 4, 5]);
    assertDeepEq(tarray.copyWithin(0, 3, detachAndConvertTo(3)),
                 new constructor([]));

    
}
