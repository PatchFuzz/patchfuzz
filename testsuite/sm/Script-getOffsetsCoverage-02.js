




var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var coverageInfo = [];
var num = 20;
function loop(i) {
  var n = 0;
  for (n = 0; n < i; n++)
    debugger;
}
g.eval(loop.toString());

dbg.onDebuggerStatement = function (f) {
  
  coverageInfo.push(f.callee.script.getOffsetsCoverage());
};

coverageInfo = [];
dbg.collectCoverageInfo = false;
g.eval("loop(" + num + ");");
assertEq(coverageInfo.length, num);
assertEq(coverageInfo[0], null);
assertEq(coverageInfo[num - 1], null);

coverageInfo = [];
dbg.collectCoverageInfo = true;
g.eval("loop(" + num + ");");
assertEq(coverageInfo.length, num);
assertEq(!coverageInfo[0], false);
assertEq(!coverageInfo[num - 1], false);

coverageInfo = [];
dbg.collectCoverageInfo = false;
g.eval("loop(" + num + ");");
assertEq(coverageInfo.length, num);
assertEq(coverageInfo[0], null);
assertEq(coverageInfo[num - 1], null);
