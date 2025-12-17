let g = newGlobal({newCompartment: true});
g.eval(`
    function f() {
        attach();
        debugger;
    }
    function* gen() {
        f();
        yield 1;
        f();
    }
    async function af() {
        f();
        await 1;
        f();
    }
`);

function test(expected, code) {
    let dbg;
    let hits = 0;
    let genFrame = null;

    g.attach = () => {
        if (dbg === undefined) {
            dbg = Debugger(g);
            dbg.onDebuggerStatement = frame => {
                hits++;
                print(frame.callee.name, "f");
                if (genFrame === null) {
                    genFrame = frame.older;
                } else {
                    print(frame.older, genFrame);
                }
                print(genFrame.callee.name, expected);
            };
        }
    };
    g.eval(code);
    print(hits, 2);
    dbg.removeDebuggee(g);
}

test("gen", "for (var x of gen()) {}");
test("af", "af(); drainJobQueue();");
