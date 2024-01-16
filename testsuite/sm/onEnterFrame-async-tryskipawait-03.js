


load(libdir + "array-compare.js");

let g = newGlobal({ newCompartment: true });
let dbg = new Debugger(g);

let log = [];
g.log = log;

g.eval(`
    async function f() {
        log.push("START");
        await {};
        log.push("MIDDLE");
        await {};
        log.push("END");
    }
`);

function neverCalled(e) {
    
    
    
    print("Error: " + e + "\nstack:\n" + e.stack);
    quit(1);
}

g.f().then(() => {
    assertEq(arraysEqual(log, [
        "START",
        "enter: f",
        "MIDDLE",
        "enter: f", 
        "END",
    ]), true);
}).catch(neverCalled);

dbg.onEnterFrame = frame => {
    log.push(`enter: ${frame.callee.name}`);
};
