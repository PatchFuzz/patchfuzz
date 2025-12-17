function print(a, e) {
    if (a !== e)
        throw new Error("Expected to be: " + e + " but got: " + a);
}

function foo(a) {
    return ~a;
}
noInline(foo);

if (!jscOptions().useExecutableAllocationFuzz) {
    let c = 0;
    let o = {
        valueOf: () => {
            c++;
            return 3;
        }
    };

    for (let i = 0; i < testLoopCount; i++)
        foo(o);

    print(c, testLoopCount);
    if (numberOfDFGCompiles(foo) > 1)
        throw new Error("Function 'foo' should be compiled just once");
}
