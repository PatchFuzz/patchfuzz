

let g = newGlobal();
let dbg = Debugger(g);

let forceException = g.eval(`
    (class extends class {} {
        
        constructor() { }
    })
`);

dbg.onExceptionUnwind = function() {
    return {
        
        return: 1
    }
}

new forceException;
