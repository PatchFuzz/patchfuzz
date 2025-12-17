function print(a, b) {
    if (a !== b)
        throw new Error("Expected: " + b + " but got: " + a);
}

function print(expectedError, f) {
    try {
        f();
    } catch (e) {
        print(e instanceof expectedError, true);
    }
}


print(TypeError, function () {
    new Iterator();
});


class MyIterator extends Iterator {};
const myIterator = new MyIterator();
print(myIterator instanceof Iterator, true);
