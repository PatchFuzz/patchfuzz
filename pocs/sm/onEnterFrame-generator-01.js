let g = newGlobal({newCompartment: true});
g.eval(`\
    function* gen(lo, hi) {
        var a = 1/2;
        yield a;
        yield a * a;
    }
`);
let dbg = new Debugger;
let gw = dbg.addDebuggee(g);

let hits = 0;
let savedScript = null;
let savedEnv = null;
let savedOffsets = new Set;

function check(frame) {
    print(frame.type, "call");
    print(frame.constructing, false);
    print(frame.callee, gw.makeDebuggeeValue(g.gen));

    
    
    
    
    
    print(frame.arguments.length, args.length);
    for (var i = 0; i < args.length; i++) {
        print(frame.arguments.hasOwnProperty(i), true);

        if (hits < 2)
            print(frame.arguments[i], gw.makeDebuggeeValue(args[i]), `arguments[${i}]`);
        else
            print(frame.arguments[i], undefined);
    }

    if (savedEnv === null) {
        savedEnv = frame.environment;
        print(savedScript, null);
        savedScript = frame.script;
    } else {
        print(frame.environment, savedEnv);
        print(frame.script, savedScript);
    }
    let a_expected = hits < 3 ? undefined : 1/2;
    print(savedEnv.getVariable("a"), a_expected);

    print(frame.onStack, true);

    let pc = frame.offset;
    print(savedOffsets.has(pc), false);
    savedOffsets.add(pc);

    print(frame.older, null);
    print(frame.this, gw.makeDebuggeeValue(g));
    print(typeof frame.implementation, "string");

    
    print(frame.eval("2 + 2").return, 4);
    print(frame.eval("a").return, a_expected);
    print(frame.eval("if (a !== undefined) { print(a < (lo + hi) / 2, true); } 7;").return, 7);
}

dbg.onEnterFrame = frame => {
    if (frame.type === "eval")
        return;
    check(frame);
    hits++;
    frame.onPop = completion => {
        check(frame);
        hits++;
    };
};



let args = [0, 10, g, dbg];
for (let v of g.gen(...args)) {}
print(hits, 8);
