if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Subtract BigInt literal",
        body: function () {
            var x = 5n;
            var y = 2n;
            var z = x - y;
            print(z == 3n);
        }
    },
    {
        name: "Subtract to change length",
        body: function () {
            var x = 4294967297n;
            print(x == 4294967297n);
            print(x - 2n == 4294967295n);
        }
    },
    {
        name: "Out of 64 bit range",
        body: function () {
            var x = 1234567890123456789012345678901234567892n;
            var y = BigInt(1234567890123456789012345678901234567890n);
            print(x - 2n == y);
        }
    },
    {
        name: "Very big",
        body: function () {
            var x = eval('1234567890'.repeat(20)+'0n');
            var y = BigInt(eval('1234567890'.repeat(20)+'7n'));
            print(x == y - 7n);
        }
    },
    {
        name: "Subtract with signed number",
        body: function () {
            print(-1n - 2n == -3n);
            print(2n - -1n == 3n);
            print(-2n - 1n == -3n);
            print(1n - -2n == 3n);
            print(-1n - -2n == 1n);
            print(-2n - -1n == -1n);
        }
    },
    {
        name: "With zero",
        body: function () {
            print(-4n - 0n == -4n);
            print(4n - 0n == 4n);
            print(0n - 4n == -4n);
            print(0n - -4n == 4n);
            print(4n - 4n == 0n);
            print(-4n - -4n == 0n);
        }
    },
    {
        name: "With assign",
        body: function () {
            var x = 3n;
            var y = 20n;
            y -= x;
            print(x == 3n);
            print(y == 17n);
            y = x - 4n;
            print(y == -1n);
            y = 11n - x;
            print(y == 8n);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
