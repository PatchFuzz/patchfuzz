var global = newGlobal({ newCompartment: true });
var dbg = Debugger(global);

dbg.onDebuggerStatement = frame => {
  let caught = false;

  try {
    frame.script.getPossibleBreakpoints({ line: 1, maxColumn: 2147483648 });
  } catch (e) {
    caught = true;
    print(e.message.includes("valid range"), true);
  }
  print(caught, true);

  caught = false;
  try {
    frame.script.getPossibleBreakpoints({ line: 1, minColumn: 2147483648 });
  } catch (e) {
    caught = true;
    print(e.message.includes("valid range"), true);
  }
  print(caught, true);
};

global.eval(`debugger;`);

