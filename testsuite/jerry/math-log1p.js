













var p_zero = 0.0;
var n_zero = -p_zero;

function isSameZero (x, y)
{
  return x === 0 && (1 / x) === (1 / y);
}

assert(isNaN(Math.log1p(NaN)));
assert(isNaN(Math.log1p(-42)));
assert(isNaN(Math.log1p(-3.0)));
assert(isSameZero(Math.log1p(n_zero), n_zero));
assert(isSameZero(Math.log1p(p_zero), p_zero));
assert(Math.log1p(-1) === Number.NEGATIVE_INFINITY);
assert(Math.log1p(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);
assert(Math.log1p(Math.E - 1) === 1);
