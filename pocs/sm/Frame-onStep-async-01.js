var g = newGlobal({newCompartment: true});
g.log = "";
g.eval(`                              
async function aloop() {              
    for (let i = 0; i < 3; i++) {     
        await i;                      
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


g.aloop();
drainJobQueue();

print(g.log, "2345 345 345 37^8");
