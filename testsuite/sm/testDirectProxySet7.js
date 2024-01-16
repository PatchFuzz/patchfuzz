


var hits = 0;
var t = {};
var p = new Proxy(t, {
    defineProperty(t, id, desc) { hits++; return true; }
});
p.x = 1;
assertEq(hits, 1);
assertEq("x" in t, false);


var receiver = Object.create(p);
hits = 0;
receiver.x = 2;
assertEq(hits, 0);
assertEq("x" in t, false);
assertEq(receiver.hasOwnProperty("x"), true);
assertEq(receiver.x, 2);
