print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "#5883 - instanceof on a bound function fails to call [Symbol.hasInstance] accessor",
        body: function () {
            let called = false;
            class A {
                static [Symbol.hasInstance]() {
                    called = true;
                }
            }
            const B = A.bind();

            ({} instanceof B);
            print(called);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
