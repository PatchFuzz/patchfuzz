var a = new Array(1,2,1);
print(1, a.lastIndexOf(2));
print(2, a.lastIndexOf(1));
print(0, a.lastIndexOf(1, undefined));
print(0, a.lastIndexOf(1, null));
print(-1, a.lastIndexOf(2, undefined));
print(-1, a.lastIndexOf(2, null));
