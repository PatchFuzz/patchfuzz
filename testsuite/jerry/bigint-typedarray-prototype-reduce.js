













var bigint64_array = new BigInt64Array([1n, 2n, 3n, -4n, 5n]);

function sum(prev, current) {
  return prev + current;
}

var bigint64_reduce_result = bigint64_array.reduce(sum, 7n);
assert(bigint64_reduce_result === 14n);

var biguint64_array = new BigUint64Array([1n, 2n, 3n, -4n, 5n]);
var biguint64_reduce_result = biguint64_array.reduce(sum, 7n);
assert(biguint64_reduce_result === 18446744073709551630n);
