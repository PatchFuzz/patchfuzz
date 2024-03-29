


var g = newGlobal({newCompartment: true});
g.eval(`
    
    var promises = [], resolvers = [];
    for (let i = 0; i < 3; i++)
        promises.push(new Promise(r => { resolvers.push(r); }));

    async function f() {
        debugger;
        for (let p of promises) {
            await p;
            debugger;
        }
    }
`);
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    if (hits === 0)
        frame.seen = true;
    else
        assertEq(frame.seen, true);
    hits++;
};

let done = false;
g.f().then(_ => { done = true; });
gc();
drainJobQueue();
gc();


for (let [i, resolve] of g.resolvers.entries()) {
    assertEq(hits, 1 + i);
    assertEq(done, false);
    resolve("x");
    gc();
    drainJobQueue();
    gc();
}
assertEq(hits, 1 + g.resolvers.length);
assertEq(done, true);
