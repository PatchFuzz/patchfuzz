













var normal_typedarrays = [
  new Uint8Array([0, 1, 2, 3, 0, 5, 6]),
  new Uint16Array([0, 1, 2, 3, 0, 5, 6]),
  new Uint32Array([0, 1, 2, 3, 0, 5, 6]),
  new Float32Array([0, 1, 2, 3, 0, 5, 6]),
  new Float64Array([0, 1, 2, 3, 0, 5, 6]),
  new Int8Array([0, 1, 2, 3, 0, 5, 6]),
  new Int16Array([0, 1, 2, 3, 0, 5, 6]),
  new Int32Array([0, 1, 2, 3, 0, 5, 6])
];

normal_typedarrays.forEach(function(e){
  try{
    e.prototype.lastIndexOf.call (undefined);
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }

  var index = e.lastIndexOf(0);
  assert(index === 4);
  assert(e[index] === 0);

  
  assert(e.lastIndexOf(0, 3) === 0);
  assert(e.lastIndexOf(0, -8) === -1);
  assert(e.lastIndexOf(2) === 2);
  assert(e.lastIndexOf(5, 3) === -1);
  assert(e.lastIndexOf(3, 6) === 3);

  
  assert(e.lastIndexOf() === -1);

  
  assert(e.lastIndexOf("foo") === -1);
  assert(e.lastIndexOf(0, "foo") === 0);

  
  assert(e.lastIndexOf(0, NaN) === 0);
  assert(e.lastIndexOf(0, Infinity) === 4);
  assert(e.lastIndexOf(0, -Infinity) === -1);

  
  e.set([1, 2]);

  assert(e.lastIndexOf(2, undefined) === -1);
  assert(e.lastIndexOf(2) === 2);

  
  e.set([11, 22, 33, 44]);

  assert(e.lastIndexOf(44, 8) === 3);

  var fromIndex = {
    toString: function () {
      return {};
    },

    valueOf: function () {
      return {};
    }
  };

  e.set([0, 1]);

  try {
    e.lastIndexOf(1, fromIndex);
    assert(false);
  } catch (e) {
    assert(e instanceof TypeError);
  }
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

empty_typedarrays.forEach(function(e){
  assert(e.lastIndexOf(0) === -1);
});
