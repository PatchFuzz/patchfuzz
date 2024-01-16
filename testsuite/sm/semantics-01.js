







load(libdir + "asserts.js");
load(libdir + "iteration.js");

delete Array.prototype[Symbol.iterator];
assertThrowsInstanceOf(function () { for (var x of []) ; }, TypeError);
