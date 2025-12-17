var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);

function test(scriptText, expectedLineCount) {
  let found = false;

  dbg.onNewScript = function(script, global) {
    print(script.lineCount, expectedLineCount);
    found = true;
  };

  g.evaluate(scriptText);
  print(found, true);
}

src = 'var a = (function(){\n' + 
      'var b = 9;\n' +           
      'console.log("x", b);\n'+  
      'return b;\n' +            
      '})();';                   
test(src, 5);
