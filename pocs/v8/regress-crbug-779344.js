var o = {};
var proxy = new Proxy(() => {}, o);
o.apply = proxy;
print(proxy);
