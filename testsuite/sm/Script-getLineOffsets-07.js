

var g = newGlobal({newCompartment: true});
var dbg = new Debugger();

g.eval("
       "\n" +
       "\n" +
       "function f(n) {\n" +     
       "    var foo = '!';\n" +
       "}");

dbg.addDebuggee(g);
var scripts = dbg.findScripts();
for (var i = 0; i < scripts.length; i++) {
  
  
  assertEq(scripts[i].getLineOffsets(9).length, 0);
}
