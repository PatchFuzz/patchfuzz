function print(b) {
    if (!b)
        throw new Error;
}

function test(obj) {
    return "1" in obj;
}
noInline(test);

let o = [10, {}];

for (let i = 0; i < testLoopCount; ++i) {
    print(test(o) === true);
}
