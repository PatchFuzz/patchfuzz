;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    let env = frame.environment;
    print(env.getVariable('a'), 1);
    print(env.getVariable('b'), 2);
    print(env.getVariable('c'), 3);
    print(env.getVariable('d'), 4);
    print(env.getVariable('e'), 5);
};

g.eval(
`
    let m = parseModule(
    \`
        var a = 1;
        let b = 2;
        export var c = 3;
        export let d = 4;
        let e = 5;
        function f() { return e; }
        debugger;
    \`);
    moduleLink(m);
    moduleEvaluate(m);
`);

