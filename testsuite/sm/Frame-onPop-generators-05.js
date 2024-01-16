


let g = newGlobal({newCompartment: true});
g.eval(`
    function* f() {
        return "ok";
    }
`);

let hits = 0;
let dbg = new Debugger;
let gw = dbg.addDebuggee(g);
dbg.onEnterFrame = frame => {
    dbg.onEnterFrame = undefined;  
    frame.onPop = completion => {
        
        let genObj = completion.return;
        assertEq(genObj.class, "Generator");
        let result = frame.evalWithBindings("genObj.next()", {genObj});
        assertEq(result.throw.class, "TypeError");
        assertEq(result.throw.getProperty("message").return,
                 "already executing generator");
        hits++;
    };
};

g.f();
assertEq(hits, 1);
