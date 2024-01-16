





var actual = '';
test();
function test()
{
  a = {x: 1};
  b = {__proto__: a};
    print(actual += test(1,2,3,4));
}
