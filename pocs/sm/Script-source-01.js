let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

let count = 0;
dbg.onNewScript = function (script) {
    print(typeof script.source, "object");
    function traverse(script) {
        ++count;
        script.getChildScripts().forEach(function (child) {
            print(child.source, script.source);
            traverse(child);
        });
    }
    traverse(script);
}

g.eval("2 * 3");
g.eval("function f() {}");
g.eval("function f() { function g() {} }");
g.eval("eval('2 * 3')");
g.eval("new Function('2 * 3')");
print(count, 10);
