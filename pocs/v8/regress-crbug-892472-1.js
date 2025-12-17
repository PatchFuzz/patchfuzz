const a = /x/;
a.exec = RegExp.prototype.test;
print(() => RegExp.prototype.test.call(a));
