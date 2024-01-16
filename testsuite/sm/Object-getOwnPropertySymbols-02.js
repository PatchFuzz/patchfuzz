

var g = newGlobal({newCompartment: true});
var dbg = Debugger();
var gobj = dbg.addDebuggee(g);
g.p = {xyzzy: 8};  
var sym = Symbol("plugh");
g.p[sym] = 9;
var wp = gobj.getOwnPropertyDescriptor("p").value;
var names = wp.getOwnPropertySymbols();
assertEq(names.length, 1);
assertEq(names[0], sym);
