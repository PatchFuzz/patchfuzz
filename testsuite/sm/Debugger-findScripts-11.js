
var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

var scriptname = scriptdir + 'Debugger-findScripts-11-script2';
g.load(scriptname);

var gfw = gw.makeDebuggeeValue(g.f);
var ggw = gw.makeDebuggeeValue(g.f());
var ghw = gw.makeDebuggeeValue(g.h);


assertEq(dbg.findScripts({url:scriptname, line:3}).indexOf(gfw.script) != -1, false);
assertEq(dbg.findScripts({url:scriptname, line:3}).indexOf(ggw.script) != -1, false);
assertEq(dbg.findScripts({url:scriptname, line:3}).indexOf(ghw.script) != -1, false);


assertEq(dbg.findScripts({url:"xlerb", line:8}).indexOf(gfw.script) != -1, false);
assertEq(dbg.findScripts({url:"xlerb", line:8}).indexOf(ggw.script) != -1, false);
assertEq(dbg.findScripts({url:"xlerb", line:8}).indexOf(ghw.script) != -1, false);


assertEq(dbg.findScripts({url:scriptname, line:8}).indexOf(gfw.script) != -1, true);
assertEq(dbg.findScripts({url:scriptname, line:8}).indexOf(ggw.script) != -1, false);
assertEq(dbg.findScripts({url:scriptname, line:8}).indexOf(ghw.script) != -1, false);


assertEq(dbg.findScripts({url:scriptname, line:10}).indexOf(gfw.script) != -1, true);
assertEq(dbg.findScripts({url:scriptname, line:10}).indexOf(ggw.script) != -1, true);
assertEq(dbg.findScripts({url:scriptname, line:10}).indexOf(ghw.script) != -1, false);


assertEq(dbg.findScripts({url:scriptname, line:15}).indexOf(gfw.script) != -1, false);
assertEq(dbg.findScripts({url:scriptname, line:15}).indexOf(ggw.script) != -1, false);
assertEq(dbg.findScripts({url:scriptname, line:15}).indexOf(ghw.script) != -1, true);
