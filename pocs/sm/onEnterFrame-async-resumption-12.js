let g = newGlobal({newCompartment: true});
g.eval(`
    async function f() {
        return "ok";
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

g.f().then(x => {
    print(hits, 1);
    print(x, "ok");
});
