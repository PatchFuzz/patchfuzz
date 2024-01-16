





var a = "hello";
function foo(i) {
  var x = a[i];
  return x;
}


foo(4);
foo(4);
foo(4);

assertEquals(foo(8), undefined);



Object.prototype[-1] = 2;
assertEquals(2, foo(-1));
