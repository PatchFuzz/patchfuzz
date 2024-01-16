
var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval(`
function f() {
    function inner() {
        var x;
    }
}
`);


gc();
gc();

let url = thisFilename();
let line = 4;


assertEq(dbg.findScripts({url, line}).length, 2);
