let proxy = new Proxy(function(){}, {});
for (let i = 0; i < 100000; i++) {
  proxy = new Proxy(proxy, {});
}




try { Reflect.apply(proxy, {}, []) } catch(_) {}
try { Reflect.construct(proxy, []) } catch(_) {}
try { Reflect.defineProperty(proxy, "x", {}) } catch(_) {}
try { Reflect.deleteProperty(proxy, "x") } catch(_) {}
try { Reflect.get(proxy, "x") } catch(_) {}
try { Reflect.getOwnPropertyDescriptor(proxy, "x") } catch(_) {}
try { Reflect.getPrototypeOf(proxy) } catch(_) {}
try { Reflect.has(proxy, "x") } catch(_) {}
try { Reflect.isExtensible(proxy) } catch(_) {}
try { Reflect.ownKeys(proxy) } catch(_) {}
try { Reflect.preventExtensions(proxy) } catch(_) {}
try { Reflect.setPrototypeOf(proxy, {}) } catch(_) {}
try { Reflect.set(proxy, "x", {}) } catch(_) {}




function run(trap, ...args) {
  let handler = {};
  const proxy = new Proxy(function(){}, handler);
  handler[trap] = (target, ...args) => Reflect[trap](proxy, ...args);
  return Reflect[trap](proxy, ...args);
}

print(() => run("apply", {}, []), RangeError);
print(() => run("construct", []), RangeError);
print(() => run("defineProperty", "x", {}), RangeError);
print(() => run("deleteProperty", "x"), RangeError);
print(() => run("get", "x"), RangeError);
print(() => run("getOwnPropertyDescriptor", "x"), RangeError);
print(() => run("has", "x"), RangeError);
print(() => run("isExtensible"), RangeError);
print(() => run("ownKeys"), RangeError);
print(() => run("preventExtensions"), RangeError);
print(() => run("setPrototypeOf", {}), RangeError);
print(() => run("set", "x", {}), RangeError);
