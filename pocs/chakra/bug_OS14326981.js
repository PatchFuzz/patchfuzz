print("..\\UnitTestFramework\\UnitTestFramework.js");

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
        print(100, count(), "Function leaked from cached scope should cause cached scope to be invalidated");
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
