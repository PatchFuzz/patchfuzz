var g = newGlobal({newCompartment: true});

let defObject = v => g.eval(`this.${v} = { toString: () => "[object ${v}]" }`);
defObject("a");
defObject("b");
defObject("c");

var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var aw = gw.makeDebuggeeValue(g.a);
var bw = gw.makeDebuggeeValue(g.b);
var cw = gw.makeDebuggeeValue(g.c);

print(dbg.findObjects().indexOf(aw) != -1, true);
print(dbg.findObjects().indexOf(bw) != -1, true);
print(dbg.findObjects().indexOf(cw) != -1, true);
