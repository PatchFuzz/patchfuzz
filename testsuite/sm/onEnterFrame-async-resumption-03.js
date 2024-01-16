


let g = newGlobal({newCompartment: true});
g.eval(`async function f(x) { await x; }`);

let dbg = new Debugger(g);
function test(when) {
    let hits = 0;
    dbg.onEnterFrame = frame => {
        if (frame.type == "call" && frame.callee.name === "f") {
            if (hits++ == when) {
                return {return: "exit"};
            }
        }
    };

    let result = undefined;
    let finished = false;
    g.f("hello").then(value => { result = value; finished = true; });
    drainJobQueue();
    assertEq(finished, true);
    assertEq(hits, when + 1);
    assertEq(result, "exit");
}



test(1);  
