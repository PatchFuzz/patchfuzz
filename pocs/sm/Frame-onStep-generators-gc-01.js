var gen0;

var hits2 = 0;
var resuming2 = false;

function onStep2() {
    if (resuming2) {
        hits2++;
        resuming2 = false;
    }
}

function setup() {
    let g1 = newGlobal({newCompartment: true});
    g1.eval(`
        function* gf1() {
             debugger;
             yield 1;
             return 'done';
        }
    `);
    gen0 = g1.gf1();

    let g2 = newGlobal({newCompartment: true});
    g2.eval(`
        function* gf2() { debugger; yield 1; return 'done'; }

        var resuming1 = false;

        function makeOnStepHook1(dbg1) {
            
            var weak = new WeakMap();
            weak.set(dbg1, {});
            return () => {
                if (resuming1) {
                    var dbg1Arr = nondeterministicGetWeakMapKeys(weak);
                    print(dbg1Arr.length, 1);
                    dbg1Arr[0].gen1.next();
                    resuming1 = false;
                }
            };
        }

        function test(g1, gen0) {
            let dbg1 = Debugger(g1);
            dbg1.onDebuggerStatement = frame1 => {
                frame1.onStep = makeOnStepHook1(dbg1);
                dbg1.onDebuggerStatement = undefined;
            };
            gen0.next();  
            resuming1 = true;
            dbg1.gen1 = gf2();
            return dbg1.gen1;
        }
    `);

    let dbg2 = Debugger(g2);
    dbg2.onDebuggerStatement = frame2 => {
        frame2.onStep = onStep2;
        dbg2.onDebuggerStatement = undefined;
    };
    var gen1 = g2.test(g1, gen0);
    gen1.next();  
    resuming2 = true;
}

setup();
gc();
print(hits2, 0);
gen0.next();  
print(hits2, 1);
