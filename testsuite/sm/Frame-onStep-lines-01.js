

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);






var doSingleStep = true;
var offsets;
dbg.onDebuggerStatement = function (frame) {
    var script = frame.script;
    offsets = script.getAllOffsets();
    print("debugger line: " + script.getOffsetLocation(frame.offset).lineNumber);
    print("original lines: " + JSON.stringify(Object.keys(offsets)));
    if (doSingleStep) {
	frame.onStep = function onStepHandler() {
	    var line = script.getOffsetLocation(this.offset).lineNumber;
	    delete offsets[line];
	};
    }
};

g.eval(
       'function t(a, b, c) {                \n' +
       '    debugger;                        \n' +
       '    var x = a;                       \n' +
       '    x += b;                          \n' +
       '    if (x < 10)                      \n' +
       '        x -= c;                      \n' +
       '    return x;                        \n' +
       '}                                    \n'
       );


g.eval('t(1,2,3)');
assertEq(Object.keys(offsets).length, 1);



g.eval('t(10,20,30)');
assertEq(Object.keys(offsets).length, 2);




doSingleStep = false;
g.eval('t(0, 0, 0)');
assertEq(Object.keys(offsets).length, 7);
doSingleStep = true;



g.eval(
       'debugger;                        \n' +
       'var a=1, b=2, c=3;               \n' +
       'var x = a;                       \n' +
       'x += b;                          \n' +
       'if (x < 10)                      \n' +
       '    x -= c;                      \n'
       );
print("final lines: " + JSON.stringify(Object.keys(offsets)));
assertEq(Object.keys(offsets).length, 1);



g.evaluate(
           'debugger;                        \n' +
           'var a=1, b=2, c=3;               \n' +
           'var x = a;                       \n' +
           'x += b;                          \n' +
           'if (x < 10)                      \n' +
           '    x -= c;                      \n'
           );
print("final lines: " + JSON.stringify(Object.keys(offsets)));
assertEq(Object.keys(offsets).length, 1);
