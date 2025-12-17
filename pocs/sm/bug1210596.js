var count = 0;
var a = Array.prototype.concat.call([], [, []], []);
a.forEach(function() { count++; });
print(count, 1);
