let g = newGlobal({newCompartment: true});
g.eval(`
    function* gen() {
        try {
            yield 0;
            return "fail";
        } finally {
            return "ok"; 
        }
    }
`)

let dbg = new Debugger(g);
dbg.onEnterFrame = frame => {
    if (!("hits" in frame)) {
        frame.hits = 1;
    } else if (++frame.hits == 3) {
        
        
        
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
