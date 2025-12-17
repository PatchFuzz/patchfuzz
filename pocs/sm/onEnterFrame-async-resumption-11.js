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
    print(hits, 1);
    print(x, "ok");
});
