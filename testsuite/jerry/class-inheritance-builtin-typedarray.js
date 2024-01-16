

 function isInstanceofTypedArray (instance) {
   assert (instance instanceof C);
   assert (instance instanceof B);
   assert (instance instanceof A);
   assert (instance instanceof Uint8Array);
 }

 class A extends Uint8Array {
   f () {
     return 5;
   }
 }

 class B extends A {
   g () {
     return super.f ();
   }
 }

 class C extends B {
   h () {
     return super.g ();
   }
 }

 var c = new C ([1, 2, 3, 4, 5, 6]);

 isInstanceofTypedArray (c);
 assert (c.length === 6);
 assert (c.f () === 5)
 assert (c.g () === 5)
 assert (c.h () === 5)


