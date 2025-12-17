var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

dbg.onDebuggerStatement = function(frame) {
  var s = frame.eval('f').return.script;

  
  
  print(s.getLineOffsets(g.line0 + 2).length, 1);
};


function test(code) {
  g.eval('var line0 = Error().lineNumber;\n' +
         'function f() {\n' +   
         code + '\n' +          
         '}\n' +
         'debugger;');
}

test('while (false)\n;');
test('for (;false;)\n;');
test('for (;;) break;\n;');
