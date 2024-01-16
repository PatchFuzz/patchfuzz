






class Derived extends RegExp {
  constructor(a) { throw "error" }
}

let o = Reflect.construct(RegExp, [], Derived);
%HeapObjectVerify(o);

assertEquals(o.lastIndex, 0);
o.lastIndex = 1;
assertEquals(o.lastIndex, 1);
o.lastIndex = 0;
gc();
