













var nan = NaN;
var p_zero = 0.0;
var m_zero = -p_zero;

function isSameZero (x, y)
{
  return x === 0 && (1 / x) === (1 / y);
}

assert(isNaN(Math.acosh(NaN)));
assert(isNaN(Math.acosh(0)));
assert(isNaN(Math.acosh(Number.NEGATIVE_INFINITY)));
assert(isSameZero(Math.acosh(1), p_zero));
assert(Math.acosh(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);

