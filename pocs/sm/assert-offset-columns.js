function print(code, expectedBpts, expectedOrdering = null) {
    if (expectedOrdering === null) {
        
        expectedOrdering = Array.from(expectedBpts.match(/\^/g), (_, i) => i).join(" ");
    }

    
    const global = newGlobal({newCompartment: true});

    const lines = code.split(/\r?\n|\r]/g);
    const initCode = lines.slice(0, -1).join("\n");
    const execCode = lines[lines.length - 1];

    
    global.eval(initCode);

    
    global.eval(execCode);

    
    const hits = global.hits = [];
    const bpts = new Set();

    
    const dbg = new Debugger;
    let debuggeeFn = dbg.addDebuggee(global).makeDebuggeeValue(global.f);
    if (debuggeeFn.isBoundFunction) {
        debuggeeFn = debuggeeFn.boundTargetFunction;
    }

    const { script } = debuggeeFn;
    for (const offset of script.getAllColumnOffsets()) {
        print(offset.lineNumber, 1);
        print(offset.columnNumber <= execCode.length, true);
        bpts.add(offset.columnNumber);

        script.setBreakpoint(offset.offset, {
            hit(frame) {
                hits.push(offset.columnNumber);
            },
        });
    }
    global.f(3);

    const actualBpts = Array.from(execCode, (_, i) => {
        return bpts.has(i + 1) ? "^" : " ";
    }).join("");

    if (actualBpts.trimEnd() !== expectedBpts.trimEnd()) {
        throw new Error(`Assertion failed:
                     code: ${execCode}
            expected bpts: ${expectedBpts}
              actual bpts: ${actualBpts}\n`);
    }

    const indexLookup = new Map(
        Array.from(bpts).sort().map((col, i) => [col, i]));
    const actualOrdering = hits
        .map(item => typeof item === "number" ? indexLookup.get(item) : item)
        .join(" ");

    if (actualOrdering.trimEnd() !== expectedOrdering.trimEnd()) {
        throw new Error(`Assertion failed:
                     code: ${execCode}
                     bpts: ${expectedBpts}
           expected order: ${expectedOrdering}
             actual order: ${actualOrdering}\n`);
    }
}
