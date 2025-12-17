;

function test() {
  let fin = ctypes.CDataFinalizer(ctypes.int32_t(0), ctypes.FunctionType(ctypes.default_abi, ctypes.int32_t, [ctypes.int32_t]).ptr(x => x));
  if (fin.toSource) {
    print(() => { fin.toSource.call(1); },
                           "CDataFinalizer.prototype.toSource called on incompatible object, got the number 1");
  }
  print(() => { fin.toString.call(1); },
                         "CDataFinalizer.prototype.toString called on incompatible object, got the number 1");
  print(() => { fin.forget.call(1); },
                         "CDataFinalizer.prototype.forget called on incompatible object, got the number 1");
  print(() => { fin.dispose.call(1); },
                         "CDataFinalizer.prototype.dispose called on incompatible object, got the number 1");
  fin.forget();

  print(() => { fin.readString(); },
                         "CDataFinalizer.prototype.readString called on empty CDataFinalizer");
  print(() => { fin.dispose(); },
                         "CDataFinalizer.prototype.dispose called on empty CDataFinalizer");
  print(() => { fin.forget(); },
                         "CDataFinalizer.prototype.forget called on empty CDataFinalizer");
}

if (typeof ctypes === "object")
  test();
