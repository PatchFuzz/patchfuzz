function x() {
  let obj = { foo: "bar" };
  obj.toJSON = 42;
  obj.__proto__ = new Proxy([], {});
  print(%HasFastProperties(obj));
  return obj;
}
print("[object Object]", toString.call(x()));

function y() {
  let obj = { foo: "bar" };
  Object.defineProperty(obj, "foo", {
    get: function () {}
  });
  obj.toJSON = 42;
  obj.__proto__ = new Proxy([], {});
  print(%HasFastProperties(obj));
  return obj;
}
print("[object Object]", toString.call(y()));
