;
;

function test(v) {
    Array.prototype[Symbol.iterator] = v;
    print(function () { for (var x of []) ; }, TypeError);
}
test(undefined);
test(null);
test({});
