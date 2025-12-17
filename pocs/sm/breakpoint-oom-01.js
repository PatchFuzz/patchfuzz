let g = newGlobal({newCompartment: true});
g.eval(`\
    function* gen(x) {  
        x++;            
        yield x;        
    }                   
`);

let dbg = new Debugger;


dbg.uncaughtExceptionHook = exc => exc === "out of memory" ? {throw: exc} : null;

let gw = dbg.addDebuggee(g);
let script = gw.makeDebuggeeValue(g.gen).script;
let hits = 0;
let handler = {
    hit(frame) {
        hits++;
        print("x=", frame.environment.getVariable("x"));
    }
};
for (let offset of script.getLineOffsets(2))
    script.setBreakpoint(offset, handler);

let result;
oomTest(() => {
    hits = 0;
    result = g.gen(1).next();
}, false);
print(hits, 1);
print(result.done, false);
print(result.value, 2);

