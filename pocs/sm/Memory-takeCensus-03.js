;

var dbg = new Debugger;

var census0 = dbg.memory.takeCensus();
Census.walkCensus(census0, "census0", Census.assertAllZeros);

var g1 = newGlobal({newCompartment: true});
dbg.addDebuggee(g1);
var census1 = dbg.memory.takeCensus();
Census.walkCensus(census1, "census1", Census.print(census0));

var g2 = newGlobal({newCompartment: true});
dbg.addDebuggee(g2);
var census2 = dbg.memory.takeCensus();
Census.walkCensus(census2, "census2", Census.print(census1), new Set(["bytes"]));

dbg.removeDebuggee(g2);
var census3 = dbg.memory.takeCensus();
Census.walkCensus(census3, "census3", Census.print(census1), new Set(["bytes"]));

dbg.removeDebuggee(g1);
var census4 = dbg.memory.takeCensus();
Census.walkCensus(census4, "census4", Census.print(census0));
