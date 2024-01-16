


































var result = (function outer() {
 with ({}) { }
 var x = 10;
 function inner() {
   return x;
 };
 return inner();
})();

assertEquals(10, result);
