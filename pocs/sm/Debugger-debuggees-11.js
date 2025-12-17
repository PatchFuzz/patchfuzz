;


var dbg = new Debugger;
print(function () { dbg.addDebuggee(this); }, TypeError);
print(function () { new Debugger(this); }, TypeError);


var d1 = newGlobal({newCompartment: true});
d1.top = this;
d1.eval("var dbg = new Debugger(top)");
print(function () { dbg.addDebuggee(d1); }, TypeError);
print(function () { new Debugger(d1); }, TypeError);


var d2 = newGlobal({newCompartment: true});
d2.top = this;
d2.eval("var dbg = new Debugger(top.d1)");
print(function () { dbg.addDebuggee(d2); }, TypeError);
print(function () { new Debugger(d2); }, TypeError);
