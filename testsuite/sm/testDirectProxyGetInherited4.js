

var V = [1, 2, 3];
var X = Object.create(V);
var P = new Proxy(X, {});
assertEq(P.length, 3);
