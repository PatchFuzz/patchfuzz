













var nan = NaN;
var p_zero = 0.0;
var m_zero = -p_zero;
var p_inf = Infinity;
var m_inf = -p_inf;

function isSameZero (x, y)
{
  return x === 0 && (1 / x) === (1 / y);
}

assert (isNaN(Math['trunc'](NaN)));
assert (isSameZero (Math['trunc'](p_zero), p_zero));
assert (isSameZero (Math['trunc'](m_zero), m_zero));
assert (Math['trunc'](p_inf) === p_inf);
assert (Math['trunc'](m_inf) === m_inf);
assert (isSameZero (Math['trunc'](0.5), p_zero));
assert (isSameZero (Math['trunc'](-0.5), m_zero));
assert (Math['trunc'](1.2) === 1);
assert (Math['trunc'](-1.5) === -1);
assert (Math['trunc'](65.7) === 65);
assert (Math['trunc'](-24.9) === -24);
