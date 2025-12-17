var flags;

function resetFlags(size) {
  flags = Array(size);
  while (size--) flags[size] = 0;
}

function print(array) {
  print(array, flags);
}

function object_factory(flag_index, value, expected_flags) {
  var obj = {};
  obj.valueOf = function() {
    print(expected_flags);
    flags[flag_index]++;
    return value;
  }
  return obj;
}


print(-Infinity, Math.max());

resetFlags(1);
print(NaN,
             Math.max(object_factory(0, NaN, [0])));
print([1]);

resetFlags(2);
print(NaN,
             Math.max(object_factory(0, NaN, [0, 0]),
                      object_factory(1,   0, [1, 0])));
print([1, 1]);

resetFlags(3);
print(NaN,
             Math.max(object_factory(0, NaN, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2,   1, [1, 1, 0])));
print([1, 1, 1]);

resetFlags(3);
print(NaN,
             Math.max(object_factory(0,   2, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2, NaN, [1, 1, 0])));
print([1, 1, 1]);

resetFlags(3);
print(2,
             Math.max(object_factory(0,   2, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2,   1, [1, 1, 0])));
print([1, 1, 1]);


print(+Infinity, Math.min());

resetFlags(1);
print(NaN,
             Math.min(object_factory(0, NaN, [0])));
print([1]);

resetFlags(2);
print(NaN,
             Math.min(object_factory(0, NaN, [0, 0]),
                      object_factory(1,   0, [1, 0])));
print([1, 1]);

resetFlags(3);
print(NaN,
             Math.min(object_factory(0, NaN, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2,   1, [1, 1, 0])));
print([1, 1, 1]);

resetFlags(3);
print(NaN,
             Math.min(object_factory(0,   2, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2, NaN, [1, 1, 0])));
print([1, 1, 1]);

resetFlags(3);
print(0,
             Math.min(object_factory(0,   2, [0, 0, 0]),
                      object_factory(1,   0, [1, 0, 0]),
                      object_factory(2,   1, [1, 1, 0])));
print([1, 1, 1]);
