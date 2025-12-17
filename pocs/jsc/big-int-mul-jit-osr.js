let assert = {
    sameValue: function(i, e, m) {
        if (i !== e)
            throw new Error(m);
    }
}

function bigIntMul(x, y) {
    return x * y;
}
noInline(bigIntMul);

for (let i = 0; i < testLoopCount; i++) {
    let r = bigIntMul(3n, 10n);
    print(r, 30n, 3n + " * " + 10n + " = " + r);
}

let r = bigIntMul(3, 10);
print(r, 30, 3 + " * " + 10 + " = " + r);

r = bigIntMul("3", "10");
print(r, 30, 3 + " * " + 10 + " = " + r);

