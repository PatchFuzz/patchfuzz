;

let g = newGlobal({newCompartment: true});
g.eval(`
    async function* f(x) {
        debugger;  
        await x;
        yield 1;
        debugger;  
    }
`);

let exc = null;
let dbg = new Debugger;
let gw = dbg.addDebuggee(g);
function test(when) {
    let hits = 0;
    let outcome = "FAIL";
    dbg.onDebuggerStatement = frame => {
        if (hits++ == when)
            return {return: "ponies"};
    };

    let iter = g.f(0);

    
    print(hits, 0);
    iter.next().then(result => {
        
        
        print(hits, 1);
        if (when == 0)
            return result;
        print(result.value, 1);
        print(result.done, false);
        return iter.next();
    }).then(result => {
        
        print(hits, when + 1);
        print(result.value, "ponies");
        print(result.done, true);
        outcome = "pass";
    }).catch(e => {
        
        exc = e;
    });

    print(hits, 1);
    drainJobQueue();
    if (exc !== null)
        throw exc;
    print(outcome, "pass");
}

for (let i = 0; i < 2; i++) {
    test(i);
}
