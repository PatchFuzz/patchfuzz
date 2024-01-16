

load(libdir + 'asserts.js');

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

dbg.onDebuggerStatement = function (frame) {
    assertThrowsInstanceOf(function() { frame.eval('yield 10;') }, SyntaxError);
};

g.eval("(function*g(){ debugger; })()");
