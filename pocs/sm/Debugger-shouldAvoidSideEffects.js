const g = newGlobal({newCompartment: true});
const dbg = Debugger(g);
const gdbg = dbg.addDebuggee(g);

gdbg.executeInGlobal(`
var obj, result, reachedNextLine;
`);

dbg.shouldAvoidSideEffects = false;
print(dbg.shouldAvoidSideEffects, false);

let result = gdbg.executeInGlobal(`
result = undefined;
reachedNextLine = false;

obj = createSideEffectfulResolveObject();
result = obj.test;
reachedNextLine = true;
"finished";
`);
print(g.result, 42);
print(g.reachedNextLine, true);
print(result.return, "finished");

dbg.shouldAvoidSideEffects = true;
print(dbg.shouldAvoidSideEffects, true);

result = gdbg.executeInGlobal(`
result = undefined;
reachedNextLine = false;

obj = createSideEffectfulResolveObject();
result = obj.test;
reachedNextLine = true;
"finished";
`);
print(g.result, undefined);
print(g.reachedNextLine, false);
print(result, null);


dbg.shouldAvoidSideEffects = false;
print(dbg.shouldAvoidSideEffects, false);

result = gdbg.executeInGlobal(`
result = undefined;
reachedNextLine = false;

result = obj.test;
reachedNextLine = true;
"finished";
`);
print(g.result, 42);
print(g.reachedNextLine, true);
print(result.return, "finished");
