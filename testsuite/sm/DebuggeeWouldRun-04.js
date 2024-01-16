

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onNewScript = function () {
  dbg.onNewScript = function () { throw "yadda"; };
  g.Function("noodles;");
}
g.Function("poodles;");
