var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval("" +
       function fib(n) {
         var a = 0, b = 1;
         while (n-- > 0)
           b = b+a, a = b-a;
         return b;
       });



g.fib(20);



gw.makeDebuggeeValue(g.fib).script.setBreakpoint(0, { hit: function (f) { } });




dbg.onDebuggerStatement = function (f) {
  dbg.removeDebuggee(g);
};
g.eval('debugger');



g.fib(20);

throw('AllDone');
