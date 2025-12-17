;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger;
var DOg = dbg.addDebuggee(g);

g.eval(`
    var pResolve, pReject;
    var p = new Promise((resolve, reject) => { pResolve = resolve; pReject = reject });
    var p2 = new Promise((resolve, reject) => { resolve(p); });
    var p3 = new Promise((resolve, reject) => { resolve(p); });
    var p4 = new Promise((resolve, reject) => { resolve(p2); });
`);

var [DOp, DOp2, DOp3, DOp4] = [g.p, g.p2, g.p3, g.p4].map(p => DOg.makeDebuggeeValue(p));



print(true, arraysEqual(DOp.getPromiseReactions(), []));
print(true, arraysEqual(DOp2.getPromiseReactions(), []));
print(true, arraysEqual(DOp3.getPromiseReactions(), []));
print(true, arraysEqual(DOp4.getPromiseReactions(), []));


drainJobQueue();

print(true, arraysEqual(DOp.getPromiseReactions(), [DOp2, DOp3]));
print(true, arraysEqual(DOp2.getPromiseReactions(), [DOp4]));
print(true, arraysEqual(DOp3.getPromiseReactions(), []));
print(true, arraysEqual(DOp4.getPromiseReactions(), []));



g.pResolve(42);

print(true, arraysEqual(DOp.getPromiseReactions(), []));
print(true, arraysEqual(DOp2.getPromiseReactions(), [DOp4]));
print(true, arraysEqual(DOp3.getPromiseReactions(), []));
print(true, arraysEqual(DOp4.getPromiseReactions(), []));


drainJobQueue();

print(true, arraysEqual(DOp.getPromiseReactions(), []));
print(true, arraysEqual(DOp2.getPromiseReactions(), []));
print(true, arraysEqual(DOp3.getPromiseReactions(), []));
print(true, arraysEqual(DOp4.getPromiseReactions(), []));
