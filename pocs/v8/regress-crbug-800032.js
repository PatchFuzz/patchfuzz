class Derived extends RegExp {
  constructor(a) { throw "error" }
}

let o = Reflect.construct(RegExp, [], Derived);
%HeapObjectVerify(o);

print(o.lastIndex, 0);
o.lastIndex = 1;
print(o.lastIndex, 1);
o.lastIndex = 0;
gc();
