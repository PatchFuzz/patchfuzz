













var p_zero = 0.0;
var n_zero = -p_zero;

assert(isNaN(Math.cosh(NaN)));
assert(Math.cosh(p_zero) === 1);
assert(Math.cosh(n_zero) === 1);
assert(Math.cosh(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);
assert(Math.cosh(Number.NEGATIVE_INFINITY) === Number.POSITIVE_INFINITY);
