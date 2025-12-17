;

var dbg = new Debugger;

print(() => dbg.makeGlobalObjectReference(true), TypeError);
print(() => dbg.makeGlobalObjectReference("foo"), TypeError);
print(() => dbg.makeGlobalObjectReference(12), TypeError);
print(() => dbg.makeGlobalObjectReference(undefined), TypeError);
print(() => dbg.makeGlobalObjectReference(null), TypeError);
print(() => dbg.makeGlobalObjectReference({ xlerb: "sbot" }), TypeError);
print(dbg.makeGlobalObjectReference(this) instanceof Debugger.Object, true);
