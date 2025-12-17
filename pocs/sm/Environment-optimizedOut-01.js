var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
dbg.addDebuggee(g);

g.eval("" + function f() {
  var x = 42;
  {
    let y = 43;
    (function () { })();
  }
});

dbg.onEnterFrame = function (f) {
  if (f.callee && (f.callee.name === undefined)) {
    blockenv = f.environment.parent;
    print(blockenv.optimizedOut, true);
    print(blockenv.inspectable, true);
    print(blockenv.type, "declarative");
    print(blockenv.calleeScript, null);
    print(blockenv.names().indexOf("y") !== -1, true);

    funenv = blockenv.parent;
    print(funenv.optimizedOut, true);
    print(funenv.inspectable, true);
    print(funenv.type, "declarative");
    print(funenv.calleeScript, f.older.script);
    print(funenv.names().indexOf("x") !== -1, true);

    globalenv = funenv.parent.parent;
    print(globalenv.optimizedOut, false);
    print(globalenv.inspectable, true);
    print(globalenv.type, "object");
    print(globalenv.calleeScript, null);

    dbg.removeDebuggee(g);

    print(blockenv.inspectable, false);
    print(funenv.inspectable, false);
  }
}

g.f();
