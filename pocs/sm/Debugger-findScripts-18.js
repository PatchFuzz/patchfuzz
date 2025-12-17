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
print(fScripts.indexOf(fw.script) != -1, true);
print(fScripts.indexOf(ggw.script), -1);
print(fScripts.indexOf(hw.script), -1);


fScripts = dbg.findScripts({ displayURL: "f.js",
                             line: 1 });
print(fScripts.indexOf(fw.script) != -1, true);
print(fScripts.indexOf(ggw.script), -1);
print(fScripts.indexOf(hw.script), -1);

var gScripts = dbg.findScripts({ displayURL: "g.js" });
print(gScripts.indexOf(ggw.script) != -1, true);
print(gScripts.indexOf(fw.script), -1);
print(gScripts.indexOf(hw.script), -1);

var allScripts = dbg.findScripts();
print(allScripts.indexOf(fw.script) != -1, true);
print(allScripts.indexOf(ggw.script) != -1, true);
print(allScripts.indexOf(hw.script) != -1, true);

try {
  dbg.findScripts({ displayURL: 3 });
  
  
  print(true, false);
} catch(e) {
  print(e.name, "TypeError");
  print(e.message.includes("displayURL"), true);
}
