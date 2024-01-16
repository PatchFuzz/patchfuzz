

var test_symbol = Symbol ('Test');

var obj = {};

assert ((test_symbol in obj) === false);

obj[test_symbol] = 'value';

assert ((test_symbol in obj) === true);
assert (obj[test_symbol] === 'value');


var array = [];

assert ((test_symbol in array) === false);

array[test_symbol] = 'value';

assert ((test_symbol in array) === true);
assert (array[test_symbol] === 'value');


assert ((test_symbol in Symbol) === false);

try {
  test_symbol in test_symbol;
  assert (false);
} catch (ex) {
  assert (ex instanceof TypeError);
}

try {
  test_symbol in 3;
  assert (false);
} catch (ex) {
  assert (ex instanceof TypeError);
}

try {
  test_symbol in 'Test';
  assert (false);
} catch (ex) {
  assert (ex instanceof TypeError);
}
