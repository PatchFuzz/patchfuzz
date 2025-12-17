print("backtrace-test");

function f4() {
	print("function f4");
}

function foo()
{
  print("function foo");
  var tmp = 4;
  f4();
}

var cat = 'cat';

function test()
{
	print("function test");
	foo();
}

var
	x =
	  1;

test();
