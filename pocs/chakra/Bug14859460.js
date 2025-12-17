print("..\\UnitTestFramework\\UnitTestFramework.js");

let tests = [
    {
        name: "repro",
        body: function() {
            print((/^(c|ctrl|control)$/i).test('Ctrl'));
        }
    },
    {
        name: "no repro",
        body: function() {
            print((/^(c|ctrl|control)/i).test('Ctrl'));
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
