let g = newGlobal({newCompartment: true});
g.eval(`
    async function af() {
        try {
            return await Promise.resolve("fail");
        } catch (exc) {
            print(exc, "fit");
            return "ok";
        }
    }
`)

let dbg = new Debugger(g);
dbg.onEnterFrame = frame => {
    if (!("hits" in frame)) {
        frame.hits = 1;
    } else if (++frame.hits === 2) {
        
        
        return {throw: "fit"};
    }
};

let p = g.af();
let hits = 0;
p.then(value => {
    result = value;
    hits++;
});
drainJobQueue();
print(hits, 1);
print(result, "ok");

