let g = newGlobal({newCompartment: true});
let dbg = Debugger(g);

let forceException = g.eval(`
    (class extends class {} {
        
        constructor() { return {}; }
    })
`);

dbg.onEnterFrame = function() {
    return {
        
        
        return: undefined
    }
}
print("break here");
new forceException;
