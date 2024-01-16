




























var bitOfCode = `debugger;                    
                 if(false) {                  
                   for(var b=0; b<0; b++) {   
                      c = 2                   
                    }                         
                 }`;                          

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);

g.eval("function nothing() { }\n");

var log = '';
dbg.onDebuggerStatement = function(frame) {
  let debugLine = frame.script.getOffsetLocation(frame.offset).lineNumber;
  frame.onStep = function() {
    let foundLine = this.script.getOffsetLocation(this.offset).lineNumber;
    if (this.script.getLineOffsets(foundLine).indexOf(this.offset) >= 0) {
      log += (foundLine - debugLine).toString(16);
    }
  };
};

function testOne(name, body, expected) {
  print(name);
  log = '';
  g.eval(`function ${name} () { ${body} }`);
  g.eval(`${name}();`);
  assertEq(log, expected);
}




testOne("testTryFinally",
        `try {
           ${bitOfCode}
         } finally {            
         }                      
         nothing();             
        `, "1689");


testOne("testTryCatch",
        `try {
           ${bitOfCode}
         } catch (e) {          
         }                      
         nothing();             
        `, "189");


testOne("testCatchFinally",
        `try {
           throw new TypeError();
         } catch (e) {
           ${bitOfCode}
         } finally {            
         }                      
         nothing();             
        `, "1689");


testOne("testFinally",
        `try {
         } finally {
           ${bitOfCode}
         }                      
         nothing();             
        `, "178");


testOne("testThen",
        `if (1 === 1) {
           ${bitOfCode}
         } else {               
         }                      
         nothing();             
        `, "189");


testOne("testSwitch",
        `var x = 5;
         switch (x) {
           case 5:
             ${bitOfCode}
         }                      
         nothing();             
        `, "178");
