const g = newGlobal({newCompartment: true });
g.evaluate("setJitCompilerOption('ion.warmup.trigger', 1000)",
           {
             forceFullParse: true,
           });

const dbg = new Debugger(g);

g.evaluate("function one() {}",
           {
             fileName: "one.js",
             forceFullParse: true,
           });
g.evaluate(`function two1() {}
            function two2() {}`,
           {
             fileName: "two.js",
             forceFullParse: true,
           });
g.evaluate(`function three1() {}
            function three2() {}
            function three3() {}`,
           {
             fileName: "three.js",
             forceFullParse: true,
           });

const report = dbg.memory.takeCensus({
  breakdown: {
    by: "coarseType",
    scripts: {
      by: "filename",
      then: { by: "count", count: true, bytes: false },
      noFilename: {
        by: "internalType",
        then: { by: "count", count: true, bytes: false }
      }
    },

    
    objects: { by: "count", count: true, byte: false },
    strings: { by: "count", count: true, byte: false },
    other:   { by: "count", count: true, byte: false },
  }
});

print(JSON.stringify(report, null, 4));

print(report.scripts["one.js"].count, 1);
print(report.scripts["two.js"].count, 2);
print(report.scripts["three.js"].count, 3);

const noFilename = report.scripts.noFilename;
print(!!noFilename, true);
print(typeof noFilename, "object");
