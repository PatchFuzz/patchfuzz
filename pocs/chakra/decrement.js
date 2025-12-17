if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Decrement BigInt literal",
        body: function () {
            var x = 123n;
            print(x == 123n);
            x--;
            print(x == 122n);
            --x;
            print(x == 121n);
        }
    },
    {
        name: "Decrement negative BigInt literal",
        body: function () {
            var x = -123n;
            print(x == -123n);
            x--;
            print(x == -124n);
            --x;
            print(x == -125n);
        }
    },   
    {
        name: "Decrement 0n",
        body: function () {
            var x = 0n;
            print(x == 0n);
            x--;
            print(x == -1n);
            --x;
            print(x == -2n);
        }
    },
    {
        name: "Decrement to change length",
        body: function () {
            var x = 4294967296n;
            print(x == 4294967296n);
            x--;
            print(x == 4294967295n);
            --x;
            print(x == 4294967294n);
            var y = -4294967295n;
            print(y == -4294967295n);
            y--;
            print(y == -4294967296n);
            --y;
            print(y == -4294967297n);
        }
    },
    {
        name: "Decrement BigInt Object",
        body: function () {
            var x = BigInt(12345678901234567890n);
            var y = BigInt(12345678901234567891n);
            print(x < y);
            --y;
            print(x == y);
            y--;
            print(x >= y);
        }
    },
    {
        name: "Out of 64 bit range",
        body: function () {
            var x = 1234567890123456789012345678901234567890n;
            var y = BigInt(1234567890123456789012345678901234567891n);
            print(x == y);
            x--;
            --y;
            print(x < y);
            --y;
            print(x == y);
        }
    },
    {
        name: "Very big",
        body: function () {
            var x = eval('1234567890'.repeat(20)+'0n');
            var y = BigInt(eval('1234567890'.repeat(20)+'1n'));
            print(x == y);
            x--;
            --y;
            print(x < y);
            --y;
            print(x == y);
        }
    },
    {
        name: "With assign",
        body: function () {
            var x = 3n;
            var y = x--;
            print(x == 2n);
            print(y == 3n);
            y = --x;            
            print(x == 1n);
            print(y == 1n);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
