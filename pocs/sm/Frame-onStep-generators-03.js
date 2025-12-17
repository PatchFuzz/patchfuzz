;

let g = newGlobal({newCompartment: true});
g.eval(`\
function* z() {         
    try {               
        yield 1;        
    } catch (exc) {     
        yield 2;        
    }                   
}                       
function f() {          
    let gen = z();      
    gen.next();         
    gen.throw("fit");   
}                       
`);

let log = [];
let previousLine = -1;
let dbg = new Debugger(g);
dbg.onEnterFrame = frame => {
    log.push(frame.callee.name + " in");
    frame.onStep = () => {
        let line = frame.script.getOffsetLocation(frame.offset).lineNumber;
        if (previousLine != line) { 
            log.push(line);
            previousLine = line;
        }
    };
    frame.onPop = completion => {
        log.push(frame.callee.name + " out");
    };
};

g.f();
print(
    log.join(", "),
    "f in, 8, 9, z in, 1, z out, " +
    "9, 10, z in, 1, 2, 3, z out, " +
    "10, 11, z in, 3, 2, 4, 5, z out, " +  
    "11, 12, f out"
);
