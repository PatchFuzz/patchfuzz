print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Deletion of a property from SimpleTypeHandler shouldn't cause other properties to be deleted",
        body: function () {
            
            
            
            

            
            function f() {
            }

            delete f.name;

            var desc = Object.getOwnPropertyDescriptor(f, 'prototype');
            print(desc);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
