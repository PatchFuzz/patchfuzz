var V = [1, 2, 3];
var X = Object.create(V);
var P = new Proxy(X, {});
print(P.length, 3);
