print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Unescaped <LS> and <PS> characters are allowed in string literals",
        body: function () {
            print(eval("'\u2028'"), "\u2028");
            print(" ", "\u2028");
            print(eval("'\u2029'"), "\u2029");
            print(" ", "\u2029");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
