

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("(" + function () { 
        var dbg = new Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            if (frame.callee === null) {
                
                debuggeeGlobal.log += "1";
                var cv = frame.eval("f();");
                assertEq(cv, null);
                debuggeeGlobal.log += "2";
            } else {
                
                debuggeeGlobal.log += "3";
                assertEq(frame.callee.name, "f");
                return null;
            }
        };
    } + ")()");

var log = "";
debugger;

function f() {
    log += "4";
    try {
        debugger;  
    } finally {
        log += "5";  
    }
}

assertEq(log, "1432");
