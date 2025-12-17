const g = newGlobal({newCompartment: true});
const dbg = new Debugger;
dbg.addDebuggee(g);

let globalScript;
dbg.onNewScript = script => { globalScript = script };




g.evaluate(`g();
function f() {
  for (var i = 0; i < 10; i++) {
    g();
  }
}

function g() {
  return 3;
}

f();
`, {
  fileName: "foobar.js",
  lineNumber: 3,
  columnNumber: 42,
});

let onNewScriptCalls = 0;
dbg.onNewScript = script => { onNewScriptCalls++; };

const reparsedScript = globalScript.source.reparse();

print(onNewScriptCalls, 0);

print(reparsedScript.url, "foobar.js");
print(reparsedScript.startLine, 3);
print(reparsedScript.startColumn, 42);


function getBreakpointPositions(script) {
  const offsets = script.getPossibleBreakpoints();
  const str = offsets.map(({ lineNumber, columnNumber }) => `${lineNumber}:${columnNumber}`).toString();
  const childPositions = script.getChildScripts().map(getBreakpointPositions);
  return str + childPositions.toString();
}
print(getBreakpointPositions(globalScript), getBreakpointPositions(reparsedScript));
