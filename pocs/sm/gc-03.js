var g = newGlobal({newCompartment: true});
var N = g.N = 3;
var dbg = Debugger(g);

var i = 0;
dbg.onDebuggerStatement = function (frame) {
    frame.arguments[0].id = i++;
};
g.eval("function f(x) { debugger; }");
g.eval("var arr = [], j; for (j = 0; j < N; j++) arr[j] = {};");
g.eval("for (j = 0; j < N; j++) f(arr[j]);");
print(i, N);

gc(); gc();

i = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.arguments[0].id, i++)
}
g.eval("for (j = 0; j < N; j++) f(arr[j]);");
print(i, N);
