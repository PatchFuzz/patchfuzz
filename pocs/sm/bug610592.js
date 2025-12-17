function foo(a)
{
  print(a.x, 5);
}

function bar()
{
  for (var i = 0; i < 50; i++) {
    var a = [];
    a[i] = 0;
    delete a[i];
    a.x = 5;
    foo(a);
  }

  var b = [1,,2,,3,,4,,5];
  print(b.toString(), "1,,2,,3,,4,,5");
  b.x = 0;
  print(b.toString(), "1,,2,,3,,4,,5");
  delete b.x;
  delete b[8];
  delete b[6];
  delete b[4];
  print(b.toString(), "1,,2,,,,,,");
}
bar();
