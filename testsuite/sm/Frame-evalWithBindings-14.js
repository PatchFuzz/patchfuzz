var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);


var exceptionCount = 0;
dbg.onDebuggerStatement = function (frame) {
    var x = frame.evalWithBindings("throw 'haha'", { rightSpelling: 4 }).throw;
    assertEq(x, "haha");
};
dbg.onExceptionUnwind = function (frame, exc) {
    ++exceptionCount;
    if (exceptionCount == 1) {
	var y = frame.evalWithBindings("throw 'haha2'", { rightSpelling: 2 }).throw;
	assertEq(y, "haha2");
    } else {
	assertEq(frame.evalWithBindings("rightSpelling + three", { three : 3 }).return, 5);
    }
};
g.eval("(function () { var rightSpelling = 7; debugger; })();");
assertEq(exceptionCount, 2);
