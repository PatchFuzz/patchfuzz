



(function f(){
   assertEquals("function", typeof f);
})();

(function f(){
   var f;  
   assertEquals("undefined", typeof f);
})();

(function f(){
   var f;
   assertEquals("undefined", typeof f);
   with ({});  
})();

assertEquals("undefined", typeof f);


(function() {
  var o = { a: 1 };
  with (o) {
    var a = 2;
  }
  assertEquals("undefined", typeof a);
  assertEquals(2, o.a);
})();
