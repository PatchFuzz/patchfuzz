var x = "abc";
print(x.indexOf(x), 0);
print(x.indexOf(x, -1), 0);
print(x.indexOf(x, 1), -1);
print(x.indexOf(x, 100), -1);

print(x.lastIndexOf(x), 0);
print(x.lastIndexOf(x, -1), 0);
print(x.lastIndexOf(x, 1), 0);
print(x.lastIndexOf(x, 100), 0);
