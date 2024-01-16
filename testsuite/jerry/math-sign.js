













var nan = NaN;
var p_zero = 0.0;
var m_zero = -p_zero;

assert (isNaN(Math['sign'](NaN)));
assert (Math['sign'](p_zero) === p_zero);
assert (Math['sign'](m_zero) === m_zero);
assert (Math['sign'](-5) === -1);
assert (Math['sign'](5) === 1);
