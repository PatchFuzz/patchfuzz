

var g = newGlobal({newCompartment: true});

g.eval('function bob() { return "bob"; }');


evaluate(`function lit(x) {     
  debugger;                     
  switch(x) {                   
  case "nope":                  
    break;                      
  case "bob":                   
    break;                      
  }                             
}`, {lineNumber: 1, global: g});


evaluate(`function nonlit(x) {  
  debugger;                     
  switch(x) {                   
  case bob():                   
    break;                      
  }                             
}`, {lineNumber: 1, global: g});

var dbg = Debugger(g);
var badStep = false;

function test(s, okLine) {
  dbg.onDebuggerStatement = function(frame) {
    frame.onStep = function() {
      let thisLine = this.script.getOffsetLocation(this.offset).lineNumber;
      
      if (thisLine > 3) {
        assertEq(thisLine, okLine)
        frame.onStep = undefined;
      }
    };
  };
  g.eval(s);
}

test("lit('bob');", 7);

test("nonlit('bob');", 4);
