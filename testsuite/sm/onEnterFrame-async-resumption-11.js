


let g = newGlobal({newCompartment: true});
g.eval(`
    async function f() {
        throw "ok";
    }
`);

let dbg = new Debugger(g);

let hits = 0;
dbg.onEnterFrame = frame => {
    frame.onPop = () => {
        hits += 1;

        
        
        
        return {return: "FAIL"};
    };
};

g.f().catch(x => {
    assertEq(hits, 1);
    assertEq(x, "ok");
});
