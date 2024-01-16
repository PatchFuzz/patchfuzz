

load(libdir + "asserts.js");
load(libdir + "iteration.js");

delete String.prototype[Symbol.iterator];
assertThrowsInstanceOf(function () { for (var v of "abc") ; }, TypeError);
assertThrowsInstanceOf(function () { for (var v of new String("abc")) ; }, TypeError);
