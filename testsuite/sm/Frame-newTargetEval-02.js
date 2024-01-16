

gczeal(0);

load(libdir + "jitopts.js");

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit();

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;

  g.toggle = function toggle(d, expected) {
    if (d) {
      dbg.addDebuggee(g);

      var frame = dbg.getNewestFrame();
      assertEq(frame.implementation, "ion");

      
      
      assertEq(frame.constructing, false);

      
      
      
      
      assertEq(frame.eval('new.target').throw.unsafeDereference().name, "SyntaxError");
      
    }
  };

  g.eval("" + function f(d) { new g(d, g, 15); });

  g.eval("" + function g(d, expected) { (() => toggle(d, expected))(); });

  g.eval("(" + function test() {
    for (var i = 0; i < 5; i++)
      f(false);
    f(true);
  } + ")();");
});
