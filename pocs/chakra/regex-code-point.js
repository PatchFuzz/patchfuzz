print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "MatchGroupInst should parse code-points correctly",
        body: function () {
            print(/(\ud800)\1/u.test("\ud800\ud800"), "Partial surrogate pair");
            print(/(\u{10429})\1/u.test("\u{10429}\u{10429}"), "Equal sized code-point lists in both RegExp and string to match");
            print(/(\u{10429}a)\1/u.test("\u{10429}a\u{10429}ab"), "Shorter code-point list in RegExp");
            print(/(\u{10429}a)\1/u.test("\u{10429}a\u{10429}"), "Shorter code-point list in string to match");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
