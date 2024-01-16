

 class A extends Array {
   constructor () {
     return null;
   }
 }

 class B extends A { }

 try {
   new B;
   assert (false);
 } catch (e) {
   assert (e instanceof TypeError);
 }
