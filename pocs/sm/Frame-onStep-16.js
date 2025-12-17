var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var log;

function test(fnStr) {
  log = '';
  g.eval(fnStr);

  dbg.onDebuggerStatement = function(frame) {
        frame.onStep = function() {
      let {lineNumber, isEntryPoint} = frame.script.getOffsetLocation(frame.offset);
      if (isEntryPoint) {
        log += lineNumber + ' ';
      }
    };
  };

  g.eval("f(23);");
}

test("function f(x) {\n" +    
     "    debugger;\n" +      
     "    return 23 + x;\n" + 
     "}\n");                  
print(log, '3 3 4 ');

test("function f(x) {\n" +    
     "    debugger;\n" +      
     "    return;\n" +        
     "}\n");                  
print(log, '3 4 ');
