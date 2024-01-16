

 class A extends Array {
   constructor (a, b, c) {
     super (a, b);
     this.f = 5;
   }
 }

 class B extends A {
   constructor (a, b, c) {
     super (a, b);
     this.g = super.f;
     this.h = this.f;
   }
 }

 var b = new B (1, 2, 3, 4);
 assert (b.g === undefined);
 assert (b.h === 5);
 assert (b.length === 2);
