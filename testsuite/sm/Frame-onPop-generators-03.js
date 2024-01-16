




load(libdir + "asserts.js");

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
            
            
            assertThrowsInstanceOf(() => genObj.next(), g.TypeError);
            assertThrowsInstanceOf(() => genObj.throw("fit"), g.TypeError);
            assertThrowsInstanceOf(() => genObj.return(), g.TypeError);
        } else {
            
            
            let result = genObj.next();
            assertEq(result.done, true);
            assertEq(result.value, undefined);

            assertThrowsValue(() => genObj.throw("fit"), "fit");

            result = genObj.return();
            assertEq(result.done, true);
            assertEq(result.value, undefined);
        }
        dbg.addDebuggee(g);
    };
};

for (let x of genObj) {}
assertEq(hits, 3);
