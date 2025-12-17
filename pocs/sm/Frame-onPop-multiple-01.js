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

    print(frame.onStack, true);
    frames.push(frame);

    var dbgs = [];
    var log;

    
    for (let i = 0; i < 9; i++) {
        
        
        
        
        let dbg = new Debugger(g);
        dbgs.push(dbg);

        dbg.onDebuggerStatement = function handleDebuggerStatement(f) {
            log += 'd';  
            print(f.onStack, true);
            frames.push(f);
        };

        
        dbg.onEnterFrame = function handleEnterEval(f) {
            log += 'e';
            print(f.type, 'eval');
            print(f.onStack, true);
            frames.push(f);

            
            dbg.onEnterFrame = function handleEnterCall(f) {
                log += '(';
                print(f.type, 'call');
                print(f.onStack, true);
                frames.push(f);

                
                dbg.onEnterFrame = function handleExtraEnter(f) {
                    log += 'z';
                };

                f.onPop = function handlePop(c) {
                    log += ')';
                    print(this.onStack, true);
                    print(completionsEqual(c, { return: '1' }), true);
                    frames.push(this);

                    
                    var i = dbgs.indexOf(dbg);
                    print(i != -1, true);
                    dbgs.splice(i,1);
                };
            };
        };
    }

    log = '';
    print(completionsEqual(frame.eval('f()'), { return: '1' }), true);
    print(log, "eeeeeeeee(((((((((ddddddddd)))))))))");

    dbg0.log += '.';
};

dbg0.log = '';
g.eval('eval');
print(dbg0.log, '(.');


for (var i = 0; i < frames.length; i++)
    print(frames[i].onStack, false);
