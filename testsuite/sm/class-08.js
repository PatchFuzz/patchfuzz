let g = newGlobal({newCompartment: true});
let dbg = Debugger(g);
dbg.onDebuggerStatement = function() {
    
    
    return { return: undefined };
}

assertEq(g.eval(`
    new (class extends class {} {
        constructor() { super(); this.foo = 42; debugger; }
    })
`).foo, 42);
