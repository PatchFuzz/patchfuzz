




























function foo(index) {
  return text.charAt(index);
}

var text = "hi there";
foo(0);
foo(0);
foo(100);     
text = false;


assertThrows(function () { foo(); }, TypeError);
