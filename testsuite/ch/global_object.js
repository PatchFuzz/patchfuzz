





if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Test BigInt global object properties",
        body: function () {
            assert.isTrue(BigInt.length == 1);
            assert.isTrue(BigInt.name == "BigInt");
            assert.isTrue(BigInt.prototype == "[object Object]");
            assert.isTrue(BigInt.prototype.constructor === BigInt);
            assert.isTrue(BigInt.__proto__ === Function.prototype);
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
