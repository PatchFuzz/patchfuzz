




if (typeof (WScript) != "undefined") {
    WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "OS#14711878: Throw SOE (not crash) in Parser::ConstructNameHint (OSS-Fuzz test case)",
        body: function ()
        {
            assert.throws(function () {
                
                const M = 1e6;
                var u;
                for (var i = 0; i < M; i++) {
                    u = u + ".prototype";
                }
                eval(u);
            }, Error, "Should throw SOE (not crash with SOE) in Parser::ConstructNameHint", "Out of stack space");
        }
    },
    {
        name: "OS#14711878: Throw SOE (not crash) in Parser::ConstructNameHint (more 'normal' test case)",
        body: function ()
        {
            assert.throws(function () {
                
                
                const M = 1e6;
                var u = "foo"; 
                for (var i = 0; i < M; i++) {
                    u = u + ".a"; 
                }
                eval(u);
            }, Error, "Should throw SOE (not crash with SOE) in Parser::ConstructNameHint", "Out of stack space");
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
