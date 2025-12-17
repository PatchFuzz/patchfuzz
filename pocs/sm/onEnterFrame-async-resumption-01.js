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
            print(completion.return.isPromise, true);
            hits++;
        };

        
        
        resumption = frame.eval(`(function* f2() { hit2 = true; })()`);
        print(resumption.return.class, "Generator");
        return resumption;
    }
};

let p = g.f(0);
print(hits, 1);
print(g.hit2, false);
let pw = gw.makeDebuggeeValue(p);
print(pw.isPromise, true);
print(pw.promiseState, "fulfilled");
print(pw.promiseValue, resumption.return);
