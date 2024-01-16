














var g = newGlobal({newCompartment: true});
g.eval(`\
async function outer() {                                
    return (await inner()) + (await inner()) + "!";     
}                                                       
async function inner() {                                
    return (await leaf()) + (await leaf());             
}                                                       
async function leaf() {                                 
    return (await Promise.resolve("m"));                
}                                                       
`);


let previousLine = -1;
let dbg = new Debugger(g);
let log = "";
let asyncStack = [];

dbg.onEnterFrame = frame => {
    assertEq(frame.type, "call");

    
    
    if (!frame.seen) {
        frame.seen = true;
        asyncStack.push(frame);
        log += "(";
    }

    frame.onStep = () => {
        
        
        
        
        
        
        
        
        
        
        if (frame !== asyncStack[asyncStack.length - 1])
            return;

        let line = frame.script.getOffsetLocation(frame.offset).lineNumber;
        if (previousLine != line) {
            log += line; 
            previousLine = line;
        }
    };

    frame.onPop = completion => {
        
        
        
        
        
        if (!completion.await) {
            
            assertEq(asyncStack.pop(), frame);
            log += ")";
        }
    };
};


let result;
g.outer().then(v => { result = v; });
drainJobQueue();

assertEq(result, "mmmm!");
assertEq(log, "(12(45(789)5(789)56)2(45(789)5(789)56)23)");
