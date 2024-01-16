













var p_zero = 0.0;
var n_zero = -p_zero;

function isSameZero (x, y)
{
  return x === 0 && (1 / x) === (1 / y);
}

assert(isNaN(Math.tanh(NaN)));
assert(isSameZero(Math.tanh(p_zero), p_zero));
assert(isSameZero(Math.tanh(n_zero), n_zero));
assert(Math.tanh(Number.POSITIVE_INFINITY) === 1);
assert(Math.tanh(Number.NEGATIVE_INFINITY) === -1);
