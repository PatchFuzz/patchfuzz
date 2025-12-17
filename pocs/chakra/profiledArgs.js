function bar(){}
function foo(a)
{
  new bar(10,a);
}
foo({})
print("passed");