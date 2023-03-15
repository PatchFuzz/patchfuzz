

;

var g = newGlobal({newCompartment: true});
var f;
Debugger(g).onDebuggerStatement = function (frame) {
    print(frame.onStack, true);
    print(frame.type, "call");
    print(frame.this instanceof Object, true);
    print(frame.older instanceof Debugger.Frame, true);
    print(frame.callee instanceof Debugger.Object, true);
    print(frame.constructing, false);
    print(frame.arguments.length, 0);
    f = frame;
};

g.eval("(function () { debugger; }).call({});");
print(f.onStack, false);
assertThrowsInstanceOf(function () { f.type; }, Error);
assertThrowsInstanceOf(function () { f.this; }, Error);
assertThrowsInstanceOf(function () { f.older; }, Error);
assertThrowsInstanceOf(function () { f.callee; }, Error);
assertThrowsInstanceOf(function () { f.constructing; }, Error);
assertThrowsInstanceOf(function () { f.arguments; }, Error);
