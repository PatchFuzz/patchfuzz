print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Access to __chakraLibrary must not work",
        body: function () {
            print(__chakraLibrary, "__chakraLibrary must be undefined outside of the BuiltIns methods.");
        },
        name: "Local __chakraLibrary variable must not have an impact on indexOf",
        body: function () {
            var __chakraLibrary = -1;
            var array = [1, 2, 3, 4];
            print(__chakraLibrary, -1, "__chakraLibrary must be -1 outside of the BuiltIns methods.");
            print(array.indexOf(4), 3, "The __chakraLibrary in the indexOf method must give access to built ins methods instead of -1.");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
