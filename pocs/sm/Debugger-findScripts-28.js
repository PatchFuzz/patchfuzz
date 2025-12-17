var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval(`
function f() {
    function inner() {
        var x;
    }
    function asm_mod() {
        "use asm";
        function mtd() {}
        return { mtd: mtd }
    }
}
`);

gc();
gc();

let url = thisFilename();
let line = 4;


print(dbg.findScripts({url, line}).length, 2);
