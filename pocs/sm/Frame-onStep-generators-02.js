;

let g = newGlobal({newCompartment: true});
g.eval(`\
function* z() {         
    yield 1;            
    yield 2;            
}                       
function f() {          
    let gen = z();      
    gen.next();         
    gen.throw("fit");   
}                       
`);

let log = "";
let previousLine = -1;
let dbg = new Debugger(g);
dbg.onEnterFrame = frame => {
    log += frame.callee.name + "{";
    frame.onStep = () => {
        let line = frame.script.getOffsetLocation(frame.offset).lineNumber;
        if (previousLine != line) { 
            log += line;
            previousLine = line;
        }
    };
    frame.onPop = completion => {
        if ("throw" in completion)
            log += "!";
        log += "}";
    }
};

print(() => g.f(), "fit");



print(log, "f{56z{1}67z{12}78z{2!}!}");
