let g = newGlobal({newCompartment: true});
g.eval(`\
function* nums() {      
    yield 1;            
    yield 2;            
}                       
function f() {          
    let gen = nums();   
    gen.next();         
    gen.next();         
    gen.next();         
}                       
`);

let log = [];
let previousLine = -1;
let dbg = new Debugger(g);
dbg.onEnterFrame = frame => {
    frame.onStep = () => {
        let line = frame.script.getOffsetLocation(frame.offset).lineNumber;
        if (previousLine != line) { 
            log.push(line);
            previousLine = line;
        }
    };
};

g.f();
print(log.join(" "), "5 6 1 6 7 1 2 7 8 2 3 8 9 3 4 9 10");
