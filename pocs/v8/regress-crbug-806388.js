class Derived extends Array {
    constructor(a) { throw "error" }
}


let o = Reflect.construct(RegExp, [], Derived);
o.lastIndex = 0x1234;
%HeapObjectVerify(o);

gc();
%HeapObjectVerify(o);
