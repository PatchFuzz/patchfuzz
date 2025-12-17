var g = newGlobal({newCompartment: true});
g.log = "";
g.eval(`
function* range(stop) {               
    for (let i = 0; i < stop; i++) {  
        yield i;                      
        log += " ";                   
    }                                 
    log += "^";                       
}                                     
`);


let previousLine = -1;
let dbg = new Debugger(g);
dbg.onEnterFrame = frame => {
    frame.onStep = function () {
        print(this, frame);
        let line = frame.script.getOffsetLocation(frame.offset).lineNumber;
        if (previousLine != line) {
            g.log += line; 
            previousLine = line;
        }
    };
    dbg.onEnterFrame = undefined;
};


for (let value of g.range(3)) {
    g.log += "*";
}

print(g.log, "234*5 34*5 34*5 37^8");
