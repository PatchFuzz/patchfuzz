;

let g = newGlobal({newCompartment: true});
g.eval(`
    function* f() { yield 1; }
    var exn = new TypeError("object too hairy");
`);

let dbg = new Debugger;
let gw = dbg.addDebuggee(g);






for (let i = 0; i < 3; i++) {
    let hits = 0;
    dbg.onEnterFrame = frame => {
        return hits++ < i ? undefined : {throw: gw.makeDebuggeeValue(g.exn)};
    };
    let genObj;
    print(
        () => {
            genObj = g.f();
            for (let x of genObj) {}
        },
        g.exn
    );
    print(hits, i + 1);
    if (hits > 1)
        print(genObj.next().done, true);
}
