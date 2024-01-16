






































function first(x, y) { return x; }
var y = 0;
var o = {};
o.x = 0;
o[0] = 0;


x0 = 0;
function test0() { return first((y = 1, typeof x0), 2); }

assertEquals('number', test0());

delete x0;
assertEquals('undefined', test0());


x1 = 0;
function test1() { return first((y += 1, typeof x1), 2); }
assertEquals('number', test1(), 'test1 before');
delete x1;
assertEquals('undefined', test1(), 'test1 after');


x2 = 0;
function test2() { return first((++y, typeof x2), 2); }
assertEquals('number', test2(), 'test2 before');
delete x2;
assertEquals('undefined', test2(), 'test2 after');

x3 = 0;
function test3() { return first((y++, typeof x3), 2); }
assertEquals('number', test3(), 'test3 before');
delete x3;
assertEquals('undefined', test3(), 'test3 after');




x4 = 0;
function test4() { return first((o.x = 1, typeof x4), 2); }
assertEquals('number', test4());
delete x4;
assertEquals('undefined', test4());

x5 = 0;
function test5() { return first((o.x += 1, typeof x5), 2); }
assertEquals('number', test5());
delete x5;
assertEquals('undefined', test5());

x6 = 0;
function test6() { return first((++o.x, typeof x6), 2); }
assertEquals('number', test6());
delete x6;
assertEquals('undefined', test6());

x7 = 0;
function test7() { return first((o.x++, typeof x7), 2); }
assertEquals('number', test7());
delete x7;
assertEquals('undefined', test7());




x8 = 0;
function test8(index) { return first((o[index] = 1, typeof x8), 2); }
assertEquals('number', test8());
delete x8;
assertEquals('undefined', test8());

x9 = 0;
function test9(index) { return first((o[index] += 1, typeof x9), 2); }
assertEquals('number', test9());
delete x9;
assertEquals('undefined', test9());

x10 = 0;
function test10(index) { return first((++o[index], typeof x10), 2); }
assertEquals('number', test10());
delete x10;
assertEquals('undefined', test10());

x11 = 0;
function test11(index) { return first((o[index]++, typeof x11), 2); }
assertEquals('number', test11());
delete x11;
assertEquals('undefined', test11());
