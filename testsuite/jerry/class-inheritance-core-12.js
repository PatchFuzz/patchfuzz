

 class A extends Array {
   constructor (a, b, c) {
     eval ("eval ('super (a, b, c)')");
     eval ("eval ('this.f = 5;')");
     assert (this.h ()()() === 5);

     return { o : 4 };
   }

   g () {
     return function () {
       return 5;
     }
   }
 }

 class B extends A {
   constructor (a, b, c) {
     eval ("eval ('super (a, b, c)')");
     assert (this.f === undefined)
     assert (this.o === 4)
     this.k = 5;
     return { o : 7 };
   }

   h () {
     return super["g"];
   }
 }

 var b = new B (1, 2, 3, 4);
 assert (b.k === undefined);
 assert (b.o === 7);
 assert (b.h === undefined);
 assert (b.g === undefined);
