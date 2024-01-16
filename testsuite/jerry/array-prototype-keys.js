













try {
  Array.prototype.keys.call (undefined);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError)
}

var array = ['a', "foo", 1, 1.5, true, {} ,[], function f () { }];

var iterator = array.keys ();

var current_item = iterator.next ();

for (var i = 0; i < array.length; i++) {
  assert (current_item.value === i);
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

iterator = array.keys ();

for (var i = 0; i < array.length; i++) {
  try {
    current_item = iterator.next ();
    assert (current_item.value === i);
    assert (current_item.done === false);
  } catch (e) {
    assert (e instanceof ReferenceError);
    assert (e.message === "foo");
  }
}

current_item = iterator.next ();
assert (current_item.value === undefined);
assert (current_item.done === true);


array = [];

iterator = array.keys ();
current_item = iterator.next ();

assert (current_item.value === undefined);
assert (current_item.done === true);



array = [0, 1, 2, 3, 4, 5];
iterator = array.keys ();

for (var i = 0; i < array.length; i++) {
  current_item = iterator.next ();
  assert (current_item.value === i);
  assert (current_item.done === false);
  array.pop();
}

assert ([].keys ().toString () === "[object Array Iterator]");
