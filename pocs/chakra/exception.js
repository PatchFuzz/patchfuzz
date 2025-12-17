if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "With add, sub, mul",
        body: function () {
            print(() => {var x = 2n + 3;}, TypeError);
            print(() => {var x = 2 + 3n;}, TypeError);
            print(() => {var x = 2n - 3;}, TypeError);
            print(() => {var x = 2 - 3n;}, TypeError);
            print(() => {var x = 2n * 3;}, TypeError);
            print(() => {var x = 2 * 3n;}, TypeError);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
