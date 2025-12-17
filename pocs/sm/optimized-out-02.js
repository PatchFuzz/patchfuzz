var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval(`
function outer(unaliasedArg) {
  var unaliasedVar = unaliasedArg + 42;
  var aliasedVar = unaliasedArg;

  inner();
  return unaliasedVar; 

  function inner() {
    aliasedVar++;
  }
}
`);

var log = "";
for (var script of dbg.findScripts()) {
  if (script.displayName === "inner") {
    script.setBreakpoint(0, { hit: function(frame) {
      
      var outerEnv = frame.environment;

      
      
      outerEnv = frame.older.environment;
      log += outerEnv.getVariable('unaliasedArg'); 
      log += outerEnv.getVariable('unaliasedVar'); 
      log += outerEnv.getVariable('aliasedVar');   
    }});
  }
}

g.outer(42);
print(log, "428442");
