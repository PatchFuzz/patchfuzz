;
;

delete String.prototype[Symbol.iterator];
print(function () { for (var v of "abc") ; }, TypeError);
print(function () { for (var v of new String("abc")) ; }, TypeError);
