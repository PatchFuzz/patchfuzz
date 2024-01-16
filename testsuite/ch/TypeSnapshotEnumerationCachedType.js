






WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Snapshot enumeration works as expected when non-shared type evolves after adding to EquivalentTypeCache.",
        body: function () {
            var expected = {"Foo" : "Bar"};
            function test0() {
                var obj0 = {};
                obj0.prop1 = 1;
                obj0.prop2 = 2;
                obj0.prop3 = 3;
                obj0.prop4 = 4;

                var func2 = function () {
                    arrObj0 = obj0;
                    
                    delete arrObj0.prop2;
                    arrObj0[10] = obj0.prop3;
                };

                func2();
                var i = 1;
                for (var val in arrObj0) {
                    if (i > 4) {
                        break;
                    }

                    i++;
                    
                    arrObj0[val] = expected;

                    
                    obj0.prop2 = "uniqobj19"; 
                }

                assert.areEqual(expected, arrObj0.prop4, "Snapshot enumeration broken after non-shared type was added to EquivalentTypeCache.");  
            }

            test0();
            test0();
            test0();
            test0();
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });

