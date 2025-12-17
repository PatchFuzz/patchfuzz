var g = newGlobal({newCompartment: true});

var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval('this.re = /foo/;');
g.eval('this.d = new Date();');

var rew = gw.makeDebuggeeValue(g.re);
var dw = gw.makeDebuggeeValue(g.d);

var objects;

objects = dbg.findObjects({ class: "RegExp" });
print(objects.indexOf(rew) != -1, true);
print(objects.indexOf(dw) == -1, true);

objects = dbg.findObjects({ class: "Date" });
print(objects.indexOf(dw) != -1, true);
print(objects.indexOf(rew) == -1, true);
