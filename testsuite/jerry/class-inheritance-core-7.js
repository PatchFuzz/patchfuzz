

 class C extends Array {
   constructor () {
     var a = eval ('super (1, 2); 5');
     assert (a === 5);
   }
 }

 class D extends C {
   constructor () {
      var a = eval ("eval ('super (1, 2); 3')");
      assert (a === 3);
   }
 }

 var d = new D;

 assert (JSON.stringify (d) === "[1,2]");
