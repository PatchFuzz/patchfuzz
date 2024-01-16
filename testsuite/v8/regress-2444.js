



























var flags;

function resetFlags(size) {
  flags = Array(size);
  while (size--) flags[size] = 0;
}

function assertFlags(array) {
  assertArrayEquals(array, flags);
}

function object_factory(flag_index, value, expected_flags) {
  var obj = {};
  obj.valueOf = function() {
    assertFlags(expected_flags);
    flags[flag_index]++;
    return value;
  }
  return obj;
}


assertEquals(-Infinity, Math.max());

resetFlags(1);
assertEquals(NaN,
             Math.max(object_factory(0, NaN, [0])));
assertFlags([1]);

resetFlags(2);
assertEquals(NaN,
             Math.max(object_factory(0, NaN, [0, 0]),
                      object_factory(1,   0, [1, 0])));
assertFlags([1, 1]);

resetFlags(3);
assertEquals(NaN,
             Math.max(object_factory(0, NaN, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2,   1, [1, 1, 0])));
assertFlags([1, 1, 1]);

resetFlags(3);
assertEquals(NaN,
             Math.max(object_factory(0,   2, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2, NaN, [1, 1, 0])));
assertFlags([1, 1, 1]);

resetFlags(3);
assertEquals(2,
             Math.max(object_factory(0,   2, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2,   1, [1, 1, 0])));
assertFlags([1, 1, 1]);


assertEquals(+Infinity, Math.min());

resetFlags(1);
assertEquals(NaN,
             Math.min(object_factory(0, NaN, [0])));
assertFlags([1]);

resetFlags(2);
assertEquals(NaN,
             Math.min(object_factory(0, NaN, [0, 0]),
                      object_factory(1,   0, [1, 0])));
assertFlags([1, 1]);

resetFlags(3);
assertEquals(NaN,
             Math.min(object_factory(0, NaN, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2,   1, [1, 1, 0])));
assertFlags([1, 1, 1]);

resetFlags(3);
assertEquals(NaN,
             Math.min(object_factory(0,   2, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2, NaN, [1, 1, 0])));
assertFlags([1, 1, 1]);

resetFlags(3);
assertEquals(0,
             Math.min(object_factory(0,   2, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2,   1, [1, 1, 0])));
assertFlags([1, 1, 1]);
