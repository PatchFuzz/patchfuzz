let assert = {
    sameValue: function(i, e, m) {
        if (i !== e)
            throw new Error(m);
    }
}

function bigIntRShift(x, y) {
    return x >> y;
}
noInline(bigIntRShift);

for (let i = 0; i < testLoopCount; i++) {
    let r = bigIntRShift(0b100111n, 2n);
    print(r, 0b1001n, 0b100111n + " >> " + 2n + " = " + r);
}

let r = bigIntRShift(3, 10);
print(r, 0, 3 + " >> " + 10 + " = " + r);

r = bigIntRShift("3", "10");
print(r, 0, 3 + " >> " + 10 + " = " + r);

