


var g = newGlobal({newCompartment: true});
var hits;

function addDebug() {
    
    for (var i = 0; i < 4; i++) {
        var dbg = new Debugger(g);
        dbg.onDebuggerStatement = function (stack) {
            hits++;
            this.enabled = false;
            this.onDebuggerStatement = undefined;
            gc();
        };
        if (i > 0) {
            dbg.enabled = false;
            dbg.onDebuggerStatement = undefined;
            dbg = null;
        }
    }
}

addDebug();
hits = 0;
g.eval("debugger;");
assertEq(hits, 1);
