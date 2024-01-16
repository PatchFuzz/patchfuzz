




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Case-folding should be applied for octoquad identifiers when the unicode flag is present",
        body: function () {
            assert.isTrue(/ABCKABC\u212a|akcabbck/giu.test('abckabck'))
        }
    },
    {
        name: "Case-folding should NOT be applied for octoquad identifiers when the unicode flag is NOT present",
        body: function () {
            assert.isFalse(/ABCKABC\u212a|akcabbck/gi.test('abckabck'))
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
