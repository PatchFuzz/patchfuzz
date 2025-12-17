print("..\\UnitTestFramework\\UnitTestFramework.js");

const tests = [
    {
        name: "Issue #6507 : Use @@hasInstance of built-in prototype",
        body() {
            const obj = { __proto__: String };
            const testFn = () => "hello" instanceof obj;
            print(testFn, "instanceof should not throw");
            print(false, testFn(), "instanceof should return false");
        }
    }
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}