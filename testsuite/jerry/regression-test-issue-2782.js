













var arrayLikeObj = { "0" : 0, "1" : 1, "2" : 2, "length": 3 }

iterator = Array.prototype.keys.call (arrayLikeObj);

for (var i = 0; i < arrayLikeObj.length; i++) {
  var next = iterator.next ();
  assert (next.value === i && next.done === false);
}

next = iterator.next ();
assert (next.done === true);
