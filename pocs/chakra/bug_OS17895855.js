print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Concise-body lambda function containing in expression",
        body: function () {
            var l = a => '0' in [123]
            print("a => '0' in [123]", l.toString(), "consise-body lambda containing in expression");
            print(l(), "in expression can be the concise-body lambda body");
        }
    },
    {
        name: "Concise-body lambda function as var decl initializer in a for..in loop",
        body: function () {
            for (var a = () => 'pass' in []) {
                print("Should not enter for loop since [] has no properties");
            }
            print('pass', a(), "var decl from for loop should have initialized a");

            for (var a2 = () => 'pass' in [123]) {
                print('0', a2, "Should enter the for loop with property '0'");
            }
            print('0', a2, "var decl from for loop should have been assigned to during iteration");
        }
    },
    {
        name: "Concise-body lambda function as var decl initializer in a for..in..in loop",
        body: function () {
            for (var b = () => 'pass' in [] in []) {
              print("Should not enter for loop");
            }
            print('pass', b(), "var decl from for loop should still have initial value");

            for (var b2 = () => 'pass' in '0' in [123]) {
              print("var decl initialization turns into var b2 = () => 'pass' in true which should not enter this loop");
            }
            print('pass', b2(), "var decl was not overriden inside the for loop");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
