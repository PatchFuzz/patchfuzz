var g = newGlobal({newCompartment: true});
g.a = ".";

var dbg = Debugger(g);
var nestCount = 0, N = 9;
var log = "";
dbg.onEnterFrame = function (frame) {
    print(frame.type, "eval");
    if (nestCount < N) {
        log += '(';
        nestCount++;
        var a = frame.eval("a").return;
        log += a;
        nestCount--;
        log += ')';
    }
};

print(g.eval("a"), ".");
print(log, Array(N + 1).join("(") + Array(N + 1).join(".)"));
