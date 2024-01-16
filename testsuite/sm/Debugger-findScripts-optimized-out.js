



load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
g.eval(`
function enclosing() {
    (function g1() {});
    (function* g2() {});
    (async function g3() {});
    (async function* g4() {});
    () => {};
    async () => {};
}
`);

for (const s of dbg.findScripts()) {
    if (!s.displayName) {
        continue;
    }

    try {
        s.lineCount;  
    } catch (exc) {
        
        assertEq(exc.message, "function is optimized out");
    }
}
