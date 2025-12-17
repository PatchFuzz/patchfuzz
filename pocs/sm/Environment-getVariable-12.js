var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    hits++;
    print(frame.environment.parent.getVariable('y'), true);
};

g.eval("var g;" +
       "function f(x) {" +
       "  { let y = x; " +
       "    if (x)" +
       "      g = function() { eval('debugger') };" +
       "    else" +
       "      g();" +
       "  }" +
       "}" +
       "f(true);" +
       "f(false);");
print(hits, 1);

var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    hits++;
    print(frame.environment.parent.getVariable('y'), 1);
    print(frame.environment.parent.names().indexOf('z'), -1);
};

g.eval("var g;" +
       "{ let y = 1; " +
       "  g = function () { eval(''); debugger; };" +
       "  { let z = 2; " +
       "    g();" +
       "  }"+
       "}");
print(hits, 1);

var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    hits++;
    var e = frame.older.environment.parent;
    print(e.getVariable('z'), true);
    e = e.parent;
    print(e.getVariable('y'), true);
};

g.eval("var g;" +
       "function h() { eval(''); debugger; };" +
       "for (var x of [true, false]) {" +
       "  { let y = x; " +
       "    { let z = x; " +
       "      if (x)" +
       "        g = function () { print(z); h() };" +
       "      else" +
       "        g();" +
       "    }" +
       "  }" +
       "}");
print(hits, 1);
