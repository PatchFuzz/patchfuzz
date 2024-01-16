

 class A extends Array {
   constructor (a, b, c, d, e) {
     eval ("eval ('super (a, b, c)')");
     this.a = 6;
     return new String ("foo");
   }

   f () {
     return 5;
   }
 }

 class B extends A {
   constructor (a, b, c, d) {
    eval ("eval ('super (a, b, c, d)')");
    assert (super.f () === 5);
   }
 }

 var a = new B (1, 2, 3, 4, 5, 6);
 assert (a.a === undefined);
 assert (a[0] + a[1] + a[2] === "foo");
