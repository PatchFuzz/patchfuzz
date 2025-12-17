ignoreUnhandledRejections();

let g = newGlobal({newCompartment: true});
g.eval(`async function f(x) { await x; return "ponies"; }`);
g.eval(`async function f2(x) { await x; return "moar ponies"; }`);

let dbg = new Debugger;
let gw = dbg.addDebuggee(g);
let hits = 0;
let resumption = undefined;
let savedAsyncGen = undefined;
dbg.onEnterFrame = frame => {
    if (frame.type == "call" && frame.callee.name === "f2") {
        frame.onPop = completion => {
            if (savedAsyncGen === undefined) {
                savedAsyncGen = completion.return;
            }
        };
    }
    if (frame.type == "call" && frame.callee.name === "f") {
        frame.onPop = completion => {
            hits++;
        };

        return {return: savedAsyncGen};
    }
};

let p2 = g.f2(0);
let p = g.f(0);

print(hits, 1);

drainJobQueue();

print(hits, 1);

let pw2 = gw.makeDebuggeeValue(p2);
print(pw2.isPromise, true);
print(pw2.promiseState, "fulfilled");
print(pw2.promiseValue, "moar ponies");

let pw = gw.makeDebuggeeValue(p);
print(pw.isPromise, true);
print(pw.promiseState, "fulfilled");
print(pw.promiseValue, "moar ponies");
