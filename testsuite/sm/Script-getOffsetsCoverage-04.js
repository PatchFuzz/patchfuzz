

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);

function loop(i) {
  var n = 0;
  for (n = 0; n < i; n++)
    debugger;
}
g.eval(loop.toString());

var countDown = 20;
dbg.onDebuggerStatement = function (f) {
  
  if (countDown > 0 && --countDown == 0) {
    dbg.collectCoverageInfo = !dbg.collectCoverageInfo;
  }
};

dbg.collectCoverageInfo = true;
g.eval("loop("+ (2 * countDown) +");");
