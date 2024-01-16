

load(libdir + "asserts.js");
load(libdir + "iteration.js");

var iterProto = Object.getPrototypeOf([][Symbol.iterator]());
delete iterProto.next;
assertThrowsInstanceOf(function () { for (var v of []) ; }, TypeError);
