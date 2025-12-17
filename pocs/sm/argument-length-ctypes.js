;

function test() {
  print(() => { ctypes.cast(); },
                         "ctypes.cast takes two arguments");
  print(() => { ctypes.getRuntime(); },
                         "ctypes.getRuntime takes one argument");
}

if (typeof ctypes === "object")
  test();
