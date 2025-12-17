;

print(function () {
    Math.max(NaN, { valueOf: function () { throw new Error() } });
}, Error);

print(function () {
    Math.min(NaN, { valueOf: function () { throw new Error() } });
}, Error);
