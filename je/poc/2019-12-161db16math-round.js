













var nan = NaN;
var p_zero = 0.0;
var m_zero = -p_zero;
var p_inf = Infinity;
var m_inf = -p_inf;

print(isNaN(Math['round'](NaN)));
print(Math['round'](p_zero) === p_zero);
print(Math['round'](m_zero) === m_zero);
print(Math['round'](p_inf) === p_inf);
print(Math['round'](m_inf) === m_inf);

print(Math['round'](0.5) === 1.0);
print(Math['round'](-0.5) === -0.0);
print(Math['round'](1.2) === 1.0);
print(Math['round'](1.5) === 2.0);
print(Math['round'](0.7) === 1.0);
print(Math['round'](0.2) === 0.0);
print(Math['round'](-0.2) === -0.0);
print(Math['round'](-0.7) === -1.0);
print(Math['round'](-1.2) === -1.0);
print(Math['round'](-1.7) === -2.0);
print(Math['round'](-1.5) === -1.0);

print(Math['round'](1) === 1);
print(Math['round'](-1) === -1);

for (var n = 1; n <= 53; n++)
{
  var x = Math.pow(2, n)
  print(Math['round'](x - 1) === x - 1);
  print(Math['round'](x) === x);
  print(Math['round'](x + 1) === x + 1);
  print(Math['round'](-x - 1) === -x - 1);
  print(Math['round'](-x) === -x);
  print(Math['round'](-x + 1) === -x + 1);
}
