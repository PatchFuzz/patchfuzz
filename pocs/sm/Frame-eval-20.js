;

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit(0);

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  function test(shadow) {
    var g = newGlobal({newCompartment: true});
    var dbg = new Debugger;

    
    
    g.h = function h(d) {
      if (d) {
        dbg.addDebuggee(g);
        var f = dbg.getNewestFrame().older;
        print(f.implementation, "ion");
        print(f.environment.getVariable("foo"), 42);

        
        f.eval((shadow ? "var " : "") + "foo = 'string of 42'");
        g.expected = shadow ? 42 : "string of 42";
      }
    }

    g.eval("" + function f(d) {
      var foo = 42;
      g(d);
      return foo;
    });
    g.eval("" + function g(d) {
      h(d);
    });

    g.eval("(" + function () {
      for (i = 0; i < 5; i++)
        f(false);
      print(f(true), "string of 42");
    } + ")();");
  }

  test(false);
  test(true);
});
