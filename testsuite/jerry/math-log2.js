













var p_zero = 0.0;
var n_zero = -p_zero;

assert(isNaN(Math.log2(NaN)));
assert(isNaN(Math.log2(-42)));
assert(isNaN(Math.log2(-3.0)));
assert(Math.log2(n_zero) === Number.NEGATIVE_INFINITY);
assert(Math.log2(p_zero) === Number.NEGATIVE_INFINITY);
assert(Math.log2(1) === p_zero);
assert(Math.log2(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);
assert(Math.log2(2.0) === 1);
assert(Math.log2(4.0) === 2)
assert(Math.log2(1024.0) === 10)
