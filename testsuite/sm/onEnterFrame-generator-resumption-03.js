


let g = newGlobal({newCompartment: true});
g.eval(`
    function* gen() {
        try {
            yield 0;
            return "fail";
        } catch (exc) {
            assertEq(exc, "fit");
            return "ok";
        }
    }
`)

let dbg = new Debugger(g);
let hits = 0;
dbg.onEnterFrame = frame => {
    assertEq(frame.callee.name, "gen");
    if (++hits == 3) {
        
        
        
        return {throw: "fit"};
    }
};

let it = g.gen();
let result = it.next();
assertEq(result.done, false);
assertEq(result.value, 0);
result = it.next();
assertEq(result.done, true);
assertEq(result.value, "ok");
