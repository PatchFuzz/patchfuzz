function print(a) {
    if (!a)
        throw new Error("Assertion failed");
}

function test(setMethod) {
    var dt = new Date();
    print(Number.isNaN(setMethod.call(dt)));
    print(isNaN(dt));
    print(Number.isNaN(dt.getDay()));
}

var setMethods = [
    Date.prototype.setHours,
    Date.prototype.setMilliseconds,
    Date.prototype.setMinutes,
    Date.prototype.setSeconds,
    Date.prototype.setUTCHours,
    Date.prototype.setUTCMilliseconds,
    Date.prototype.setUTCMinutes,
    Date.prototype.setUTCSeconds,
];

for (var setMethod of setMethods) {
    test(setMethod);
}
