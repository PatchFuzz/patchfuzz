

load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
g.eval("function f() { debugger; }");
var dbg = new Debugger(g);

var hits = 0;
function test(usingApply) {
    dbg.onDebuggerStatement = function (frame) {
        var fn = frame.arguments[0];
        var cv = usingApply ? fn.apply(null, [9, 16]) : fn.call(null, 9, 16);
        assertEq(Object.keys(cv).join(","), "return");
        assertEq(Object.getPrototypeOf(cv), Object.prototype);
        assertEq(cv.return, 25);

        cv = usingApply ? fn.apply(null, ["hello ", "world"]) : fn.call(null, "hello ", "world");
        assertEq(Object.keys(cv).join(","), "return");
        assertEq(cv.return, "hello world");

        
        assertEq((usingApply ? fn.apply(null, [1, 5, 100]) : fn.call(null, 1, 5, 100)).return, 6);
        assertEq((usingApply ? fn.apply(null, []) : fn.call(null)).return, NaN);
        assertEq((usingApply ? fn.apply() : fn.call()).return, NaN);

        
        assertThrowsInstanceOf(function () { usingApply ? fn.apply({}, []) : fn.call({}); },
                               TypeError);
        assertThrowsInstanceOf(function () { usingApply ? fn.apply(null, [{}]) : fn.call(null, {}); },
                               TypeError);
        hits++;
    };
    g.eval("f(function (a, b) { return a + b; });");

    
    
    dbg.onDebuggerStatement = function (frame) {
        assertEq((usingApply ? frame.arguments[0].apply(null, ['one', 'two'])
                             : frame.arguments[0].call(null, 'one', 'two')).return,
                 2);
        hits++;
    };
    g.eval("f(function () { return arguments.length; });");

    
    dbg.onDebuggerStatement = function (frame) {
        var lose = frame.arguments[0];
        var cv = usingApply ? lose.apply(null, []) : lose.call(null);
        assertEq(Object.keys(cv).join(","), "throw,stack");
        assertEq(cv.throw, frame.callee);
        hits++;
    };
    g.eval("f(function lose() { throw f; });");
}

test(true);
test(false);
assertEq(hits, 6);
