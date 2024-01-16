





if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

[
    (-1 >>> 0) + 1,
    (-1 >>> 0) + 2,
    Infinity,
].forEach(function(len) {
    assert.throws(function() {
        new Uint8Array(len);
    }, RangeError);

    assert.throws(function() {
        new Uint8Array({length: len});
    }, RangeError);
});

print("pass");
