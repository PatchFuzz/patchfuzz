function bytecode(f) {
    if (typeof disassemble !== "function")
        return "unavailable";
    var d = disassemble(f);
    return d.slice(d.indexOf("main:"), d.indexOf("\n\n"));
}

function hasGname(f, v) {
    
    
    try {
        var b = bytecode(f);
        if (b != "unavailable") {
            print(b.includes(`GetGName "${v}"`), true);
            print(b.includes(`GetName "${v}"`), false);
        }
    } catch (e) {
        print(e.stack);
        throw e;
    }
}

var x = "outer";

var f1 = new Function("print(x, 'outer')");
f1();
hasGname(f1, 'x');

{
    let x = "inner";
    var f3 = new Function("print(x, 'outer')");
    f3();
    hasGname(f3, 'x');
}
