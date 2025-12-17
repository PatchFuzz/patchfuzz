print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "All valid import statements",
        body: function () {
            print(function () { print('ValidImportStatements.js', 'samethread'); }, "Valid import statements");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
