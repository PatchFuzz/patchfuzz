;

function print(actual, expected)
{
    var eq = actual.length == expected.length;
    if (eq) {
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                eq = false;
                break;
            }
        }
    }
    if (!eq) {
        print("Assertion failed: got " + JSON.stringify(actual) +
              ", expected " + JSON.stringify(expected));
        quit(3);
    }
}

var g2 = newGlobal({newCompartment: true});

var dbg = Debugger(g2);
dbg.onDebuggerStatement = function (frame) {
    
    print(frame.type, 'module');
    print(frame.this, undefined);

    
    let env = frame.environment;
    print(env.type, 'declarative');
    print(env.calleeScript, null);

    
    print(env.names().sort(), ['a', 'b', 'c', 'x', 'y', 'z']);
    print(['a', 'b', 'c'].map(env.getVariable, env), [1, 2, 3]);
    print(['x', 'y', 'z'].map(env.getVariable, env), [4, 5, 6]);

    
    print(() => env.setVariable('a', 10), TypeError);
    print(() => env.setVariable('b', 11), TypeError);
    print(() => env.setVariable('c', 12), TypeError);
    env.setVariable('x', 7);
    env.setVariable('y', 8);
    print(() => env.setVariable('z', 9), TypeError);
    print(['a', 'b', 'c'].map(env.getVariable, env), [1, 2, 3]);
    print(['x', 'y', 'z'].map(env.getVariable, env), [7, 8, 6]);

    
    
    print(env.parent.type, 'declarative');
    print(env.parent.parent.type, 'object');
    print(env.parent.parent.parent, null);
};

f = g2.eval(
`
    
    a = registerModule('a', parseModule(
    \`
        export var a = 1;
        export let b = 2;
        export const c = 3;
        export function f(x) { return x + 1; }
    \`));
    moduleLink(a);
    moduleEvaluate(a);

    let m = parseModule(
    \`
        import { a, b, c } from 'a';
        var x = 4;
        let y = 5;
        const z = 6;

        eval("");
        debugger;
    \`);
    moduleLink(m);
    moduleEvaluate(m);
`);
