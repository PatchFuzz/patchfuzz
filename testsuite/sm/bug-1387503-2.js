



let g = newGlobal({newCompartment: true});
g.parent = this;
g.hit = false;
g.eval(`
    var dbg = new Debugger(parent);
    dbg.onDebuggerStatement = (_frame, exc) => (hit = true, null);
`);

let fnFinished = false;
async function fn() {
    
    
    
    await 1; 

    try {
        
        
        new ReadableStream({
            start(controller) {
                controller.enqueue("FIRST POST");  
            }
        }, {
            size() {
                debugger;
            }
        });
    } finally {
        fnFinished = true;
    }
}

fn();
drainJobQueue();
assertEq(g.hit, true);
assertEq(fnFinished, false);
