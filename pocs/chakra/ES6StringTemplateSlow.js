print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Octal escape sequences are not allowed in string template literals - exhaustive test",
        body: function() {
            function verifyOctalThrows(octalNumber) {
                if (octalNumber < 10) {
                    print(function () { eval('print(`\\00' + octalNumber + '`)'); }, SyntaxError, "Scanning an octal escape sequence " + "`\\00" + octalNumber + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
                }
                if (octalNumber < 100) {
                    print(function () { eval('print(`\\0' + octalNumber + '`)'); }, SyntaxError, "Scanning an octal escape sequence " + "`\\0" + octalNumber + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
                }
                print(function () { eval('print(`\\' + octalNumber + '`)'); }, SyntaxError, "Scanning an octal escape sequence " + "`\\" + octalNumber + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
            }
            for (var i = 1; i <= 255; i++) {
                verifyOctalThrows(i.toString(8));
            }
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
