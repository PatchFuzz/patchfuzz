;
var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

function test(type, provocation) {
    var log;

    
    print("type:        " + JSON.stringify(type));
    print("provocation: " + JSON.stringify(provocation));

    dbg.onDebuggerStatement = function handleDebuggerStatement(f) {
        log += 'd';
    };

    dbg.onEnterFrame = function handleEnterFrame(f) {
        log += '(';
        print(f.type, type);
        f.onPop = function handlePop(c) {
            log += ')';
            print(c.return, 'compliment');
            return { throw: 'snow' };
        };
    };

    log = '';
    print(provocation, 'snow');
    print(log, "(d)");

    print();
}

g.eval("function f() { debugger; return 'compliment'; }");
test("call", g.f);
test("call", function () { return new g.f; });
test("eval", function () { return g.eval("debugger; \'compliment\';"); });
test("global", function () { return g.evaluate("debugger; \'compliment\';"); });
throw 'TestComplete';
