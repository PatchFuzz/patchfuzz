var data = ["a", 1, {}];
var s1 = new Set(data), s2 = new Set(data);

delete Set.prototype.delete;
delete Set.prototype.iterator;
s1.clear();
print(s1.size, 0);

Set.prototype.delete = function () { throw "FAIL"; };
Set.prototype.iterator = function () { throw "FAIL"; };
s2.clear();
print(s2.size, 0);
