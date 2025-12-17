var dbgGlobal = newGlobal({ newCompartment: true });
var dbg = new dbgGlobal.Debugger();
dbg.addDebuggee(this);

function test() {
  
  
  
  dbg.getNewestFrame();

  
  
  dbgGlobal.print(1,2);
}

stackTest(test, {
  
  
  expectExceptionOnFailure: false
});
