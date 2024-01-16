

















function assertArrayEquals (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

assert (1 === Array.prototype.fill.length);

assert (assertArrayEquals ([].fill (8), []));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (), [undefined, undefined, undefined, undefined, undefined]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8), [8, 8, 8, 8, 8]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, 1), [0, 8, 8, 8, 8]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, 10), [0, 0, 0, 0, 0]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, -5), [8, 8, 8, 8, 8]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, 1, 4), [0, 8, 8, 8, 0]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, 1, -1), [0, 8, 8, 8, 0]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, 1, 42), [0, 8, 8, 8, 8]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, -3, 42), [0, 0, 8, 8, 8]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, -3, 4), [0, 0, 8, 8, 0]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, -2, -1), [0, 0, 0, 8, 0]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, -1, -3), [0, 0, 0, 0, 0]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (8, undefined, 4), [8, 8, 8, 8, 0]));
assert (assertArrayEquals ([ ,  ,  ,  , 0].fill (8, 1, 3), [, 8, 8, , 0]));
assert (assertArrayEquals ([0, 0, 0, 0, 0].fill (7.8), [7.8, 7.8, 7.8, 7.8, 7.8]));
assert (assertArrayEquals (["foo", "bar", "baz"].fill (1), [1, 1, 1]));




assert (assertArrayEquals (Object.freeze ([1, 2, 3]).fill (0, 0, 0), [1, 2, 3]));


try {
  Object.freeze ([0]).fill ();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
try {
  Array.prototype.fill.call (null)
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
try {
  Array.prototype.fill.call (undefined)
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

function TestFillObjectWithAccessors () {
  var kLength = 5;

  var log = [];

  var object = {
    length: kLength,
    get 1 () {
      log.push ("get 1");
      return this.foo;
    },

    set 1 (val) {
      log.push ("set 1 " + val);
      this.foo = val;
    }
  };

  Array.prototype.fill.call (object, 42);

  assert (kLength === object.length);
  assert (assertArrayEquals (["set 1 42"], log));

  for  (var i = 0; i < kLength; ++i) {
    assert (42 === object[i]);
  }
}
TestFillObjectWithAccessors ();

function TestFillObjectWithMaxNumberLength () {
  var kMaxSafeInt = Math.pow (2, 32) - 1;
  var object = {};
  object.length = kMaxSafeInt;

  Array.prototype.fill.call (object, 42, Math.pow (2, 32) - 4);

  assert (kMaxSafeInt === object.length);
  assert (42 === object[kMaxSafeInt - 3]);
  assert (42 === object[kMaxSafeInt - 2]);
  assert (42 === object[kMaxSafeInt - 1]);
}
TestFillObjectWithMaxNumberLength ();

function TestFillObjectWithPrototypeAccessors () {
  var kLength = 5;
  var log = [];
  var proto = {
    get 1 () {
      log.push ("get 0");
      return this.foo;
    },

    set 1 (val) {
      log.push ("set 1 " + val);
      this.foo = val;
    }
  };

  var object = { 0:0, 2:2, length: kLength};
  Object.setPrototypeOf (object, proto);

  Array.prototype.fill.call (object, "42");

  assert (kLength === object.length);
  assert (assertArrayEquals (["set 1 42"], log));
  assert (object.hasOwnProperty (0) == true);
  assert (object.hasOwnProperty (1) == false);
  assert (object.hasOwnProperty (2) == true);
  assert (object.hasOwnProperty (3) == true);
  assert (object.hasOwnProperty (4) == true);

  for (var i = 0; i < kLength; ++i) {
    assert ("42" === object[i]);
  }
}
TestFillObjectWithPrototypeAccessors ();

function TestFillSealedObject () {
  var object = { length: 42 };
  Object.seal (object);

  try {
    Array.prototype.fill.call (object);
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }
}
TestFillSealedObject ();

function TestFillFrozenObject () {
  var object = { length: 42 };
  Object.freeze (object);

  try {
    Array.prototype.fill.call (object);
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }
}
TestFillFrozenObject ();

function array_check(result_array, expected_array) {
  assert(result_array instanceof Array);
  assert(result_array.length === expected_array.length);
  for (var idx = 0; idx < expected_array.length; idx++) {
    assert(result_array[idx] === expected_array[idx]);
  }
}



var array = [1, 2, 3, 4, 5];
var value = array.fill(2, 0, {
    valueOf: function() {
        array.length = 0;
    }
})

array_check(value, []);


var array = [1, 2, 3];
var value = array.fill(1, {
    valueOf: function() {
        array.length = 6;
    }
})

array_check(value, [1, 1, 1, undefined, undefined, undefined]);


var array = [1, 2, 3, 4, 5, 6, 7];
var value = array.fill(4, {
    valueOf: function() {
        array.length = 3;
    }
})

array_check(value, [4, 4, 4]);
