













var nan = NaN;
var p_zero = 0.0;
var m_zero = -p_zero;

function isSameZero (x, y)
{
  return x === 0 && (1 / x) === (1 / y);
}

assert(isNaN(Math.asinh(NaN)));
assert(isSameZero(Math.asinh(p_zero), p_zero));
assert(isSameZero(Math.asinh(m_zero), m_zero));
assert(Math.asinh(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);
assert(Math.asinh(Number.NEGATIVE_INFINITY) === Number.NEGATIVE_INFINITY);

