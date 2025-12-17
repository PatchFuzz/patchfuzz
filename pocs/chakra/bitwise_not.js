if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "BigInt literal",
        body: function () {
            var x = ~123n;
            print(x == -124n);
        }
    },
    {
        name: "Negative BigInt literal",
        body: function () {
            var x = ~-123n;
            print(x == 122n);
        }
    },   
    {
        name: "0n",
        body: function () {
            var x = ~0n;
            print(x == -1n);
        }
    },
    {
        name: "BigInt Object",
        body: function () {
            var x = ~BigInt(12345n);
            var y = BigInt(-12346n);
            print(x == y);
        }
    },
    {
        name: "Out of 64 bit range",
        body: function () {
            var x = ~1234567890123456789012345678901234567890n;
            var y = -1234567890123456789012345678901234567891n;
            print(x == y);
        }
    },
    {
        name: "Very big",
        body: function () {
            var x = eval('1234567890'.repeat(20)+'0n');
            var y = -x-1n;
            var z = ~x;
            print(z == y);
        }
    },
    {
        name: "With assign",
        body: function () {
            var x = 3n;
            var y = x;
            print(x == 3n);
            print(y == 3n);
            y = ~x;            
            print(x == 3n);
            print(y == -4n);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
