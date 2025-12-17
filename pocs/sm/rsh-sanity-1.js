function rsh(lhs, rhs) { return lhs >> rhs; }
print(rsh(1024, 2), 256)
print(rsh(1024.5, 2), 256)
print(rsh(1024.5, 2.0), 256)


var lhs = 1024;
print(lhs >> 2, 256);
lhs = 1024.5;
print(lhs >> 2, 256);


var rhs = 2;
print(256, 1024 >> rhs);
var rhs = 2.0;
print(256, 1024 >> rhs);
