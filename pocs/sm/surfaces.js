var desc = Object.getOwnPropertyDescriptor(this, "Proxy");
print(desc.configurable, true);
print(desc.enumerable, false);
print(desc.writable, true);
print(desc.value, Proxy);

print(typeof Proxy, "function");
print(Object.getPrototypeOf(Proxy), Function.prototype);
print(Proxy.length, 2);


print(Proxy.hasOwnProperty("prototype"), false);
