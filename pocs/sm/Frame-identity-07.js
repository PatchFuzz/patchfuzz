let g = newGlobal({newCompartment: true});
g.eval(`
    function* count(n) {
        if (n > 0) {
            for (let x of count(n - 1))
                yield x;
            yield n;
        }
    }
`);

let log = "";
let dbg = Debugger(g);
let nextId = 0;
function mark(frame) {
    if (frame.id === undefined)
        frame.id = nextId++;
}
dbg.onEnterFrame = frame => {
    mark(frame);
    log += frame.id + "[";
    frame.onPop = completion => {
        mark(frame);
        log += "]" + frame.id;
    };
};


let j = 0;
for (let k of g.count(5)) {
    print(k, ++j);
    log += " ";
}

print(log,
         
         
         
         
         "0[]0" +
         
         
         
         
         "0[1[]11[2[]22[3[]33[4[]44[5[]55[]5]4]3]2]1]0 " +
         "0[1[2[3[4[]4]3]2]1]0 " +
         "0[1[2[3[]3]2]1]0 " +
         "0[1[2[]2]1]0 " +
         "0[1[]1]0 " +
         "0[]0");
