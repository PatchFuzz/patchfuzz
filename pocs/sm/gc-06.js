var dbg = new Debugger;
for (var i = 0; i < 10; i++)
    dbg.addDebuggee(newGlobal({newCompartment: true}));
gc();
print(dbg.getDebuggees().length < 10, true);
