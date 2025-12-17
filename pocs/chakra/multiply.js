if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "BigInt literal",
        body: function () {
            print(1n*2n == 2n);
            print(2n*1n == 2n);
        }
    },
    {
        name: "change length",
        body: function () {
            print(4294967295n * 2n == 8589934590n);
            print(123n * 18446744073709551615n == 2268949521066274848645n);
        }
    },
    {
        name: "Out of 64 bit range",
        body: function () {
            var x = 1234567890123456789012345678901234567890n;
            var y = BigInt(6172839450617283945061728394506172839450n);
            print(x * 5n == y);
        }
    },
    {
        name: "Very big",
        body: function () {
            var x = eval('1234567890'.repeat(20)+'0n');
            var y = BigInt(eval('1234567890'.repeat(20)+'7n'));
            print(x*y == 15241578753238836750495351562566681945008382873376009755225118122311263526910001524158887669562677518670946627038562550221003043773814983252552966212772443410028959019878067369875323883776284103056504141139485896967159837982037108626735823345526793582838000483112332160794086427327693963857597928498242646061072549927232083524835691205694817405890606569121173139765328562261853981054717510588324962300n);
        }
    },
    {
        name: "With signed number",
        body: function () {
            print(-3n * 4n == -12n);
            print(3n * -4n == -12n);
            print(-3n * -4n == 12n);
            print(-1n * 1n == -1n);
        }
    },
    {
        name: "With zero",
        body: function () {
            print(-4n * 0n == 0n);
            print(4n * 0n == 0n);
            print(0n * 4n == 0n);
            print(0n * -4n == 0n);
        }
    },
    {
        name: "With assign",
        body: function () {
            var x = 3n;
            var y = 2n;
            y *= x;
            print(x == 3n);
            print(y == 6n);
            y = x * 4n;
            print(y == 12n);
            y = 8n * x;
            print(y == 24n);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
