

var desc = Object.getOwnPropertyDescriptor(this, "Proxy");
assertEq(desc.configurable, true);
assertEq(desc.enumerable, false);
assertEq(desc.writable, true);
assertEq(desc.value, Proxy);

assertEq(typeof Proxy, "function");
assertEq(Object.getPrototypeOf(Proxy), Function.prototype);
assertEq(Proxy.length, 2);


assertEq(Proxy.hasOwnProperty("prototype"), false);
