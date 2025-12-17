var g = newGlobal({newCompartment: true});




g.eval(`function f() {
  debugger;                   
  if(false) {                 
    for(var b=0; b<0; b++) {  
      c = 2;                  
    }                         
  }                           
}                             
`);

var dbg = Debugger(g);

let debugLine;
let foundLine;

dbg.onDebuggerStatement = function(frame) {
  debugLine = frame.script.getOffsetLocation(frame.offset).lineNumber;
  frame.onPop = function(c) {
    foundLine = this.script.getOffsetLocation(this.offset).lineNumber;
  };
};

g.eval("f();\n");


print(foundLine == debugLine + 6, true);
