

let g = newGlobal({newCompartment: true});



g.eval(`function f() {
  let x = 0;
  debugger;                     
  for(;;) {                     
    if (x++ == 1) break;        
  }                             
  debugger;                     
}`);

let dbg = Debugger(g);

function test(s, expected) {
  let result = '';

  dbg.onDebuggerStatement = function(frame) {
    
    dbg.onDebuggerStatement = function(frame) {
      frame.onStep = undefined;
    };

    let debugLine = frame.script.getOffsetLocation(frame.offset).lineNumber;
    frame.onStep = function() {
      
      let lineNo = this.script.getOffsetLocation(this.offset).lineNumber;
      if (this.script.getLineOffsets(lineNo).indexOf(this.offset) < 0) {
        return undefined;
      }

      let delta = this.script.getOffsetLocation(this.offset).lineNumber - debugLine;
      result += delta;
    };
  };
  g.eval(s);
  assertEq(result, expected);
}

test('f()', '2124');
