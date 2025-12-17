var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var global = dbg.addDebuggee(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var obj = frame.arguments[0];
    var expected = frame.arguments[1];
    print(frame.evalWithBindings("obj.toString()", {obj: obj}).return, expected);
    hits++;
};

g.eval("function f(obj, expected) { debugger; }");

g.eval("f(new Number(-0), '0');");
g.eval("f(new String('ok'), 'ok');");
g.eval("f(Symbol('still ok'), 'Symbol(still ok)');");
g.eval("f(Object(Symbol('still ok')), 'Symbol(still ok)');");
g.eval("f({toString: function () { return f; }}, f);");
print(hits, 5);
