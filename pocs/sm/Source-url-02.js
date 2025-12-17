var g = newGlobal({newCompartment: true});
g.eval('var double = Function("x", "return 2*x;");');

var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

var fw = gw.getOwnPropertyDescriptor('double').value;
print(fw.script.source.url);
print(!!fw.script.source.url.match(/Source-url-02.js .* > Function/), true);
