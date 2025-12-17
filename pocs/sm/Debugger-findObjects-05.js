var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
dbg.addDebuggee(g);

let objects = dbg.findObjects();
let set = new Set(objects);

print(objects.length, set.size);
