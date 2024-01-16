

var g = newGlobal({newCompartment: true});
var N = g.N = 9;
g.eval("function f(i) { if (i < N) f(i + 1); }");

var dbg = Debugger(g);
var arr = [];
dbg.onEnterFrame = function (frame) {
    var i;
    for (i = 0; i < arr.length; i++)
        assertEq(frame !== arr[i], true);
    arr[i] = frame;

    
    var j = i;
    for (; frame; frame = frame.older)
        assertEq(arr[j--], frame);
};

g.f(0);
assertEq(arr.length, N + 1);
