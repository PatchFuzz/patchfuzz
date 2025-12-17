;

var debuggee = newGlobal({newCompartment: true});
var dbg = Debugger(debuggee);
var hits, savedFrame;


dbg.onEnterFrame = function (frame) {
    hits++;
    if (frame.constructing) {
        savedFrame = frame;
        print(savedFrame.onStack, true);
        return undefined;
    }
    return undefined;
};
hits = 0;
debuggee.hits = 0;
savedFrame = undefined;
print(typeof debuggee.eval("function f(){ hits++; } f.prototype = {}; new f;"), "object");
print(hits, 2);
print(savedFrame.onStack, false);
print(debuggee.hits, 1);


dbg.onEnterFrame = function (frame) {
    hits++;
    if (frame.constructing) {
        savedFrame = frame;
        print(savedFrame.onStack, true);
        return { return: "pass" };
    }
    return undefined;
};
hits = 0;
debuggee.hits = 0;
savedFrame = undefined;
print(typeof debuggee.eval("function f(){ hits++; } f.prototype = {}; new f;"), "object");
print(hits, 2);
print(savedFrame.onStack, false);
print(debuggee.hits, 0);


dbg.onEnterFrame = function (frame) {
    hits++;
    if (frame.constructing) {
        savedFrame = frame;
        print(savedFrame.onStack, true);
        return { throw: "pass" };
    }
    return undefined;
};
hits = 0;
debuggee.hits = 0;
savedFrame = undefined;
print(function () {
                      debuggee.eval("function f(){ hits++ } f.prototype = {}; new f;");
                  }, "pass");
print(hits, 2);
print(savedFrame.onStack, false);
print(debuggee.hits, 0);


debuggee.eval("function g() { var result = new f; g_hits++; return result; }");
dbg.onEnterFrame = function (frame) {
    hits++;
    if (frame.constructing) {
        savedFrame = frame;
        print(savedFrame.onStack, true);
        return { return: "pass" };
    }
    return undefined;
};
hits = 0;
debuggee.hits = 0;
debuggee.g_hits = 0;
savedFrame = undefined;
print(typeof debuggee.eval("g();"), "object");
print(hits, 3);
print(savedFrame.onStack, false);
print(debuggee.hits, 0);
print(debuggee.g_hits, 1);
