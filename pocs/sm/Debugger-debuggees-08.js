var dbg = new Debugger;
var g = newGlobal({newCompartment: true});
var w = dbg.addDebuggee(g);
print(w instanceof Debugger.Object, true);

function usual() {
    print(dbg.hasDebuggee(g), true);
    print(dbg.hasDebuggee(w), true);
    var arr = dbg.getDebuggees();
    print(arr.length, 1);
    print(arr[0], w);
}

usual();
print(dbg.addDebuggee(g), w);
usual();
print(dbg.addDebuggee(w), w);
usual();


print(dbg.removeDebuggee(g), undefined);
print(dbg.hasDebuggee(g), false);
print(dbg.getDebuggees().length, 0);
