function test0(v) {
  return (2147483648-Math.max(1.1,-(((2<<(-v|v))-3)|0)))|0;
}
print(test0(1.6), 2147483645);
print(test0(437348122.9), 2147483646);

function test1(v) {
  return (2147483648+Math.min(v,0))|0;
}
print(test1(2.1), -2147483648)
print(test1(-0.1), 2147483647)
