


var hits = 0;
var proto = {x: 1};
var t = Object.create(proto);
var p = new Proxy(t, {
    defineProperty(t, id, desc) { hits++; return true; }
});
p.x = 2;
assertEq(hits, 1);
assertEq(proto.x, 1);
assertEq(t.hasOwnProperty("x"), false);


var receiver = Object.create(p);
receiver.x = 2;
assertEq(hits, 1);
assertEq(t.hasOwnProperty("x"), false);
assertEq(receiver.hasOwnProperty("x"), true);
assertEq(receiver.x, 2);
