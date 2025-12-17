;
;

delete Array.prototype[Symbol.iterator];
print(function () { for (var x of []) ; }, TypeError);
