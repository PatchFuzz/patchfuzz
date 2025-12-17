;
;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger;
var DOg = dbg.addDebuggee(g);

print(() => DOg.getPromiseReactions(), TypeError);


g.eval(`var p = Promise.resolve();`);
var DOgp = DOg.makeDebuggeeValue(g.p);
print(true, arraysEqual(DOgp.getPromiseReactions(), []));




var g2 = newGlobal({ newCompartment: true });
DOg2 = dbg.addDebuggee(g2);
var DOg2gp = DOg2.makeDebuggeeValue(g.p);
print(DOgp, DOg2gp.unwrap());
print(true, arraysEqual(DOg2gp.getPromiseReactions(), []));
