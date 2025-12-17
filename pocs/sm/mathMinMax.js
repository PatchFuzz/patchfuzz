var nan = Number.NaN;
var negative_zero = -0;

function max(a, b) {
    return Math.max(a, b);
}
function min(a, b) {
    return Math.min(a, b);
}

function main() {
    for (var i = 0; i < 100; i++) {
        print(max(negative_zero, 0), 0);
        print(max(0, negative_zero), 0);
        print(min(0, negative_zero), negative_zero);
        print(min(negative_zero, 0), negative_zero);

        print(min(negative_zero, negative_zero), negative_zero);
        print(max(negative_zero, negative_zero), negative_zero);

        print(max(nan, 0), nan);
        print(min(nan, 0), nan);

        print(max(0, nan), nan);
        print(max(nan, 0), nan);

        print(max(3, 5), 5);
        print(max(5, 3), 5);

        print(min(3, 5), 3);
        print(min(5, 3), 3);

        print(max(Infinity, -Infinity), Infinity);
        print(min(Infinity, -Infinity), -Infinity);
        print(max(Infinity, nan), nan);

        print(max(negative_zero, -5), negative_zero);
        print(min(negative_zero, -5), -5);
    }
}

main();