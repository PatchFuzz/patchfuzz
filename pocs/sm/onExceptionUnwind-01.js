;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hit = false;
dbg.onExceptionUnwind = function (frame, exc) {
    
    
    print(arguments.length, 2);
    print(frame instanceof Debugger.Frame, true);
    if (!hit) {
        print(exc, 101);
        print(frame.type, "call");
        print(frame.callee.name, "f");
        print(frame.older.type, "eval");
        hit = true;
    }
};

g.eval("function f() { throw 101; }");
print(function () { g.eval("f();"); }, 101);
print(hit, true);
