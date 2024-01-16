













var nan = NaN;
var p_zero = 0.0;
var m_zero = -p_zero;

function isSameZero (x, y)
{
  return x === 0 && (1 / x) === (1 / y);
}

assert(isNaN(Math.atanh(NaN)));
assert(isNaN(Math.atanh(2)));
assert(isNaN(Math.atanh(44)));
assert(isNaN(Math.atanh(-2)));
assert(isNaN(Math.atanh(-13)));
assert(isSameZero(Math.atanh(p_zero), p_zero));
assert(isSameZero(Math.atanh(m_zero), m_zero));
assert(Math.atanh(-1) === Number.NEGATIVE_INFINITY);
assert(Math.atanh(1) === Number.POSITIVE_INFINITY);
