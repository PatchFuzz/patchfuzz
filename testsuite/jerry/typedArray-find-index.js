













var arrow_is_available = false;

try {
  assert (eval ("(f => 5) ()") === 5);
  arrow_is_available = true;
} catch (e) {
  assert (e instanceof SyntaxError);
}

var typedArrayTypes = [Int8Array,
                       Uint8Array,
                       Uint8ClampedArray,
                       Int16Array,
                       Uint16Array,
                       Int32Array,
                       Uint32Array,
                       Float32Array,
                       Float64Array];


typedArrayTypes.forEach (function (TypedArray) {

  var array1 = new TypedArray ([5, 12, 0, 8, 120, 44]);

  function bigger_than_10 (element) {
    return element > 10;
  }

  assert (array1.findIndex (bigger_than_10) === 1);

  function less_than_0 (element) {
    if (element == 0) {
      throw new Error ("zero");
    }
    return element < 0;
  }

  try {
    array1.findIndex (less_than_0);
    assert (false);
  } catch (e) {
    assert (e instanceof Error);
    assert (e.message === "zero");
  }

  if (arrow_is_available) {
    assert (eval ("array1.findIndex (e => e > 100)") === 4);
  }

  
  var src_array = new TypedArray ([4, 6, 8, 12]);
  var array_index = 0;

  function isPrime (element, index, array) {
    assert (array_index++ === index);
    assert (array === src_array)
    assert (element === array[index]);

    var start = 2;
    while (start <= Math.sqrt (element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }

  assert (src_array.findIndex (isPrime) === -1);

  src_array = new TypedArray ([4, 5, 8, 12]);
  array_index = 0;
  assert (src_array.findIndex (isPrime) === 1);

  
  try {
    TypedArray.prototype.findIndex.call (5);
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }

  
  var array = new TypedArray ([1, 2, 3]);

  try {
    array.findIndex (5);
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }

  
  try {
    array.findIndex ();
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }

  
  assert (array.findIndex (function (e) { return e < 2 }, {}, 8, 4, 5, 6, 6) === 0);
})

function isNegative(element, index, array) {
  return element < 0;
}

function isBigger(element, index, array) {
  return element > 40n;
}

var bigint_array = new BigInt64Array([10n, -20n, 30n, -40n, 50n]);
var biguint_array = new BigUint64Array([10n, 20n, 30n, 40n, 50n]);

assert(bigint_array.findIndex(isNegative) === 1);
assert(biguint_array.findIndex(isBigger) === 4);
