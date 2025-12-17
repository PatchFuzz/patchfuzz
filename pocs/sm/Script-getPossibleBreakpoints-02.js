var global = newGlobal({newCompartment: true});
var dbg = Debugger(global);
dbg.onDebuggerStatement = onDebuggerStatement;

global.eval(`
  debugger;
  function f() {
    var o = {};         

    o.a; o.a; o.a; o.a; 
    o.a; o.a;           
    o.a; o.a; o.a;      
    o.a;                
  }                     
`);

function onDebuggerStatement(frame) {
  const fScript = frame.script.getChildScripts()[0];

  const allBreakpoints = fScript.getPossibleBreakpoints();
  print(allBreakpoints.length, 12);

  print({ line: 4 }, 1);
  print({ line: 5 }, 0);
  print({ line: 6 }, 4);
  print({ line: 7 }, 2);
  print({ line: 8 }, 3);
  print({ line: 9 }, 1);
  print({ line: 10 }, 1);

  print({ line: 6, minColumn: 8 }, 3);
  print({ line: 6, maxColumn: 17 }, 3);
  print({ line: 6, minColumn: 8, maxColumn: 17 }, 2);
  print({ line: 1, minLine: 1 }, "line", "not allowed alongside 'minLine'/'maxLine'");
  print({ line: 1, maxLine: 1 }, "line", "not allowed alongside 'minLine'/'maxLine'");
  print({ line: "1" }, "line", "not an integer");

  print({ minLine: 9 }, 2);
  print({ minLine: 9, minColumn: 1 }, 2);
  print({ minLine: 9, minColumn: 9 }, 1);
  print({ minLine: "1" }, "minLine", "not an integer");
  print({ minColumn: 2 }, "minColumn", "not allowed without 'line' or 'minLine'");
  print({ minLine: 1, minColumn: "2" }, "minColumn", "not a positive integer in valid range");
  print({ minLine: 1, minColumn: 0 }, "minColumn", "not a positive integer in valid range");
  print({ minLine: 1, minColumn: -1 }, "minColumn", "not a positive integer in valid range");

  print({ maxLine: 7 }, 5);
  print({ maxLine: 7, maxColumn: 1 }, 5);
  print({ maxLine: 7, maxColumn: 9 }, 6);
  print({ maxLine: "1" }, "maxLine", "not an integer");
  print({ maxColumn: 2 }, "maxColumn", "not allowed without 'line' or 'maxLine'");
  print({ maxLine: 1, maxColumn: "2" }, "maxColumn", "not a positive integer in valid range");
  print({ maxLine: 1, maxColumn: 0 }, "maxColumn", "not a positive integer in valid range");
  print({ maxLine: 1, maxColumn: -1 }, "maxColumn", "not a positive integer in valid range");

  print({ minLine: 6, maxLine: 8 }, 6);
  print({ minLine: 6, minColumn: 9, maxLine: 8 }, 5);
  print({ minLine: 6, maxLine: 8, maxColumn: 9 }, 7);
  print({ minLine: 6, minColumn: 9, maxLine: 8, maxColumn: 9 }, 6);

  print({
    minOffset: fScript.getPossibleBreakpoints({ line: 6 })[3].offset,
  }, 8);
  print({ minOffset: "1" }, "minOffset", "not an integer");
  print({
    maxOffset: fScript.getPossibleBreakpoints({ line: 6 })[3].offset,
  }, 4);
  print({ maxOffset: "1" }, "maxOffset", "not an integer");
  print({
    minOffset: fScript.getPossibleBreakpoints({ line: 6 })[2].offset,
    maxOffset: fScript.getPossibleBreakpoints({ line: 7 })[1].offset,
  }, 3);

  function print(query, field, message) {
    try {
      fScript.getPossibleBreakpoints(query);
      print(false, true);
    } catch (err) {
      print(err.message, `getPossibleBreakpoints' '${field}' is ${message}`);
    }
  }

  function print(query, count) {
    print(fScript.getPossibleBreakpoints(query).length, count);
  }
};
