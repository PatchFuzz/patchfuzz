













var p_zero = 0.0;
var n_zero = -p_zero;

assert(isNaN(Math.log10(NaN)));
assert(isNaN(Math.log10(-42)));
assert(isNaN(Math.log10(-3.0)));
assert(Math.log10(n_zero) === Number.NEGATIVE_INFINITY);
assert(Math.log10(p_zero) === Number.NEGATIVE_INFINITY);
assert(Math.log10(1) === p_zero);
assert(Math.log10(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);
assert(Math.log10(10.0) === 1);
assert(Math.log10(100.0) === 2)
