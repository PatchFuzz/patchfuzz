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
print(function () { f.type; }, Error);
print(function () { f.this; }, Error);
print(function () { f.older; }, Error);
print(function () { f.callee; }, Error);
print(function () { f.constructing; }, Error);
print(function () { f.arguments; }, Error);
