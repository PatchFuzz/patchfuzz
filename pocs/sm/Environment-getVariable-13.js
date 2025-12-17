;


gczeal(0);

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit(0);

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;

  
  
  g.toggle = function toggle(d) {
    if (d) {
      dbg.addDebuggee(g);
      var frame = dbg.getNewestFrame();
      print(frame.implementation, "ion");
      
      
      
      
      
      
      
      print(frame.environment.getVariable("x"), frame.arguments[1]);
    }
  };

  g.eval("" + function f(d, x) { g(d, x); });
  g.eval("" + function g(d, x) {
    for (var i = 0; i < 100; i++);
    function inner() { i = 42; };
    toggle(d);
    
    x++;
  });

  g.eval("(" + function test() {
    for (i = 0; i < 15; i++)
      f(false, 42);
    f(true, 42);
  } + ")();");
});
