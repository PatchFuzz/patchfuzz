;

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit();


if ('gczeal' in this)
    gczeal(0);

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;

  g.toggle = function toggle(d) {
    if (d) {
      dbg.addDebuggee(g);

      var frame = dbg.getNewestFrame();
      print(frame.implementation, "ion");
      print(frame.constructing, true);

      
      
      print(frame.arguments[1], 15);
    }
  };

  g.eval("" + function f(d) { new g(d, 15); });

  g.eval("" + function g(d) { toggle(d); });

  g.eval("(" + function test() {
    for (var i = 0; i < 5; i++)
      f(false);
    f(true);
  } + ")();");
});
