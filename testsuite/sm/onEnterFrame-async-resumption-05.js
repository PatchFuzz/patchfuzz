

ignoreUnhandledRejections();

let g = newGlobal({newCompartment: true});
g.eval(`async function* f(x) { await x; return "ponies"; }`);

let dbg = new Debugger;
let gw = dbg.addDebuggee(g);
let log = "";
let completion = undefined;
let resumption = undefined;
dbg.uncaughtExceptionHook = exc => {
    log += "2";
    assertEq(exc.message, "can't force return from a generator before the initial yield");
    assertEq(exc.constructor, TypeError);
    return undefined;  
};
dbg.onEnterFrame = frame => {
    if (frame.type == "call" && frame.callee.name === "f") {
        frame.onPop = c => {
            
            
            completion = c;
            assertEq(completion.return.class, "AsyncGenerator");
            assertEq(completion.return !== resumption.return, true);
            log += "3";
        };

        
        dbg.onEnterFrame = undefined;  
        resumption = frame.eval('f(0)');
        assertEq(resumption.return.class, "AsyncGenerator");
        log += "1";
        return resumption;
    }
};

let it = g.f(0);
assertEq(log, "123");
assertEq(gw.makeDebuggeeValue(it), completion.return);
