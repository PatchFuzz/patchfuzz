

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
    e.prototype.indexOf.call (undefined);
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }

  var index = e.indexOf(0);
  assert(index === 0);
  assert(e[index] === 0);

  
  assert(e.indexOf(0, 1) === 4);
  assert(e.indexOf(0, 5) === -1);
  assert(e.indexOf(3, -2) === -1);
  assert(e.indexOf(5, -6) === 5);
  assert(e.indexOf(2, -2) === -1);

  
  assert(e.indexOf() === -1);

  
  assert(e.indexOf("foo") === -1);
  assert(e.indexOf(3, "foo") === 3);

  
  assert(e.indexOf(0, NaN) === 0);
  assert(e.indexOf(0, Infinity) === -1);
  assert(e.indexOf(3, -Infinity) === 3);

  
  e.set([1, 2]);

  assert(e.indexOf(2, undefined) === 1);
  assert(e.indexOf(2) === 1);

  
  e.set([11, 22, 33, 44]);

  assert(e.indexOf(44, 5) === -1);

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
    e.indexOf(1, fromIndex);
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
  assert(e.indexOf(0) === -1);
});
