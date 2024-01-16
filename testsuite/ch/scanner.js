




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "SyncToLiteralsAndBackupInst should continue scanning for a literal from the furthest point scanned in the previous iteration",
        body: function () {
            var re = /<(foo|bar)/;
            var string = "0bar1<1<foo";

            
            
            
            
            
            var result = re.exec(string);

            assert.areNotEqual(null, result, "result");
            assert.areEqual(7, result.index, "result.index");
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != 'summary' });
