;

function test() {
  print(() => { ctypes.FunctionType(); },
                         "FunctionType takes two or three arguments");
  print(() => { ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr({}, 1); },
                         "FunctionType constructor takes one argument");
}

if (typeof ctypes === "object")
  test();
