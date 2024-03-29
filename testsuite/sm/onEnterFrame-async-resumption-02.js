


load(libdir + "asserts.js");

let g = newGlobal({newCompartment: true});
g.eval(`
    async function f() { await 1; }
    var err = new TypeError("object too hairy");
`);

let dbg = new Debugger;
let gw = dbg.addDebuggee(g);
let errw = gw.makeDebuggeeValue(g.err);





for (let when = 0; when < 2; when++) {
    let hits = 0;
    dbg.onEnterFrame = frame => {
        return hits++ < when ? undefined : {throw: errw};
    };

    let result = undefined;
    g.f()
        .then(value => { result = {returned: value}; })
        .catch(err => { result = {threw: err}; });

    drainJobQueue();

    assertEq(hits, when + 1);
    assertDeepEq(result, {threw: g.err});
}
