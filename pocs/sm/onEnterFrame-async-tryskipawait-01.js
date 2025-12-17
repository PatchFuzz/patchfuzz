;

let g = newGlobal({ newCompartment: true });
let dbg = new Debugger(g);

let log = [];
g.log = log;

g.eval(`
    async function f() {
        log.push("START");
        await Promise.resolve(0);
        log.push("MIDDLE");
        await Promise.resolve(0);
        log.push("END");
    }
`);

function neverCalled(e) {
    
    
    
    print("Error: " + e + "\nstack:\n" + e.stack);
    quit(1);
}

g.f().then(() => {
    print(arraysEqual(log, [
        "START",
        "enter: f",
        "MIDDLE",
        "END",
    ]), true);
}).catch(neverCalled);

dbg.onEnterFrame = frame => {
    log.push(`enter: ${frame.callee.name}`);
};
