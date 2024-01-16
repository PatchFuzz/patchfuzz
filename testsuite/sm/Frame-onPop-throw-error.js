


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
            assertEq(f.type, 'eval');

            dbg.onEnterFrame = function handleThirdFrame(f) {
                log += '(';
                assertEq(f.type, type);

                dbg.onEnterFrame = function handleExtraFrames(f) {
                    
                    assertEq(false, true);
                };

                f.onPop = function handlePop(c) {
                    log += ')';
                    assertEq(c.throw, 'mud');
                    return null;
                };
            };
        };

        assertEq(f.eval(provocation), null);
    };

    log = '';
    
    assertEq(typeof g.eval('eval'), 'function');
    assertEq(log, 'fe(d)');

    print();
}

g.eval('function f() { debugger; throw \'mud\'; }');
test('call', 'f();');
test('call', 'new f;');
test('eval', 'eval(\'debugger; throw \\\'mud\\\';\');');
test('global', 'evaluate(\'debugger; throw \\\'mud\\\';\');');
throw 'TestComplete';
