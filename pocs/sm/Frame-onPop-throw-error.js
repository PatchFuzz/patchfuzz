var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);




function test(type, provocation) {
    
    print("type:        " + JSON.stringify(type));
    print("provocation: " + JSON.stringify(provocation));

    var log;
    dbg.onEnterFrame = function handleFirstFrame(f) {
        log += 'f';
        dbg.onDebuggerStatement = function handleDebugger(f) {
            log += 'd';
        };

        dbg.onEnterFrame = function handleSecondFrame(f) {
            log += 'e';
            print(f.type, 'eval');

            dbg.onEnterFrame = function handleThirdFrame(f) {
                log += '(';
                print(f.type, type);

                dbg.onEnterFrame = function handleExtraFrames(f) {
                    
                    print(false, true);
                };

                f.onPop = function handlePop(c) {
                    log += ')';
                    print(c.throw, 'mud');
                    return null;
                };
            };
        };

        print(f.eval(provocation), null);
    };

    log = '';
    
    print(typeof g.eval('eval'), 'function');
    print(log, 'fe(d)');

    print();
}

g.eval('function f() { debugger; throw \'mud\'; }');
test('call', 'f();');
test('call', 'new f;');
test('eval', 'eval(\'debugger; throw \\\'mud\\\';\');');
test('global', 'evaluate(\'debugger; throw \\\'mud\\\';\');');
throw 'TestComplete';
