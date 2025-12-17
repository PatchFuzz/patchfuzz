let g = newGlobal({newCompartment: true});

let dbg = Debugger(g);
let lines = [0, 0, 0, 0, 0];
dbg.onDebuggerStatement = function (frame) {
  let dLine = frame.script.getOffsetLocation(frame.offset).lineNumber;
  lines[0] = 1;
  frame.onStep = function () {
    lines[frame.script.getOffsetLocation(this.offset).lineNumber - dLine] = 1;
  };
}

let s = `
      debugger;                 
      if (1 !== 1) {            
        print("dead code!?");   
      }                         
`;
g.eval(s);
print(lines.join(""), "11001");
