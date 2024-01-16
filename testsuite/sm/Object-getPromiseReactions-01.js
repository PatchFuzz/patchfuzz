


load(libdir + 'asserts.js');
load(libdir + 'array-compare.js');

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger;
var DOg = dbg.addDebuggee(g);

assertThrowsInstanceOf(() => DOg.getPromiseReactions(), TypeError);


g.eval(`var p = Promise.resolve();`);
var DOgp = DOg.makeDebuggeeValue(g.p);
assertEq(true, arraysEqual(DOgp.getPromiseReactions(), []));




var g2 = newGlobal({ newCompartment: true });
DOg2 = dbg.addDebuggee(g2);
var DOg2gp = DOg2.makeDebuggeeValue(g.p);
assertEq(DOgp, DOg2gp.unwrap());
assertEq(true, arraysEqual(DOg2gp.getPromiseReactions(), []));
