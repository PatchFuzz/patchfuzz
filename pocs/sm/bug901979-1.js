;

var global = this;
var status = "pass";
var handler = {
  get: function get(t, pk, r) { status = "FAIL get"; },
  has: function has(t, pk) { status = "FAIL has"; }
};

if (globalPrototypeChainIsMutable())
  Object.prototype.__proto__ = new Proxy(Object.create(null), handler);

Map;
print(status, "pass");
