





var g = newGlobal();
var dbg1 = new Debugger;
var gw1 = dbg1.addDebuggee(g);
var dbg2 = new Debugger;
var gw2 = dbg2.addDebuggee((gw1.__proto__));
