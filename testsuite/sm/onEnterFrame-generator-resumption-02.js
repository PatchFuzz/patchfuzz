


load(libdir + "asserts.js");

let g = newGlobal({newCompartment: true});
g.values = [1, 2, 3];
g.eval(`function* f() { yield* values; }`);

let dbg = Debugger(g);









for (let i = 1; i < 5; i++) {
    let hits = 0;
    dbg.onEnterFrame = frame => {
        return hits++ < i ? undefined : {return: "we're done here"};
    };

    let genObj = g.f();
    let actual = [];
    while (true) {
        let r = genObj.next();
        if (r.done) {
            assertDeepEq(r, {value: "we're done here", done: true});
            break;
        }
        actual.push(r.value);
    }
    assertEq(hits, i + 1);
    assertDeepEq(actual, g.values.slice(0, i - 1));
    assertDeepEq(genObj.next(), {value: undefined, done: true});
}
