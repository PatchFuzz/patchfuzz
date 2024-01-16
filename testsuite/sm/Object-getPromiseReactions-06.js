


var dbg = new Debugger;

var g1 = newGlobal({ newCompartment: true });
var DOg1 = dbg.addDebuggee(g1);

var g2 = newGlobal({ newCompartment: true });
var DOg2 = dbg.addDebuggee(g2);

g1.eval(`
    var pResolve, pReject;
    var p = new Promise((resolve, reject) => { pResolve = resolve; pReject = reject });
`);

g2.p = g1.p;
g2.eval(`
    var p2 = new Promise((resolve, reject) => { resolve(p); });
`);

const DOp = DOg1.makeDebuggeeValue(g1.p);
const DOp2 = DOg2.makeDebuggeeValue(g2.p2);



drainJobQueue();

const reactions = DOp.getPromiseReactions();
assertEq(true, Array.isArray(reactions));
assertEq(reactions.length, 1);
assertEq(typeof reactions[0], "object");
assertEq(true, reactions[0].resolve instanceof Debugger.Object);
assertEq(true, reactions[0].resolve.callable);
assertEq(true, reactions[0].reject instanceof Debugger.Object);
assertEq(true, reactions[0].reject.callable);




assertEq(true, reactions[0].result instanceof Debugger.Object);
assertEq(reactions[0].result.class, "Promise");
assertEq(true, reactions[0].result !== DOp2);
