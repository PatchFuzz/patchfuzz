;

function test() {
  print(() => { ctypes.void_t(); },
                         "cannot construct from void_t");
  print(() => { ctypes.CType(); },
                         "cannot construct from abstract type");
}

if (typeof ctypes === "object")
  test();
