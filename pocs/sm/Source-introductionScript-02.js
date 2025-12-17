var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gDO = dbg.addDebuggee(g);
var log = '';

function outerHandler(frame) {
  log += 'o';
  var outerScript = frame.script;

  dbg.onDebuggerStatement = function (frame) {
    log += 'i';
    var source = frame.script.source;
    var introScript = source.introductionScript;
    print(introScript, outerScript);
    print(introScript.getOffsetLocation(source.introductionOffset).lineNumber, 1234);
  };
};

log = '';
dbg.onDebuggerStatement = outerHandler;
g.evaluate('debugger; ["debugger;"].map(eval)', { lineNumber: 1234 });
print(log, 'oi');

log = '';
dbg.onDebuggerStatement = outerHandler;
g.evaluate('debugger; "debugger;".replace(/.*/, eval);',
           { lineNumber: 1234 });
print(log, 'oi');




log = '';
dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.script.source.introductionScript, undefined);
  print(frame.script.source.introductionOffset, undefined);
};
["debugger;"].map(g.eval);
"debugger;".replace(/.*/, g.eval);
print(log, 'dd');
