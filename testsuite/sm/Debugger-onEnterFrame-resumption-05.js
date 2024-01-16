















load(libdir + "asserts.js");

var debuggee = newGlobal({newCompartment: true});
var dbg = Debugger(debuggee);
var hits, savedFrame;


dbg.onEnterFrame = function (frame) {
    hits++;
    if (frame.constructing) {
        savedFrame = frame;
        assertEq(savedFrame.onStack, true);
        return undefined;
    }
    return undefined;
};
hits = 0;
debuggee.hits = 0;
savedFrame = undefined;
assertEq(typeof debuggee.eval("function f(){ hits++; } f.prototype = {}; new f;"), "object");
assertEq(hits, 2);
assertEq(savedFrame.onStack, false);
assertEq(debuggee.hits, 1);


dbg.onEnterFrame = function (frame) {
    hits++;
    if (frame.constructing) {
        savedFrame = frame;
        assertEq(savedFrame.onStack, true);
        return { return: "pass" };
    }
    return undefined;
};
hits = 0;
debuggee.hits = 0;
savedFrame = undefined;
assertEq(typeof debuggee.eval("function f(){ hits++; } f.prototype = {}; new f;"), "object");
assertEq(hits, 2);
assertEq(savedFrame.onStack, false);
assertEq(debuggee.hits, 0);


dbg.onEnterFrame = function (frame) {
    hits++;
    if (frame.constructing) {
        savedFrame = frame;
        assertEq(savedFrame.onStack, true);
        return { throw: "pass" };
    }
    return undefined;
};
hits = 0;
debuggee.hits = 0;
savedFrame = undefined;
assertThrowsValue(function () {
                      debuggee.eval("function f(){ hits++ } f.prototype = {}; new f;");
                  }, "pass");
assertEq(hits, 2);
assertEq(savedFrame.onStack, false);
assertEq(debuggee.hits, 0);


debuggee.eval("function g() { var result = new f; g_hits++; return result; }");
dbg.onEnterFrame = function (frame) {
    hits++;
    if (frame.constructing) {
        savedFrame = frame;
        assertEq(savedFrame.onStack, true);
        return { return: "pass" };
    }
    return undefined;
};
hits = 0;
debuggee.hits = 0;
debuggee.g_hits = 0;
savedFrame = undefined;
assertEq(typeof debuggee.eval("g();"), "object");
assertEq(hits, 3);
assertEq(savedFrame.onStack, false);
assertEq(debuggee.hits, 0);
assertEq(debuggee.g_hits, 1);
