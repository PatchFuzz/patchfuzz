(function f(){
   print("function", typeof f);
})();

(function f(){
   var f;  
   print("undefined", typeof f);
})();

(function f(){
   var f;
   print("undefined", typeof f);
   with ({});  
})();

print("undefined", typeof f);


(function() {
  var o = { a: 1 };
  with (o) {
    var a = 2;
  }
  print("undefined", typeof a);
  print(2, o.a);
})();
