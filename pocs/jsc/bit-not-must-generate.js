function print(a, e) {
    if (a !== e) {
        throw new Error("Bad!");
    }
}

function foo(a) {
    let loc = ~a;
    return a + 2;
}
noInline(foo);

let b = 0;
let o = {
    valueOf: function () {
        b++;
        return 2;
    }
};

for (let i = 0; i < testLoopCount; i++) {
    print(foo(o), 4);
}

print(b, testLoopCount * 2)

