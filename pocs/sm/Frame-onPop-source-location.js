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
print(g.log.join(","), "A,pop(8:1),B,pop(14:1),C,pop(20:1),D,pop(26:1),E,pop(27:17),pop(34:5)");
