;
;

var a = [];
a[Symbol.iterator] = function* () {
    yield 'o';
    yield 'k';
};
var s = '';
for (var v of a)
    s += v;
print(s, 'ok');

a[Symbol.iterator] = undefined;
print(function () { for (var v of a) ; }, TypeError);
