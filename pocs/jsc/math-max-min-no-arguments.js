function print(b) {
    if (!b)
        throw new Error("Bad!")
}

function min() {
    return Math.min();
}

function max() {
    return Math.max();
}

function test() {
    for (let i = 0; i < testLoopCount; i++) {
        print(min() === Infinity);
        print(max() === -Infinity);
    }
}
test();
