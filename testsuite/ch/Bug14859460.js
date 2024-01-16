




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

let tests = [
    {
        name: "repro",
        body: function() {
            assert.isTrue((/^(c|ctrl|control)$/i).test('Ctrl'));
        }
    },
    {
        name: "no repro",
        body: function() {
            assert.isTrue((/^(c|ctrl|control)/i).test('Ctrl'));
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
