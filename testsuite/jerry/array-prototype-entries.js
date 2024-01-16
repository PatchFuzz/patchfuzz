













try {
  Array.prototype.entries.call (undefined);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError)
}

var array = ['a', "foo", 1, 1.5, true, {} ,[], function f () { }];

var iterator = array.entries ();

var current_item = iterator.next ();

for (var i = 0; i < array.length; i++) {
  assert (current_item.value[0] === i);
  assert (current_item.value[1] === array[i]);
  assert (current_item.done === false);

  current_item = iterator.next ();
}

assert (current_item.value === undefined);
assert (current_item.done === true);

function foo_error () {
  throw new ReferenceError ("foo");
}

array = [1, 2, 3, 4, 5, 6, 7];

['0', '3', '5'].forEach (function (e) {
  Object.defineProperty (array, e, { 'get' : foo_error });
})

iterator = array.entries ();

var expected_values = [2, 3, 5, 7];
var expected_indices = [1, 2, 4, 6];
var expected_values_idx = 0;

for (var i = 0; i < array.length; i++) {
  try {
    current_item = iterator.next ();
    assert (current_item.value[0] === expected_indices[expected_values_idx]);
    assert (current_item.value[1] === expected_values[expected_values_idx]);
    assert (current_item.done === false);
    expected_values_idx++;
  } catch (e) {
    assert (e instanceof ReferenceError);
    assert (e.message === "foo");
  }
}

current_item = iterator.next ();
assert (current_item.value === undefined);
assert (current_item.done === true);


array = [];

iterator = array.entries ();
current_item = iterator.next ();

assert (current_item.value === undefined);
assert (current_item.done === true);



array = [0, 1, 2, 3, 4, 5];
iterator = array.entries ();

for (var i = 0; i < array.length; i++) {
  current_item = iterator.next ();
  assert (current_item.value[0] === i);
  assert (current_item.value[1] === array[i]);
  assert (current_item.done === false);
  array.pop();
}

assert ([].entries ().toString () === "[object Array Iterator]");
