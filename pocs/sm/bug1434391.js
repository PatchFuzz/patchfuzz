var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
oomTest(function () {
    print(gw.executeInGlobal("(42).toString(0)").throw.errorMessageName, "JSMSG_BAD_RADIX");
});
