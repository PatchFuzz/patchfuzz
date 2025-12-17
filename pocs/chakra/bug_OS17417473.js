print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "OS17417473: hoisting a constant propertySymbol should not trigger assertion",
        body: function () {
            function opt() {
                let _1337;
                s = "";
                s = "" & s.hasOwnProperty("");
                var s = 0x1337;
                for (i =0; i < 1; i++) {
                    _1337 = s.hasOwnProperty("x");
                }
            }
            
            
            for (let i = 0; i < 100; i++) {
                opt();
            }
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
