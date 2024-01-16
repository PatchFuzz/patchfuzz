

 order = 0;

 var Mixin1 = (superclass) => class extends superclass {
   foo () {
     assert (order++ == 1)
     if (super.foo) {
       super.foo ();
     }
   }
 };

 var Mixin2 = (superclass) => class extends superclass {
   foo () {
     assert (order++ == 2)
     if (super.foo) {
       assert (super.foo () === 5);
     }
   }
 };

 class S {
   foo () {
     assert (order++ == 3)
     return 5;
   }
 }

 class C extends Mixin1 (Mixin2 (S)) {
   foo () {
     assert (order++ == 0)
     super.foo ();
   }
 }

 new C ().foo ()
