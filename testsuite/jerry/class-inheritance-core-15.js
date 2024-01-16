

 class A extends Array {
   constructor () {
     super ();
     return;
   }
 };

 var a = new A;
 assert (a.length === 0);
 assert (a instanceof Array);
 assert (a instanceof A);
 assert (JSON.stringify (a) === "[]");
