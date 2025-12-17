actual = '';
expected = 'nocrash,';

function b(a) {
}

function f(y) {
  function q() { b(y); };
  q();
}

for (var i = 0; i < 1000; ++i) {
  f(i);
 }

print('nocrash')


print(actual, expected)
