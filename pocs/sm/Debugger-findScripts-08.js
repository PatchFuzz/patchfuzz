var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
var g3 = newGlobal({newCompartment: true});


g1.eval('function g1f() {}');
g2.eval('function g2f() {}');


url2 = scriptdir + "Debugger-findScripts-08-script2";
;

var dbg = new Debugger();
var g1w = dbg.addDebuggee(g1);
var g2w = dbg.addDebuggee(g2);
var g3w = dbg.addDebuggee(g3);

var g1fw = g1w.makeDebuggeeValue(g1.g1f);
var g1gw = g1w.makeDebuggeeValue(g1.g1g);
var g2fw = g2w.makeDebuggeeValue(g2.g2f);
var g2gw = g2w.makeDebuggeeValue(g2.g2g);


url = g1fw.script.url;

var scripts;

scripts = dbg.findScripts({});
print(scripts.indexOf(g1fw.script) != -1, true);
print(scripts.indexOf(g1gw.script) != -1, true);
print(scripts.indexOf(g2fw.script) != -1, true);
print(scripts.indexOf(g2gw.script) != -1, true);

scripts = dbg.findScripts({url:url});
print(scripts.indexOf(g1fw.script) != -1, true);
print(scripts.indexOf(g1gw.script) != -1, false);
print(scripts.indexOf(g2fw.script) != -1, true);
print(scripts.indexOf(g2gw.script) != -1, false);

scripts = dbg.findScripts({url:url2});
print(scripts.indexOf(g1fw.script) != -1, false);
print(scripts.indexOf(g1gw.script) != -1, true);
print(scripts.indexOf(g2fw.script) != -1, false);
print(scripts.indexOf(g2gw.script) != -1, true);

scripts = dbg.findScripts({url:url, global:g1});
print(scripts.indexOf(g1fw.script) != -1, true);
print(scripts.indexOf(g1gw.script) != -1, false);
print(scripts.indexOf(g2fw.script) != -1, false);
print(scripts.indexOf(g2gw.script) != -1, false);

scripts = dbg.findScripts({url:url2, global:g1});
print(scripts.indexOf(g1fw.script) != -1, false);
print(scripts.indexOf(g1gw.script) != -1, true);
print(scripts.indexOf(g2fw.script) != -1, false);
print(scripts.indexOf(g2gw.script) != -1, false);

scripts = dbg.findScripts({url:url, global:g2});
print(scripts.indexOf(g1fw.script) != -1, false);
print(scripts.indexOf(g1gw.script) != -1, false);
print(scripts.indexOf(g2fw.script) != -1, true);
print(scripts.indexOf(g2gw.script) != -1, false);

scripts = dbg.findScripts({url:url2, global:g2});
print(scripts.indexOf(g1fw.script) != -1, false);
print(scripts.indexOf(g1gw.script) != -1, false);
print(scripts.indexOf(g2fw.script) != -1, false);
print(scripts.indexOf(g2gw.script) != -1, true);

scripts = dbg.findScripts({url:"xlerb"}); 
print(scripts.indexOf(g1fw.script) != -1, false);
print(scripts.indexOf(g1gw.script) != -1, false);
print(scripts.indexOf(g2fw.script) != -1, false);
print(scripts.indexOf(g2gw.script) != -1, false);

scripts = dbg.findScripts({url:url, global:g3});
print(scripts.indexOf(g1fw.script) != -1, false);
print(scripts.indexOf(g1gw.script) != -1, false);
print(scripts.indexOf(g2fw.script) != -1, false);
print(scripts.indexOf(g2gw.script) != -1, false);
