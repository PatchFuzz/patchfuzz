var re = new RegExp('(s)', "g");

function foo() {
  return "42";
}



for ( var i = 0; i < 10; i++) {
  
  var x = "s foo s bar s foo s bar s";
  x = x + x;
  x = x + x;
  x = x + x;
  x = x + x;
  x = x + x;
  x = x + x;
  x = x + x;
  x.replace(re, foo);
}
