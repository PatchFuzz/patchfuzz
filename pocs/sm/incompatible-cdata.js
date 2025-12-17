;

function test() {
  print(() => { ctypes.int32_t(0).address.call(1); },
                         "CData.prototype.address called on incompatible object, got the number 1");
  print(() => { ctypes.char.array(10)("abc").readString.call(1); },
                         "CData.prototype.readString called on incompatible object, got the number 1");

  print(() => { ctypes.char.array(10)("abc").readStringReplaceMalformed.call(1); },
                         "CData.prototype.readStringReplaceMalformed called on incompatible object, got the number 1");

  if (ctypes.int32_t.prototype.toSource) {
    print(() => { ctypes.int32_t(0).toSource.call(1); },
                           "CData.prototype.toSource called on incompatible object, got the number 1");
  }

  let p = Object.getPrototypeOf(ctypes.int32_t());
  let o = {};
  Object.setPrototypeOf(o, p);
  print(() => { o.readString(); },
                         "CData.prototype.readString called on incompatible object, got <<error converting value to string>>");
  print(() => { o.readStringReplaceMalformed(); },
                         "CData.prototype.readStringReplaceMalformed called on incompatible object, got <<error converting value to string>>");
}

if (typeof ctypes === "object")
  test();
