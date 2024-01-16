

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
for (var fileName of ['file:/
    g.evaluate("function f(x) { return 2*x; }", {fileName: fileName});
    var fw = gw.getOwnPropertyDescriptor('f').value;
    assertEq(fw.script.source.url, fileName);
}
