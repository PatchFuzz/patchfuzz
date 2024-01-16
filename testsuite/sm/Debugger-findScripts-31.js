




var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval(`
var a = x => (x + 1
);
`);

gc();
gc();

let url = thisFilename();

assertEq(dbg.findScripts({url, line: 3}).length, 1);
assertEq(dbg.findScripts({url, line: 4}).length, 0);
