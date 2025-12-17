var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var exc, SEp;
dbg.onDebuggerStatement = function (frame) {
    exc = frame.eval("#$@!").throw;
    SEp = frame.eval("SyntaxError.prototype").return;
};
g.eval("debugger;");
print(exc.proto, SEp);
