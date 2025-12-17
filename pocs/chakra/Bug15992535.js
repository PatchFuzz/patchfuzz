if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Regex parser correctly throws error if too many capturing groups",
        body: function () {
            print(
                
                
                () => { return new RegExp("(ab)".repeat(0x7ffe)); }
            );
            print(
                () => { return new RegExp("(ab)".repeat(0x8000)); },
                RangeError,
                "regex parsing throws when the regex has more than 2^15 - 1 capturing groups",
                "Regular expression cannot have more than 32,767 capturing groups"
            );
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
