print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Case-folding should be applied for octoquad identifiers when the unicode flag is present",
        body: function () {
            print(/ABCKABC\u212a|akcabbck/giu.test('abckabck'))
        }
    },
    {
        name: "Case-folding should NOT be applied for octoquad identifiers when the unicode flag is NOT present",
        body: function () {
            print(/ABCKABC\u212a|akcabbck/gi.test('abckabck'))
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
