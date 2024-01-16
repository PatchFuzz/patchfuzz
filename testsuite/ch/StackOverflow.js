



WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "plain recursive call with modified arguments",
        body: function () {
            function recursive(a) {
                recursive(a + 1);
            }
            try {
                recursive(42);
                assert(false); 
            }
            catch (e) {
                assert.areNotEqual(-1, e.message.indexOf("Out of stack space"), "Should be SO exception");
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
                assert(false); 
            }
            catch (e) {
                assert.areNotEqual(-1, e.message.indexOf("Out of stack space"), "Should be SO exception");
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
                assert(false); 
            }
            catch (e) {
                assert.areNotEqual(-1, e.message.indexOf("Out of stack space"), "Should be SO exception");
            }
        }
    },
];
 
testRunner.runTests(tests, { verbose: false  });
