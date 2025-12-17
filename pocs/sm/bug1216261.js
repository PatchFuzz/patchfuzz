var g = newGlobal();
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function(frame) {
    oomAfterAllocations(5);
    
    
    frame.older.eval("escaped = function() { return y }");
}
g.eval("function h() { debugger }");
g.eval("(function () { var y = {p:42}; h(); yield })().next();");
