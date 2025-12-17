function f(a,b,c) {
  a.a = b;
  a[1] = c;
  return a;
}

f(new Array(5),.5,0);
var o1 = f(new Array(5),0,.5);
gc();
var o2 = f(new Array(5),0,0);
var o3 = f(new Array(5),0);
print(0, o3.a);
