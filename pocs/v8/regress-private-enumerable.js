class A {}
class B {}
Object.assign(B, A);
print("class B {}", B.toString());

(function() {
  function f(a, i, v) {
    a[i] = v;
  }

  f("make it generic", 0, 0);

  var o = {foo: "foo"};
  %OptimizeObjectForAddingMultipleProperties(o, 10);

  var s = %CreatePrivateSymbol("priv");
  f(o, s, "private");
  %ToFastProperties(o);

  var desc = Object.getOwnPropertyDescriptor(o, s);
  print("private", desc.value);
  print(desc.writable);
  print(desc.enumerable);
  print(desc.configurable);
})();
