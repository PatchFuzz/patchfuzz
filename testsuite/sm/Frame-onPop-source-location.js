


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onEnterFrame = frame => {
    if (frame.type === "global") {
        return;
    }
    frame.onPop = c => {
        if (c.yield !== true) {
            const data = frame.script.getOffsetMetadata(frame.offset);
            g.log.push(`pop(${data.lineNumber}:${data.columnNumber})`);
        }
    };
};
g.evaluate(`                 
this.log = [];               
function A() {               
    log.push("A");           
    if (log === null) {      
        throw "fail";        
    }                        
}                            
function* B() {              
    log.push("B");           
    if (log === null) {      
        throw "fail";        
    }                        
}                            
async function C() {         
    log.push("C");           
    if (log === null) {      
        throw "fail";        
    }                        
}                            
let D = async () => {        
    log.push("D");           
    if (log === null) {      
        throw "fail";        
    }                        
};                           
class E extends class {} {   
    constructor() {          
        log.push("E");       
        super();             
        if (log === null) {  
            throw "fail";    
        }                    
    }                        
}                            
A();
for (let x of B()) {}
C();
D();
new E();
`);
assertEq(g.log.join(","), "A,pop(8:0),B,pop(14:0),C,pop(20:0),D,pop(26:0),E,pop(27:16),pop(34:4)");
