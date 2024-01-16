




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Deletion of a property from SimpleTypeHandler shouldn't cause other properties to be deleted",
        body: function () {
            
            
            
            

            
            function f() {
            }

            delete f.name;

            var desc = Object.getOwnPropertyDescriptor(f, 'prototype');
            assert.isNotUndefined(desc);
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
