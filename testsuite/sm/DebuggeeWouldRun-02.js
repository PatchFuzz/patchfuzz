

var g = newGlobal();
var dbg = Debugger(g)
dbg.onNewGlobalObject = () => g.newGlobal();
g.newGlobal();
print("yo");
