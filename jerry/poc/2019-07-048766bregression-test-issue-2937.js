













var c = 0;
var p1 = this[c++];
print(p1 === undefined);
print(c === 1);

var p2 = this[c--];
print(p2 === undefined);
print(c === 0);

var p3 = this[++c];
print(p3 === undefined);
print(c === 1);

var p4 = this[--c];
print(p4 === undefined);
print(c === 0);
