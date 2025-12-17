let g = newGlobal({newCompartment: true});
g.eval('function* f() { yield 1; yield 2; }');
let dbg = Debugger(g);
let genObj = null;
let hits = 0;
dbg.onEnterFrame = frame => {
    
    
    
    if (genObj === null) {
        
        frame.onStep = function() {};
    } else {
        dbg.removeDebuggee(g);
        dbg.addDebuggee(g);
        hits++;
    }
};
genObj = g.f();
for (let x of genObj) {}
print(hits, 3);
