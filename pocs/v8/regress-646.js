function f() { this.__proto__ = 42 }
var count = 0;
for (var x in new f()) count++;
print(0, count);
