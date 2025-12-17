let a = [0, 1, 2, 3, 4];
a.pop();
a.pop();
a[2] = undefined;
a.pop();
delete a[0];
var p = Object.getPrototypeOf(0);
a[p] = -1n;
