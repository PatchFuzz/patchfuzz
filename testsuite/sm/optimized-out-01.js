





gczeal(0);

load(libdir + "jitopts.js");

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit(0);

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;

  
  
  g.toggle = function toggle(d) {
    if (d) {
      dbg.addDebuggee(g);
      var frame = dbg.getNewestFrame();
      assertEq(frame.implementation, "ion");
      
      assertEq(frame.environment.getVariable("x").optimizedOut, true);
      assertEq(frame.arguments[1].optimizedOut, true);
    }
  };

  g.eval("" + function f(d, x) {
    "use strict";
    eval("g(d, x)"); 
  });

  g.eval("" + function g(d, x) {
    "use strict";
    for (var i = 0; i < 100; i++);
    toggle(d);
  });

  g.eval("(" + function test() {
    for (i = 0; i < 15; i++)
      f(false, 42);
    f(true, 42);
  } + ")();");
});
