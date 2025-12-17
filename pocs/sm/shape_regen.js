var o;
var p;
var zz;
var o2;

function f(x) {
  return x.a;
}

gczeal(1);
gc();

zz = { q: 11 };
o = { a: 77, b: 88 };
o2 = { c: 11 };
p = { b: 99, a: 11 };



print(f(o), 77);

o = undefined;

gczeal(1);
gc();


print(f(p), 11);
