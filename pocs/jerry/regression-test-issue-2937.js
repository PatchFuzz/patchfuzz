var c = 0;
var p1 = this[c++];
assert (p1 === undefined);
assert (c === 1);

var p2 = this[c--];
assert (p2 === undefined);
assert (c === 0);

var p3 = this[++c];
assert (p3 === undefined);
assert (c === 1);

var p4 = this[--c];
assert (p4 === undefined);
assert (c === 0);
