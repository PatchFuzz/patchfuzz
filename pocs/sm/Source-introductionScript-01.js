var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gDO = dbg.addDebuggee(g);
var log;


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  var source = frame.script.source;
  var introducer = frame.older;
  print(source.introductionScript, introducer.script);
  print(source.introductionOffset, introducer.offset);
};
log = '';
g.eval('\n\neval("\\n\\ndebugger;");');
print(log, 'd');


var introducer, introduced;
dbg.onDebuggerStatement = function (frame) {
  log += 'de1';
  introducer = frame.script;
  dbg.onDebuggerStatement = function (frame) {
    log += 'de2';
    introduced = frame.script.source;
  };
};
log = '';
g.evaluate('debugger; eval("\\n\\ndebugger;");', { lineNumber: 1812 });
print(log, 'de1de2');
print(introduced.introductionScript, introducer);
print(introducer.getOffsetLocation(introduced.introductionOffset).lineNumber, 1812);


dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  var source = frame.script.source;
  var introducer = frame.older;
  print(source.introductionScript, introducer.script);
  print(source.introductionOffset, introducer.offset);
};
log = '';
g.eval('\n\n(0,eval)("\\n\\ndebugger;");');
print(log, 'd');


var introducer, introduced;
dbg.onDebuggerStatement = function (frame) {
  log += 'de1';
  introducer = frame.script;
  dbg.onDebuggerStatement = function (frame) {
    log += 'de2';
    introduced = frame.script.source;
  };
};
log = '';
g.evaluate('debugger; (0,eval)("\\n\\ndebugger;");', { lineNumber: 1066 });
print(log, 'de1de2');
print(introduced.introductionScript, introducer);
print(introducer.getOffsetLocation(introduced.introductionOffset).lineNumber, 1066);


dbg.onDebuggerStatement = function (frame) {
  log += 'o';
  var outerScript = frame.script;
  var outerOffset = frame.offset;
  dbg.onDebuggerStatement = function (frame) {
    log += 'i';
    var source = frame.script.source;
    print(source.introductionScript, outerScript);
    print(outerScript.getOffsetLocation(source.introductionOffset).lineNumber,
             outerScript.getOffsetLocation(outerOffset).lineNumber);
  };
};
log = '';
g.eval('\n\n\ndebugger; Function("debugger;")()');
print(log, 'oi');



var introducer;
dbg.onDebuggerStatement = function (frame) {
  log += 'F2';
  introducer = frame.script;
};
log = '';
var fDO = gDO.executeInGlobal('debugger; Function("origami;")', { lineNumber: 1685 }).return;
var source = fDO.script.source;
print(log, 'F2');
print(source.introductionScript, introducer);
print(introducer.getOffsetLocation(source.introductionOffset).lineNumber, 1685);



dbg.onDebuggerStatement = function (frame) {
  log += 'x';
  var source = frame.script.source;
  print(source.introductionScript, undefined);
  print(source.introductionOffset, undefined);
};
log = '';
g.eval('debugger;'); 
print(log, 'x');



dbg.onDebuggerStatement = function (frame) {
  log += 'x';
  var source = frame.script.source;
  print(source.introductionScript, undefined);
  print(source.introductionOffset, undefined);
};
log = '';
g.eval('evaluate("debugger;", { lineNumber: 1729 });');
print(log, 'x');
