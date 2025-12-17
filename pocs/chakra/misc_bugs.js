print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Inner function of 'async' function has default - should not throw any assert",
        body: function () {
            print(function () { eval(`async function f1() {
                   function foo(a = function() { } ) { }; 
            }`); });

            print(function () { eval(`var f1 = async ( ) => {
                   function foo(a = function() { } ) { } };`); });
                   
            print(function () { eval(`async function f1() {
                        function foo() {
                            async function f2() {
                                function bar (a = function () {} ) {
                                }
                            }
                        }
                    }`); });
        }
    },
    {
        name: "Await in class body should not crash",
        body: function () {
            async function trigger() {
                a=class b{
                    [a = class b{
                        [await 0](){}
                    }](){}
                };
            }

            trigger();
        }
    },

];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
