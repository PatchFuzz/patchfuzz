print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: 'Quantifier characters shouldn\'t be allowed on their own',
        body: function () {
            print(function () { eval('');
            print(function () { eval('/+/'); }, SyntaxError, '/+/');
            print(function () { eval('/?/'); }, SyntaxError, '/?/');
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
