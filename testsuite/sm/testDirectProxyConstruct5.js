load(libdir + "asserts.js");



var handler = {};
var p = new Proxy(Math.sin, handler);
var r = Proxy.revocable(Math.sin, handler).proxy;

assertThrowsInstanceOf(() => new p, TypeError, "Can't use 'new' on proxy with non-constructor target");
assertThrowsInstanceOf(() => new r, TypeError, "Can't use 'new' on proxy with non-constructor target");

handler.construct = (() => ({}));
assertThrowsInstanceOf(() => new p, TypeError, "Can't use 'new' on proxy with non-constructor target");
assertThrowsInstanceOf(() => new r, TypeError, "Can't use 'new' on proxy with non-constructor target");
