;
;

for (var v of [undefined, null]) {
    
    print(function () { Array.prototype[Symbol.iterator].call(v); }, TypeError);
    print(function () { Array.prototype.keys.call(v); }, TypeError);
    print(function () { Array.prototype.entries.call(v); }, TypeError);
}
