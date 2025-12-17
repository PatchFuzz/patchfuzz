if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
{
    name: "regress Win8: 690708",
    body: function () {

        function stringify(o, space) {
            var str = JSON.stringify(o, null, space);
            var str2 = JSON.stringify(o, null, new Number(space)); 

            helpers.writeln("--space: " + space);
            helpers.writeln(str);
            print(str, str2);
        }
        
        var o = { ab: 123 };
        var spaces = [
            Number.MIN_VALUE,
            -4294967296,
            -2147483649,
            -2147483648, 
            -1073741825,
            -1073741824, 
            -28, -7, -1, 0, 1, 6, 15,
            1073741823, 
            1073741824,
            2147483647, 
            2147483647.1,
            2147483648,
            2147483648.2,
            4294967295, 
            4294967296,
            Number.MAX_VALUE
        ];
        spaces.forEach(function (space) {
            stringify(o, space);
        });
    }
}
];

testRunner.run(tests);