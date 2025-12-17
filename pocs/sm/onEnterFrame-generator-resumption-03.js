let g = newGlobal({newCompartment: true});
g.eval(`
    function* gen() {
        try {
            yield 0;
            return "fail";
        } catch (exc) {
            print(exc, "fit");
            return "ok";
        }
    }
`)

let dbg = new Debugger(g);
let hits = 0;
dbg.onEnterFrame = frame => {
    print(frame.callee.name, "gen");
    if (++hits == 3) {
        
        
        
        return {throw: "fit"};
    }
};

let it = g.gen();
let result = it.next();
print(result.done, false);
print(result.value, 0);
result = it.next();
print(result.done, true);
print(result.value, "ok");
