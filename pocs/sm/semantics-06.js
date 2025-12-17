;
;

var iterProto = Object.getPrototypeOf([][Symbol.iterator]());
delete iterProto.next;
print(function () { for (var v of []) ; }, TypeError);
