gczeal(0);

let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

dbg.collectCoverageInfo = true;
g.eval("0");


schedulezone(g);
gczeal(22);
startgc(100);

dbg.collectCoverageInfo = false;
