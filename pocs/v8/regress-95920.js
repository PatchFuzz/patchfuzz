Object.preventExtensions(new Int8Array(42));
print(function() {
  Object.seal(new Int8Array(42));
}, TypeError);


Object.freeze(new Int8Array(0));

var o = new Int8Array(42);
print(function() {
  Object.freeze(o);
  print();
  }, TypeError);


print(Object.isExtensible(o));

print(function() {
    Object.defineProperty(new Int8Array(42), "1",
                          { writable: false, value: "1" });
    print();
  });
