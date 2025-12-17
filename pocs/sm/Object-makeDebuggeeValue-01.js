var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval("var x = { 'now playing': 'Joy Division' };");
g.eval("var y = { 'mood': 'bleak' };");

wx = gw.makeDebuggeeValue(g.x);
print(wx, gw.makeDebuggeeValue(g.x));
print(wx === g.x, false);
print("now playing" in wx, false);
print(wx.getOwnPropertyNames().indexOf("now playing"), 0);
wx.commentary = "deconstruction";
print("deconstruction" in g.x, false);

wy = gw.makeDebuggeeValue(g.y);
print(wy === wx, false);
wy.commentary = "reconstruction";
print(wx.commentary, "deconstruction");



var dbg2 = new Debugger();
var gw2 = dbg2.addDebuggee(g);
w2x = gw2.makeDebuggeeValue(g.x);
print(wx === w2x, false);
w2x.defineProperty("breadcrumb", { value: "pumpernickel" });
print(wx.getOwnPropertyDescriptor("breadcrumb").value, "pumpernickel");


print(gw.makeDebuggeeValue("foonting turlingdromes"), "foonting turlingdromes");
print(gw.makeDebuggeeValue(true), true);
print(gw.makeDebuggeeValue(false), false);
print(gw.makeDebuggeeValue(null), null);
print(gw.makeDebuggeeValue(1729), 1729);
print(gw.makeDebuggeeValue(Math.PI), Math.PI);
print(gw.makeDebuggeeValue(undefined), undefined);
var s = g.eval("Symbol('Stavromula Beta')");
print(gw.makeDebuggeeValue(s), s);
