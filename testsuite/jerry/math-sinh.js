













var p_zero = 0.0;
var n_zero = -p_zero;

function isSameZero (x, y)
{
  return x === 0 && (1 / x) === (1 / y);
}

assert(isNaN(Math.sinh(NaN)));
assert(isSameZero(Math.sinh(p_zero), p_zero));
assert(isSameZero(Math.sinh(n_zero), n_zero));
assert(Math.sinh(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);
assert(Math.sinh(Number.NEGATIVE_INFINITY) === Number.NEGATIVE_INFINITY);
