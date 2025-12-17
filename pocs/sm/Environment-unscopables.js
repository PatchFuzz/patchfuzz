;

let g = newGlobal({newCompartment: true});
g.eval(`
    let x = 'global';
    function f() {
        let obj = {
            x: 'obj',
            y: 'obj',
            [Symbol.unscopables]: {x: 1},
        };
        with (obj)
            debugger;
    }
`);
let dbg = Debugger(g);
let hits = 0;
dbg.onDebuggerStatement = function (frame) {
    let env = frame.environment;

    print(env.find("x") !== env, true);
    print(env.names().indexOf("x"), -1);
    print(env.getVariable("x"), undefined);
    print(() => env.setVariable("x", 7), TypeError);

    print(env.find("y") === env, true);
    print(env.getVariable("y"), "obj");
    env.setVariable("y", 8);

    print(frame.eval("x").return, "global");
    print(frame.eval("y").return, 8);
    hits++;
};
g.f();
print(hits, 1);
