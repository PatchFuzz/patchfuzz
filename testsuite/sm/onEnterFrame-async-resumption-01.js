


ignoreUnhandledRejections();

let g = newGlobal({newCompartment: true});
g.hit2 = false;
g.eval(`async function f(x) { await x; return "ponies"; }`);

let dbg = new Debugger;
let gw = dbg.addDebuggee(g);
let hits = 0;
let resumption = undefined;
dbg.onEnterFrame = frame => {
    if (frame.type == "call" && frame.callee.name === "f") {
        frame.onPop = completion => {
            assertEq(completion.return.isPromise, true);
            hits++;
        };

        
        
        resumption = frame.eval(`(function* f2() { hit2 = true; })()`);
        assertEq(resumption.return.class, "Generator");
        return resumption;
    }
};

let p = g.f(0);
assertEq(hits, 1);
assertEq(g.hit2, false);
let pw = gw.makeDebuggeeValue(p);
assertEq(pw.isPromise, true);
assertEq(pw.promiseState, "fulfilled");
assertEq(pw.promiseValue, resumption.return);
