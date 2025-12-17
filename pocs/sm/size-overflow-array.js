;

function test() {
  if (getBuildConfiguration("pointer-byte-size") == 4) {
    let big_array = ctypes.int32_t.array(0xfffffff);
    print(() => { big_array.array(0xfffffff); },
                            "array size does not fit in size_t");
  } else if (getBuildConfiguration("pointer-byte-size") == 8) {
    let big_array = ctypes.int32_t.array(0xfffffff);
    print(() => { big_array.array(0xfffffff); },
                            "array size does not fit in JavaScript number");
    print(() => { big_array.array(0xfffffffff); },
                            "array size does not fit in size_t");
  }
}

if (typeof ctypes === "object")
  test();
