var x;
var str = "a";
print(str.charCodeAt(Infinity) | 0, 0);
for (var i = 0; i < 10; ++i)
  x = str.charCodeAt(Infinity) | 0;
print(x, 0);
for (var i = 0; i < 10; ++i)
  x = str.charCodeAt(Infinity);
print(x | 0, 0);

