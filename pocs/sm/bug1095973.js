var C = {};
var B = new Proxy(C, {});
var A = Object.create(B);
B.x = 1;
print(C.x, 1);
