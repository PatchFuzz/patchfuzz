var g = newGlobal({newCompartment: true});
var N = g.N = 12; 
print(N % 2, 0);
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var n = frame.eval("n").return;
    if (n === 0) {
        for (var i = 0; i <= N; i++) {
            print(frame.type, 'call');
            print(frame.callee.name, i % 2 === 0 ? 'even' : 'odd');
            print(frame.eval("n").return, i);
            frame = frame.older;
        }
        print(frame.type, 'call');
        print(frame.callee.name, undefined);
        frame = frame.older;
        print(frame.type, 'eval');
        hits++;
    }
};

var result = g.eval("(" + function () {
        function odd(n) { return n > 0 && !even(n - 1); }
        function even(n) { debugger; return n == 0 || !odd(n - 1); }
        return even(N);
    } + ")();");
print(result, true);
print(hits, 1);
