;

function test() {
  print(() => { ctypes.int32_t.array({}); },
                         "argument of CType.prototype.array must be a nonnegative integer");
  print(() => { ctypes.ArrayType(1); },
                         "first argument of ArrayType must be a CType");
  print(() => { ctypes.ArrayType(ctypes.int32_t, {}); },
                         "second argument of ArrayType must be a nonnegative integer");
  print(() => { ctypes.char.array()({}); },
                         "argument of size undefined ArrayType constructor must be an array object or integer");
  print(() => { ctypes.char.array()(false); },
                         "argument of size undefined ArrayType constructor must be an array object or integer");
}

if (typeof ctypes === "object")
  test();
