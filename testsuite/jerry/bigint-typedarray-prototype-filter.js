













function arrayEquals(result, expected) {
  assert(result.length === expected.length);

  for (var idx = 0; idx < result.length; idx++) {
    assert(result[idx] === expected[idx]);
  }
}

var bigint64_array = new BigInt64Array([1n, 2n, 3n, -4n, 5n]);

function positive(element, index, array) {
  return element > 0n;
}

var bigint64_filter = bigint64_array.filter(positive);
arrayEquals(bigint64_filter, [1n, 2n, 3n, 5n]);

var biguint64_array = new BigUint64Array([1n, 2n, 3n, -4n, 5n]);
var biguint64_filter = biguint64_array.filter(positive);
assert(biguint64_filter.length === 5);
