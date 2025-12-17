;

var global = newGlobal({newCompartment: true})
var fun = global.eval("(function() {})")
var p = new Proxy(fun, {})


print(isConstructor(p), true);
print(typeof p, "function");
nukeCCW(fun);
print(isConstructor(p), true);
print(typeof p, "function");



print(() => { p(); }, TypeError);
print(() => { new p(); }, TypeError);
