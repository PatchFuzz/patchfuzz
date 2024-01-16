

 class C extends Array {
   constructor (a, b) {
     var a = eval ('super (arguments);');
   }
 }

 class D extends C {
   constructor () {
      var a = eval ("eval ('super (1, 2);')");
      return
   }
 }

 var d = new D;
 assert (JSON.stringify (d) === '[{"0":1,"1":2}]');
 assert (d + "" === "[object Arguments]");
 assert (d.length === 1);
