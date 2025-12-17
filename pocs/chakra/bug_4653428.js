if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

[
    (-1 >>> 0) + 1,
    (-1 >>> 0) + 2,
    Infinity,
].forEach(function(len) {
    print(function() {
        new Uint8Array(len);
    }, RangeError);

    print(function() {
        new Uint8Array({length: len});
    }, RangeError);
});

print("pass");
