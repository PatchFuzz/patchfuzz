


var g = newGlobal({newCompartment: true});
g.eval(`function f() {
         debugger;              
         var x = 0;             
         try {                  
           x = 1;               
           throw 'something';   
         } catch (e) {          
           x = 2;               
         } finally {            
           x = 3;               
         }                      
         x = 4;                 
       }`);                     

var dbg = Debugger(g);

let foundLines = '';

dbg.onDebuggerStatement = function(frame) {
  let debugLine = frame.script.getOffsetLocation(frame.offset).lineNumber;
  frame.onStep = function() {
    
    let foundLine = this.script.getOffsetLocation(this.offset).lineNumber;
    if (foundLine != debugLine && this.script.getLineOffsets(foundLine).indexOf(this.offset) >= 0) {
      foundLines += "," + (foundLine - debugLine);
    }
  };
};

g.f();

assertEq(foundLines, ",1,2,3,4,5,6,7,8,10,11");
