load(libdir + "asserts.js");

var global = newGlobal({newCompartment: true})
var fun = global.eval("(function() {})")
var p = new Proxy(fun, {})


assertEq(isConstructor(p), true);
assertEq(typeof p, "function");
nukeCCW(fun);
assertEq(isConstructor(p), true);
assertEq(typeof p, "function");



assertThrowsInstanceOf(() => { p(); }, TypeError);
assertThrowsInstanceOf(() => { new p(); }, TypeError);
