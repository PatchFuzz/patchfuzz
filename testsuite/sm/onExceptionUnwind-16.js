

load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hit = false;
dbg.onExceptionUnwind = function (frame, exc) {
    
    
    assertEq(frame instanceof Debugger.Frame, true);
    assertEq(exc, 16);
    if (!hit) {
        hit = true;
        {
            assertEq(frame.type, "call");
            assertEq(frame.callee.name, "foo");
            assertEq(frame.older.type, "call");
            const { lineNumber, columnNumber } = frame.script.getOffsetMetadata(frame.offset);
            assertEq(lineNumber, 3);
            assertEq(columnNumber, 4);

            const isInCatchScope = frame.script.isInCatchScope(frame.offset);
            assertEq(isInCatchScope, false);
        }

        {
            const { older } = frame;
            assertEq(older.type, "call");
            assertEq(older.callee.name, "f");
            assertEq(older.type, "call");
            const { lineNumber, columnNumber } = older.script.getOffsetMetadata(older.offset);
            assertEq(lineNumber, 7);
            assertEq(columnNumber, 4);

            const isInCatchScope = older.script.isInCatchScope(older.offset);
            assertEq(isInCatchScope, false);
        }
    }
};

g.eval(
`function f() {
  function foo() {
    throw 16; 
  }

  for (const _ of [1]) {
    foo(); 
  }
}
`);
assertThrowsValue(function () { g.eval("f();"); }, 16);
assertEq(hit, true);
