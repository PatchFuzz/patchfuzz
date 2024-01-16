





if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "With add, sub, mul",
        body: function () {
            assert.throws(() => {var x = 2n + 3;}, TypeError);
            assert.throws(() => {var x = 2 + 3n;}, TypeError);
            assert.throws(() => {var x = 2n - 3;}, TypeError);
            assert.throws(() => {var x = 2 - 3n;}, TypeError);
            assert.throws(() => {var x = 2n * 3;}, TypeError);
            assert.throws(() => {var x = 2 * 3n;}, TypeError);
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
