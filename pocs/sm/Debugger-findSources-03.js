const g1 = newGlobal({newCompartment: true});
const g2 = newGlobal({newCompartment: true});

g1.evaluate(`function fa() {}`, { fileName: "a.js" });
g1.evaluate(`function fb() {}`, { fileName: "b.js" });
g2.evaluate(`function fc() {}`, { fileName: "c.js" });
g2.evaluate(`function fd() {}`, { fileName: "d.js" });

const dbg = new Debugger();
const g1w = dbg.addDebuggee(g1);
const g2w = dbg.addDebuggee(g2);

const sources = dbg.findSources();
print(dbg.findSources().filter(s => s.url == "a.js").length, 1);
print(dbg.findSources().filter(s => s.url == "b.js").length, 1);
print(dbg.findSources().filter(s => s.url == "c.js").length, 1);
print(dbg.findSources().filter(s => s.url == "d.js").length, 1);
