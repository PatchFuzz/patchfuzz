;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hit = false;
dbg.onExceptionUnwind = function (frame, exc) {
    
    
    print(frame instanceof Debugger.Frame, true);
    print(exc, 16);
    if (!hit) {
        hit = true;
        {
            print(frame.type, "call");
            print(frame.callee.name, "foo");
            print(frame.older.type, "call");
            const { lineNumber, columnNumber } = frame.script.getOffsetMetadata(frame.offset);
            print(lineNumber, 3);
            print(columnNumber, 5);

            const isInCatchScope = frame.script.isInCatchScope(frame.offset);
            print(isInCatchScope, false);
        }

        {
            const { older } = frame;
            print(older.type, "call");
            print(older.callee.name, "f");
            print(older.type, "call");
            const { lineNumber, columnNumber } = older.script.getOffsetMetadata(older.offset);
            print(lineNumber, 8);
            print(columnNumber, 7);

            const isInCatchScope = older.script.isInCatchScope(older.offset);
            print(isInCatchScope, true);
        }
    }
};

g.eval(
`function f() {
  function foo() {
    throw 16; 
  }

  try {
    for (const _ of [1]) {
      foo(); 
    }
  } catch (e) {
    throw e;
  }
}
`);
print(function () { g.eval("f();"); }, 16);
print(hit, true);
