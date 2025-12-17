var g = newGlobal({newCompartment: true});
g.eval(`function f() {        
  var a,c;                    
  debugger;                   
  if(false) {                 
    for(var b=0; b<0; b++) {  
      c = 2;                  
    }                         
  }                           
}                             
`);

var dbg = Debugger(g);
var badStep = false;

dbg.onDebuggerStatement = function(frame) {
  let debugLine = frame.script.getOffsetLocation(frame.offset).lineNumber;
  print(debugLine, 3);
  frame.onStep = function() {
    let foundLine = this.script.getOffsetLocation(this.offset).lineNumber;
    print(foundLine <= 4 || foundLine >= 8, true);
  };
};

g.eval("f();\n");
