


load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
var fframe, farguments, fgetter;
dbg.onDebuggerStatement = function (frame) {
    if (hits === 0) {
        fframe = frame;
        farguments = frame.arguments;
        fgetter = Object.getOwnPropertyDescriptor(farguments, "0").get;
        assertEq(fgetter instanceof Function, true);

        
        
        assertThrowsInstanceOf(function () { fgetter.call(Math); }, TypeError);
    } else {
        
        assertEq(fframe.onStack, true);
        assertEq(fgetter.call(farguments), 100);

        
        assertEq(fgetter.call(frame.arguments), undefined);
    }
    hits++;
};

g.eval("function h() { debugger; }");
g.eval("function f(x) { debugger; h(); }");
g.f(100);
assertEq(hits, 2);


assertEq(fframe.onStack, false);
assertThrowsInstanceOf(function () { fgetter.call(farguments); }, Error);
