fail = false;

function test0() {
  function leaf() {
    return 100;
  }
  var obj1 = {};
  var func0 = function () {
    return leaf();
  };
  var func2 = function () {
    if (!(func0.call() % -2147483646)) {
      arrObj0;
    }
  };
  obj1.method1 = func2;
  obj1.method1();
}
test0();
test0();
test0();
test0();



function foo(a, b)
{
  a %= 3;
  b = b >>a;
  return b;
}

base1 = foo(4,2);
foo(4,2);
foo(4,2);
foo(4,2);
foo(4,2);

case1 = foo(4,2);
if(base1 != case1)
{
  print("ERROR: Functional error in jit - Case1");
  fail = true;
}


function foo1(a)
{
  a %= 94;
  a = a & 255;
  return a;
}

base2 = foo1(123);
foo1(123);
foo1(123);
foo1(123);
foo1(123);
foo1(123);

case2 = foo1(123);

if(base2 != case2)
{
  print("ERROR: Functional error in jit - Case2");
  fail = true;
}
if(!fail)
  print('PASS'); 
