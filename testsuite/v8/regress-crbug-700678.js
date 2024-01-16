



(function testNonConfigurableProperty() {
  function ownKeys(x) { return ["23", "length"]; }
  var target = [];
  var proxy = new Proxy(target, {ownKeys:ownKeys});
  Object.defineProperty(target, "23", {value:true});
  assertEquals(["23", "length"], Object.getOwnPropertyNames(proxy));
})();

(function testPreventedExtension() {
  function ownKeys(x) { return ["42", "length"]; }
  var target = [];
  var proxy = new Proxy(target, {ownKeys:ownKeys});
  target[42] = true;
  Object.preventExtensions(target);
  assertEquals(["42", "length"], Object.getOwnPropertyNames(proxy));
})();
