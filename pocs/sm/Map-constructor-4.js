;
var nonIterables = [true, 1, -0, 3.14, NaN, {}, Math, this];
for (let k of nonIterables)
    print(function () { new Map(k); }, TypeError);
