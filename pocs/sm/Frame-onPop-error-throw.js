;
var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

function test(type, provocation) {
    var log;

    
    print("type:        " + JSON.stringify(type));
    print("provocation: " + JSON.stringify(provocation));

    dbg.onDebuggerStatement = function handleDebuggerStatement(f) {
        log += 'd';
        return null;
    };

    dbg.onEnterFrame = function handleEnterFrame(f) {
        log += '(';
        print(f.type, type);
        f.onPop = function handlePop(c) {
            log += ')';
            print(c, null);
            return { throw: 'snow' };
        };
    };

    log = '';
    print(provocation, 'snow');
    print(log, "(d)");

    print();
}

g.eval("function f() { debugger; return 'termination fail'; }");
test("call", g.f);
test("call", function () { return new g.f; });
test("eval", function () { return g.eval("debugger; \'termination fail\';"); });
test("global", function () { return g.evaluate("debugger; \'termination fail\';"); });
throw 'TestComplete';
