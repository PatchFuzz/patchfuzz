


var g = newGlobal({newCompartment: true});

g.eval("function f(){} 
g.eval("function g(){} 
g.eval("function h(){}");

var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var fw = gw.makeDebuggeeValue(g.f);
var ggw = gw.makeDebuggeeValue(g.g);
var hw = gw.makeDebuggeeValue(g.h);

var fScripts = dbg.findScripts({ displayURL: "f.js" });
assertEq(fScripts.indexOf(fw.script) != -1, true);
assertEq(fScripts.indexOf(ggw.script), -1);
assertEq(fScripts.indexOf(hw.script), -1);


fScripts = dbg.findScripts({ displayURL: "f.js",
                             line: 1 });
assertEq(fScripts.indexOf(fw.script) != -1, true);
assertEq(fScripts.indexOf(ggw.script), -1);
assertEq(fScripts.indexOf(hw.script), -1);

var gScripts = dbg.findScripts({ displayURL: "g.js" });
assertEq(gScripts.indexOf(ggw.script) != -1, true);
assertEq(gScripts.indexOf(fw.script), -1);
assertEq(gScripts.indexOf(hw.script), -1);

var allScripts = dbg.findScripts();
assertEq(allScripts.indexOf(fw.script) != -1, true);
assertEq(allScripts.indexOf(ggw.script) != -1, true);
assertEq(allScripts.indexOf(hw.script) != -1, true);

try {
  dbg.findScripts({ displayURL: 3 });
  
  
  assertEq(true, false);
} catch(e) {
  assertEq(e.name, "TypeError");
  assertEq(e.message.includes("displayURL"), true);
}
