var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

print(gw.executeInGlobal("(42).toString(0)").throw.errorMessageName, "JSMSG_BAD_RADIX");


print(gw.executeInGlobal("throw new Error()").throw.errorMessageName, undefined);


g.eval(`var g = newGlobal({newCompartment: true});
        g.eval('var err; try { (42).toString(0); } catch (e) { err = e; }');
        var err2 = g.err;`);
print(gw.executeInGlobal("throw err2").throw.errorMessageName, "JSMSG_BAD_RADIX");


const Args = [
    "1",
    "'blah'",
    "({})",
    "[]",
    "() => 1"
]

for (let arg of Args)
    print(gw.executeInGlobal(`${arg}`).return.errorMessageName, undefined);
