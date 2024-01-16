






WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "All valid import statements",
        body: function () {
            assert.doesNotThrow(function () { WScript.LoadModuleFile('ValidImportStatements.js', 'samethread'); }, "Valid import statements");
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
