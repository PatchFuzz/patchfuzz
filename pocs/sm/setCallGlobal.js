var x = 1;
function f() {
  function g() { 
    var t=0;
    for (var i=0; i<3; i++)
      x = i;
  };
  g();
  eval("var x = 2");
  g();
  print(x, 2);
}
f();
print(x, 2);
