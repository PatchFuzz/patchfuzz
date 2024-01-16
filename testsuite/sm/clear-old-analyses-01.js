






if (typeof gcPreserveCode != "function")
  throw('AllDone');

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;

g.eval("" +
       function fib(n) {
         var a = 0, b = 1;
         while (n-- > 0)
           b = b+a, a = b-a;
         return b;
       });

g.fib(20);                      
                                

gcPreserveCode();               
                                
                                

dbg.addDebuggee(g);             
                                
                                
                                

g.fib(20);                      
                                
                                

throw('AllDone');
