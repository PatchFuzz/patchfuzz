




load(libdir + "asserts.js");

let g = newGlobal({newCompartment: true});
g.eval(`\
    function f1() {}        
    function f2() {}        
    function f3() {}        
                            
    function* gen(          
        name,               
        schema = f1(),      
        timeToLive = f2(),  
        lucidity = f3()     
    ) {                     
    }                       
`);

let dbg = Debugger(g);
let log = [];
dbg.onEnterFrame = frame => {
    frame.onStep = () => {
        let line = frame.script.getOffsetLocation(frame.offset).lineNumber;
        if (log.length == 0 || line != log[log.length - 1]) {
            log.push(line);
        }
    };
};

g.gen(0);
assertDeepEq(log, [5, 7, 1, 8, 2, 9, 3, 10]);
