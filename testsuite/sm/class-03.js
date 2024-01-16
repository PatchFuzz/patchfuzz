

let g = newGlobal();
let dbg = Debugger(g);

let forceException = g.eval(`
    (class extends class {} {
        
        constructor() {
            debugger;
            return {};
        }
    })
`);

dbg.onDebuggerStatement = function() {
    return {
        
        return: 1
    }
}

new forceException;
