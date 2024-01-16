







WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

const tests = [
    {
        name: "Issue #6507 : Use @@hasInstance of built-in prototype",
        body() {
            const obj = { __proto__: String };
            const testFn = () => "hello" instanceof obj;
            assert.doesNotThrow(testFn, "instanceof should not throw");
            assert.areEqual(false, testFn(), "instanceof should return false");
        }
    }
]

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });