var a = [1, 2, 3];
var p = new Proxy(a, {});
print(p.length, 3);
print(JSON.stringify(p), "[1,2,3]");
