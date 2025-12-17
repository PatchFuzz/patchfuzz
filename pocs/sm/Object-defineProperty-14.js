;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

gw.defineProperty("p", {get: undefined, set: undefined});

var desc = g.eval("Object.getOwnPropertyDescriptor(this, 'p')");
print("get" in desc, true);
print("set" in desc, true);
print(desc.get, undefined);
print(desc.set, undefined);
