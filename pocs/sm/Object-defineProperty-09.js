var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
gw.defineProperty("p", {value: 1});
g.p = 4;
print(g.p, 1);

var threw;
try {
    gw.defineProperty("p", {value: 2});
    threw = false;
} catch (exc) {
    threw = true;
    print(exc instanceof TypeError, true);
    print(typeof exc.message, "string");
    print(typeof exc.stack, "string");
}
print(threw, true);

print(g.p, 1);
