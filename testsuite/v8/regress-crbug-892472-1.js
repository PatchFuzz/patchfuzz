





const a = /x/;
a.exec = RegExp.prototype.test;
assertThrows(() => RegExp.prototype.test.call(a));
