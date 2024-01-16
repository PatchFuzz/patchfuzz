

 var order = 0;

 try {
   var A = class extends null {
     constructor () {
       order++;
     }
   }

   new A;
 } catch (e) {
   assert (order === 1);
   assert (e instanceof ReferenceError);
 }
