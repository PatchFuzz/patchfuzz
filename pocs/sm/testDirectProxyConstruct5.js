;



var handler = {};
var p = new Proxy(Math.sin, handler);
var r = Proxy.revocable(Math.sin, handler).proxy;

print(() => new p, TypeError, "Can't use 'new' on proxy with non-constructor target");
print(() => new r, TypeError, "Can't use 'new' on proxy with non-constructor target");

handler.construct = (() => ({}));
print(() => new p, TypeError, "Can't use 'new' on proxy with non-constructor target");
print(() => new r, TypeError, "Can't use 'new' on proxy with non-constructor target");
