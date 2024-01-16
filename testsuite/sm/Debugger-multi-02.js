



var g = newGlobal({newCompartment: true});
var n = 0;
var hits;

function addDebugger() {
    var dbg = new Debugger(g);
    dbg.onDebuggerStatement = function (stack) {
        hits++;
        addDebugger();
    };
}

addDebugger();  
hits = 0;
g.eval("debugger;");  
assertEq(hits, 1);

hits = 0;
g.eval("debugger;");  
assertEq(hits, 2);

hits = 0;
g.eval("debugger;");  
assertEq(hits, 4);

hits = 0;
g.eval("debugger;");
assertEq(hits, 8);
