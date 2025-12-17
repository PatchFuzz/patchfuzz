print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "SyncToLiteralsAndBackupInst should continue scanning for a literal from the furthest point scanned in the previous iteration",
        body: function () {
            var re = /<(foo|bar)/;
            var string = "0bar1<1<foo";

            
            
            
            
            
            var result = re.exec(string);

            print(null, result, "result");
            print(7, result.index, "result.index");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
