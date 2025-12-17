;

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit();

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;
  var onPopExecuted = false;
  var breakpointHit = false;

  g.toggle = function toggle(d) {
    if (d) {
      dbg.addDebuggee(g);

      var frame1 = dbg.getNewestFrame();
      print(frame1.implementation, "ion");
      frame1.onPop = function () {
        onPopExecuted = true;
      };

      var frame2 = frame1.older;
      print(frame2.implementation, "ion");
      
      var offset = frame2.script.getLineOffsets(3)[0];
      frame2.script.setBreakpoint(offset, { hit: function (fr) {
        print(fr.implementation != "ion", true);
        breakpointHit = true;
      }});
    }
  };

  g.eval("" + function f(d) {
    g(d);
    print(42 + 42);
  });
  g.eval("" + function g(d) { toggle(d); });

  g.eval("(" + function test() {
    for (var i = 0; i < 5; i++)
      f(false);
    f(true);
  } + ")();");

  print(onPopExecuted, true);
  print(breakpointHit, true);
});
