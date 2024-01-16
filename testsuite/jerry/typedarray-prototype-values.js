













var normal_typedarrays = [
  new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]),
  new Uint16Array([1, 2, 3, 4, 5, 6, 7, 8]),
  new Uint32Array([1, 2, 3, 4, 5, 6, 7, 8]),
  new Float32Array([1, 2, 3, 4, 5, 6, 7, 8]),
  new Float64Array([1, 2, 3, 4, 5, 6, 7, 8]),
  new Int8Array([1, 2, 3, 4, 5, 6, 7, 8]),
  new Int16Array([1, 2, 3, 4, 5, 6, 7, 8]),
  new Int32Array([1, 2, 3, 4, 5, 6, 7, 8])
];

normal_typedarrays.forEach (function(e){
  try {
    e.prototype.values.call (undefined);
    assert (false);
  }
  catch (e) {
    assert (e instanceof TypeError)
  }
});

normal_typedarrays.forEach(function (e){
  var iterator = e.values ();
  var symbol_iterator = e[Symbol.iterator] ();

  var current_item = iterator.next ();
  var symbol_current_item = symbol_iterator.next ();

  for (var i = 0; i < e.length; i++) {
    assert (current_item.value === e[i]);
    assert (current_item.done === false);

    assert (current_item.value === symbol_current_item.value);
    assert (current_item.done === symbol_current_item.done);

    current_item = iterator.next ();
    symbol_current_item = symbol_iterator.next ();
  }

  assert (current_item.value === undefined);
  assert (current_item.done === true);
  assert (current_item.value === symbol_current_item.value);
  assert (current_item.done === symbol_current_item.done)
});

var empty_typedarrays = [
  new Uint8Array([]),
  new Uint16Array([]),
  new Uint32Array([]),
  new Float32Array([]),
  new Float64Array([]),
  new Int8Array([]),
  new Int16Array([]),
  new Int32Array([])
];

empty_typedarrays.forEach(function (e){
  iterator = e.values ();
  current_item = iterator.next ();

  assert (current_item.value === undefined);
  assert (current_item.done === true);
});

assert ([].values ().toString () === "[object Array Iterator]");
