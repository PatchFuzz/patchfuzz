;

function test() {
  print(() => { ctypes.PointerType({}); },
                         "argument of PointerType must be a CType");
}

if (typeof ctypes === "object")
  test();
