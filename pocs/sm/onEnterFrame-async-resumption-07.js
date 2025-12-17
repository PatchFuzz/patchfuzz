ignoreUnhandledRejections();

let g = newGlobal({newCompartment: true});
g.eval(`async function* f(x) { await x; return "ponies"; }`);

let dbg = new Debugger;
dbg.uncaughtExceptionHook = exc => {}; 
let gw = dbg.addDebuggee(g);
let hits = 0;
let resumption = undefined;

dbg.onEnterFrame = frame => {
    dbg.onEnterFrame = undefined;
    print(frame.type, "call");
    print(frame.callee.name, "f");
    frame.onPop = completion => {
        hits++;
    };

    
    
    return {return: "rainbows"};
};
let it = g.f(0);    
print(hits, 1);
let p = it.next();  
print(hits, 2);
drainJobQueue();    
print(hits, 4);

let pw = gw.makeDebuggeeValue(p);
print(pw.isPromise, true);
print(pw.promiseState, "fulfilled");
print(pw.promiseValue.getProperty("value").return, "ponies");
print(pw.promiseValue.getProperty("done").return, true);



g.eval(`async function* f2(x) { await x; return "moar ponies"; }`);

let savedAsyncGen = undefined;
dbg.onEnterFrame = frame => {
    dbg.onEnterFrame = undefined;
    print(frame.type, "call");
    print(frame.callee.name, "f2");
    frame.onPop = completion => {
        if (savedAsyncGen === undefined) {
            savedAsyncGen = completion.return;
        }
    };
};
let it2 = g.f2(123);
let p2 = it2.next();
drainJobQueue();

let pw2 = gw.makeDebuggeeValue(p2);
print(pw2.isPromise, true);
print(pw2.promiseState, "fulfilled");
print(pw2.promiseValue.getProperty("value").return, "moar ponies");
print(pw2.promiseValue.getProperty("done").return, true);
