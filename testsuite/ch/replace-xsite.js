




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "String.Replace ( Pattern as String , ReplaceFunction )",
        body: function () {
            assert.doesNotThrow(function() {
                var str = "AAoooAAooo";
                var script = `
                    function foo(str) {
                        return {
                            toString: function () { return str + "ZZ" }
                        }
                    }`

                var replacer = WScript.LoadScript(script, 'samethread')
                var replaced = str.replace("A", replacer.foo);
            });
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
