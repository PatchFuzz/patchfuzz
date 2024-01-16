
let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

var count = 0;
dbg.onNewScript = function (script) {
    var text = script.source.text;
    assertEq(typeof text, "string");
    function traverse(script) {
        ++count;
        script.getChildScripts().forEach(function (script) {
            assertEq(script.source.text, text);
            traverse(script);
        });
    };
    traverse(script);
}

g.eval("2 * 3");
g.eval("function f() {}");
g.eval("function f() { function g() {} }");
assertEq(count, 6);
