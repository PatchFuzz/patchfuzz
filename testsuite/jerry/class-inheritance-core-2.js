

 class C {
   static a () {
     return 5;
   }
 }

 class D extends C {
   constructor () {
     super ();
   }
 }

 assert (D.a () === 5);

 C.a = function () {
   return 6;
 }

 assert (D.a () === 6);

 C = 5;

 assert (D.a () === 6);
