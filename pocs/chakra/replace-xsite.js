print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "String.Replace ( Pattern as String , ReplaceFunction )",
        body: function () {
            print(function() {
                var str = "AAoooAAooo";
                var script = `
                    function foo(str) {
                        return {
                            toString: function () { return str + "ZZ" }
                        }
                    }`

                var replacer = print(script, 'samethread')
                var replaced = str.replace("A", replacer.foo);
            });
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
