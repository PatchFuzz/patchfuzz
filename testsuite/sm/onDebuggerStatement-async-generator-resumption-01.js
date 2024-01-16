


load(libdir + "asserts.js");

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

    
    assertEq(hits, 0);
    iter.next().then(result => {
        
        
        assertEq(hits, 1);
        if (when == 0)
            return result;
        assertEq(result.value, 1);
        assertEq(result.done, false);
        return iter.next();
    }).then(result => {
        
        assertEq(hits, when + 1);
        assertEq(result.value, "ponies");
        assertEq(result.done, true);
        outcome = "pass";
    }).catch(e => {
        
        exc = e;
    });

    assertEq(hits, 1);
    drainJobQueue();
    if (exc !== null)
        throw exc;
    assertEq(outcome, "pass");
}

for (let i = 0; i < 2; i++) {
    test(i);
}
