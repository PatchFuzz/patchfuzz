;

let g = newGlobal({newCompartment: true});
g.eval('function* f() { debugger; yield 1; debugger; yield 2; debugger; }');
let dbg = Debugger(g);
let genObj = g.f();

let hits = 0;
dbg.onDebuggerStatement = frame => {
    frame.onPop = completion => {
        dbg.removeDebuggee(g);  
        hits++;
        if (hits < 3) {
            
            
            print(() => genObj.next(), g.TypeError);
            print(() => genObj.throw("fit"), g.TypeError);
            print(() => genObj.return(), g.TypeError);
        } else {
            
            
            let result = genObj.next();
            print(result.done, true);
            print(result.value, undefined);

            print(() => genObj.throw("fit"), "fit");

            result = genObj.return();
            print(result.done, true);
            print(result.value, undefined);
        }
        dbg.addDebuggee(g);
    };
};

for (let x of genObj) {}
print(hits, 3);
