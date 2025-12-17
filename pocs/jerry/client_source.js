print("client-source-test");

function finish(z) {
  print("function finish");
  print("finish: " + z);
}

function bar(y) {
  print("function bar");
  finish(y + "-bar");
}

function foo(x)
{
  print("function foo");
  bar(x + "-foo");
}

function test()
{
  print("function test");
  var x = "test";
  foo(x);
}

test();
