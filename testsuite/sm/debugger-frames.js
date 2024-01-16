

load(libdir + "asserts.js");

function assertArrayEq(actual, expected)
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
    
    assertEq(frame.type, 'module');
    assertEq(frame.this, undefined);

    
    let env = frame.environment;
    assertEq(env.type, 'declarative');
    assertEq(env.calleeScript, null);

    
    assertArrayEq(env.names().sort(), ['a', 'b', 'c', 'x', 'y', 'z']);
    assertArrayEq(['a', 'b', 'c'].map(env.getVariable, env), [1, 2, 3]);
    assertArrayEq(['x', 'y', 'z'].map(env.getVariable, env), [4, 5, 6]);

    
    assertThrowsInstanceOf(() => env.setVariable('a', 10), TypeError);
    assertThrowsInstanceOf(() => env.setVariable('b', 11), TypeError);
    assertThrowsInstanceOf(() => env.setVariable('c', 12), TypeError);
    env.setVariable('x', 7);
    env.setVariable('y', 8);
    assertThrowsInstanceOf(() => env.setVariable('z', 9), TypeError);
    assertArrayEq(['a', 'b', 'c'].map(env.getVariable, env), [1, 2, 3]);
    assertArrayEq(['x', 'y', 'z'].map(env.getVariable, env), [7, 8, 6]);

    
    
    assertEq(env.parent.type, 'declarative');
    assertEq(env.parent.parent.type, 'object');
    assertEq(env.parent.parent.parent, null);
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
