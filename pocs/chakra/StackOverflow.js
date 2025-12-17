print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "plain recursive call with modified arguments",
        body: function () {
            function recursive(a) {
                recursive(a + 1);
            }
            try {
                recursive(42);
                print(false); 
            }
            catch (e) {
                print(-1, e.message.indexOf("Out of stack space"), "Should be SO exception");
            }
        }
    },
    {
        name: "plain recursive call with no arguments",
        body: function () {
            function recursive() {
                recursive();
            }
            try {
                recursive();
                print(false); 
            }
            catch (e) {
                print(-1, e.message.indexOf("Out of stack space"), "Should be SO exception");
            }
        }
    },
    {
        name: "recursive call to getter via proxy",
        body: function () {
            var obj = {};
            var handler = {
                get: function () {
                    return obj.x;
                }
            };
            obj = new Proxy(obj, handler);

            try {
                var y = obj.x;
                print(false); 
            }
            catch (e) {
                print(-1, e.message.indexOf("Out of stack space"), "Should be SO exception");
            }
        }
    },
];
 
for (var i = 0; i < tests.length; i ++) {tests[i].body()}
