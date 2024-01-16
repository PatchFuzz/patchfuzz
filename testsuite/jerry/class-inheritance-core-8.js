

 var A = Array;
 var order = 0;

 function f () {
   order++;

   return function () {
     return A;
   }
 }

 var B = class extends f ()() {
   constructor () {
     assert (++order === 2);
     eval ("eval ('super (1, 2, 3, 4)')");
     try {
       super (1, 2, 3, 4, 5)
       assert (false);
     } catch (e) {
       assert (e instanceof ReferenceError)
     }

     assert (this.g ()()()() === 10);
     assert (eval ("eval ('this.g ()')()")()() === 10);
     assert (eval ("eval ('this.g ()')")()()() === 10);
     assert (eval ("eval ('this.g ()()()')")() === 10);
     assert (eval ("eval ('this.g')")()()()() === 10);
     this.push (5);
     assert (this.length === 5)
     eval ('this.push (6)');
     assert (this.length === 6);
     eval ("eval ('this.push (7)')");
     this.j = 6;
     return;
   }
 }

 var C = class extends B {
   g () {
     return function () {
       return () => {
         return 10;
       }
     }
   }
 }

 var D = class D extends C {
    constructor () {
      super ();
      this.k = 5;
      return
    }

    g () {
      return eval ('super["g"]');
    }
 }

 assert (order === 1);

 var d = new D;
 assert (d.length === 7);
 assert (d.k === 5);
 assert (d.j === 6);
 assert (d instanceof D);
 assert (d instanceof C);
 assert (d instanceof B);
 assert (d instanceof f ()());
 assert (JSON.stringify (d) === "[1,2,3,4,5,6,7]");
