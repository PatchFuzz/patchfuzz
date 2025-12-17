;

function test() {
  print(() => { ctypes.Int64("0xfffffffffffffffffffffff"); },
                          "the string \"0xfffffffffffffffffffffff\" does not fit in the type int64");
  print(() => { ctypes.Int64.join("foo", 0); },
                         "can't pass the string \"foo\" to argument 1 of Int64.join");
  print(() => { ctypes.Int64.join(0, "foo"); },
                         "can't pass the string \"foo\" to argument 2 of Int64.join");

  print(() => { ctypes.UInt64("0xfffffffffffffffffffffff"); },
                          "the string \"0xfffffffffffffffffffffff\" does not fit in the type uint64");
  print(() => { ctypes.UInt64.join("foo", 0); },
                         "can't pass the string \"foo\" to argument 1 of UInt64.join");
  print(() => { ctypes.UInt64.join(0, "foo"); },
                         "can't pass the string \"foo\" to argument 2 of UInt64.join");
}

if (typeof ctypes === "object")
  test();
