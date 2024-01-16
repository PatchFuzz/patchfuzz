




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Verify cached scope is invalidated",
    body: function () {
        function foo() {
            var x = 100;
            
            function bar() {
                return x;
            }
            eval("count = bar;");
        }
        var count = {};
        foo();
        assert.areEqual(100, count(), "Function leaked from cached scope should cause cached scope to be invalidated");
    }
  },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
