

 class A extends Array {
   constructor () {
     assert (false);
     return null;
   }
 }

 class B extends A {
   constructor () {
     return { o : 10 };
   }
 }

 var b = new B;
 assert (b.o === 10);
