

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("(" + function () {
  dbg = new Debugger(debuggeeGlobal);
} + ")();");
var myObj = { p1: 'a', }
try {
  with(myObj) {
    do {
      throw value;
    } while(false);
  }
} catch(e) {
  
}

try {
  if(!(p1 === 1)) { }
} catch (e) {
  
}
