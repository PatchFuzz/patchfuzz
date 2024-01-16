

function completionsEqual(c1, c2) {
    if (c1 && c2) {
        if (c1.throw)
            return c1.throw === c2.throw;
        else
            return c1.return === c2.return;
    }
    return c1 === c2;
}

function completionString(c) {
    if (c == null)
        return 'x';
    if (c.return)
        return 'r' + c.return;
    if (c.throw)
        return 't' + c.throw;
    return '?';
}

var g = newGlobal({newCompartment: true}); 
g.eval('function f() { debugger; return "1"; }');



var frames = [];




var dbg0 = new Debugger(g);
dbg0.onEnterFrame = function handleOriginalEnter(frame) {
    dbg0.log += '(';
    dbg0.onEnterFrame = undefined;

    assertEq(frame.onStack, true);
    frames.push(frame);

    var dbgs = [];
    var log;

    
    for (let i = 0; i < 9; i++) {
        
        
        
        
        let dbg = new Debugger(g);
        dbgs.push(dbg);

        dbg.onDebuggerStatement = function handleDebuggerStatement(f) {
            log += 'd';  
            assertEq(f.onStack, true);
            frames.push(f);
        };

        
        dbg.onEnterFrame = function handleEnterEval(f) {
            log += 'e';
            assertEq(f.type, 'eval');
            assertEq(f.onStack, true);
            frames.push(f);

            
            dbg.onEnterFrame = function handleEnterCall(f) {
                log += '(';
                assertEq(f.type, 'call');
                assertEq(f.onStack, true);
                frames.push(f);

                
                dbg.onEnterFrame = function handleExtraEnter(f) {
                    log += 'z';
                };

                f.onPop = function handlePop(c) {
                    log += ')';
                    assertEq(this.onStack, true);
                    assertEq(completionsEqual(c, { return: '1' }), true);
                    frames.push(this);

                    
                    var i = dbgs.indexOf(dbg);
                    assertEq(i != -1, true);
                    dbgs.splice(i,1);
                };
            };
        };
    }

    log = '';
    assertEq(completionsEqual(frame.eval('f()'), { return: '1' }), true);
    assertEq(log, "eeeeeeeee(((((((((ddddddddd)))))))))");

    dbg0.log += '.';
};

dbg0.log = '';
g.eval('eval');
assertEq(dbg0.log, '(.');


for (var i = 0; i < frames.length; i++)
    assertEq(frames[i].onStack, false);
