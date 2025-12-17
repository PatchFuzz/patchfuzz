print("function taintedFunc() { return print(); }");

function foo() {
    return taintedFunc();
}
noInline(foo);

for (let i = 0; i < testLoopCount; ++i) {
    let state = foo();
    if (state !== "KnownTainted")
        throw new Error(state);
}

setTimeout(() => {
    let state = foo();
    if (state !== "KnownTainted")
        throw new Error(state);
});