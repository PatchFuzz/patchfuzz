var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);


assertEq(gw.executeInGlobal(`let x = 42; x;`).return, 42);
assertEq(gw.executeInGlobal(`x;`).return, 42);



dbg.onDebuggerStatement = function (frame) { frame.eval(`let y = 84;`); };
g.eval(`debugger;`);
assertEq(!!gw.executeInGlobal(`y;`).throw, true);
