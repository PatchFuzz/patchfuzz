var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("(" + function () { 
        var dbg = new Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            if (frame.callee === null) {
                
                debuggeeGlobal.log += "1";
                var cv = frame.eval("f();");
                print(cv, null);
                debuggeeGlobal.log += "2";
            } else {
                
                debuggeeGlobal.log += "3";
                print(frame.callee.name, "f");
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

print(log, "1432");
