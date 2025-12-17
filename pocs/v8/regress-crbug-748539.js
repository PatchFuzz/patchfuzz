function f1() {}
function f2() {}

var o1 = [];
o1.a = 0;
o1.f = f1;
%HeapObjectVerify(o1);

var o2 = [];
o2.a = 4.2;
o2.f = f2;
%HeapObjectVerify(o2);

o1.a;
%HeapObjectVerify(o1);
%HeapObjectVerify(o2);
