;

let g = newGlobal({newCompartment: true});
g.eval('function* f() { yield 1; yield 2; }');
let dbg = Debugger(g);
let genObj = null;
let hits = 0;
dbg.onEnterFrame = frame => {
    
    
    
    if (genObj !== null) {
        dbg.removeDebuggee(g);  
        print(() => genObj.next(), g.TypeError);
        dbg.addDebuggee(g);
        hits++;
    }
};
genObj = g.f();
for (let x of genObj) {}
print(hits, 3);
