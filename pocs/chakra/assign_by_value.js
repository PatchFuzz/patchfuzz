if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Assign BigInt literal",
        body: function () {
            var x = 123n;
            var y = x;
            print(x == 123n);
            print(y == 123n);
            x++;
            print(x == 124n);
            print(y == 123n);
            y = x;
            ++x;
            print(x == 125n);
            print(y == 124n);
        }
    },
    {
        name: "Assign BigInt object",
        body: function () {
            var x = BigInt(123n);
            var y = x;
            print(x == 123n);
            print(y == 123n);
            x++;
            print(x == 124n);
            print(y == 123n);
            y = x;
            ++x;
            print(x == 125n);
            print(y == 124n);
        }
    },
    {
        name: "Value change with add and sub",
        body: function () {
            var x = BigInt(123n);
            var y = x;
            print(x == 123n);
            print(y == 123n);
            x = x + 2n;
            print(x == 125n);
            print(y == 123n);
            y = x;
            x = x - 2n;
            print(x == 123n);
            print(y == 125n);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
