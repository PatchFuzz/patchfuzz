if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Add and sub",
        body: function () {
            print(1n+2n+3n+4n == 10n);
            print(1n-2n+3n+4n == 6n);
            print(1n-2n-3n+4n == 0n);        
            print(1n-2n-3n-4n == -8n);
        }
    },
    {
        name: "valueOf",
        body: function() {
            print(1n+{valueOf:() => 2n} == 3n);
            print(1n-{valueOf:() => 2n} == -1n);
            print(1n+{valueOf:() => -2n} == -1n);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
