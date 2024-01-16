













var p_zero = 0.0;
var n_zero = -p_zero;

function isSameZero (x, y)
{
  return x === 0 && (1 / x) === (1 / y);
}

assert(isNaN(Math.expm1(NaN)));
assert(isSameZero(Math.expm1(p_zero), p_zero));
assert(isSameZero(Math.expm1(n_zero), n_zero));
assert(Math.expm1(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);
assert(Math.expm1(Number.NEGATIVE_INFINITY) === -1);
assert(1/Math.expm1(-0) === Number.NEGATIVE_INFINITY)
assert(1/Math.expm1(0) === Number.POSITIVE_INFINITY)
assert(Math.expm1(1) <= 1.00000001 * (Math.E - 1));
assert(Math.expm1(1) >= 0.99999999 * (Math.E - 1));
