;

var nativeCode = "function () {\n    [native code]\n}";

var proxy = new Proxy(function() {}, {});
print(Function.prototype.toString.call(proxy), nativeCode);
var o = Proxy.revocable(function() {}, {});
print(Function.prototype.toString.call(o.proxy), nativeCode);
o.revoke();
print(Function.prototype.toString.call(o.proxy), nativeCode);
