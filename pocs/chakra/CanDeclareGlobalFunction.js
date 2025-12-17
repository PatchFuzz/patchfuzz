print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
    name: "Redeclaring a global function that is not configurable, not writable, and not enumerable",
        body: function () {
            print(
                function () {
                    eval("function undefined(){}")
                },
                TypeError,
                "undefined in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property undefined is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
            print(
                function () {
                    eval("function Infinity(){}")
                },
                TypeError,
                "Infinity in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property Infinity is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
            print(
                function () {
                    eval("function NaN(){}")
                },
                TypeError,
                "NaN in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property NaN is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
            print(
                function () {
                	eval(`
						Object.defineProperty(this, "a", {
                			writable: false,
                			enumerable: false,
                			configurable: false
                		});
						print("function a(){}", "self");
					`);
                },
                TypeError,
                "The property \"a\" is defined to be not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown when \
\"a\" is defined as a function",
                "The global property a is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
        }
    },
    {
        name: "Redeclaring a global async function that is not configurable, not writable, and not enumerable",
        body: function () {
            print(
                function () {
                    eval("async function undefined(){}")
                },
                TypeError,
                "undefined in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property undefined is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
            print(
                function () {
                    eval("async function Infinity(){}")
                },
                TypeError,
                "Infinity in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property Infinity is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
            print(
                function () {
                    eval("async function NaN(){}")
                },
                TypeError,
                "NaN in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property NaN is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
        }
    },
    {
        name: "Redeclaring a global generator function that is not configurable, not writable, and not enumerable",
        body: function () {
            print(
                function () {
                    eval("function* undefined(){}")
                },
                TypeError,
                "undefined in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property undefined is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
            print(
                function () {
                    eval("function* Infinity(){}")
                },
                TypeError,
                "Infinity in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property Infinity is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
            print(
                function () {
                    eval("function* NaN(){}")
                },
                TypeError,
                "NaN in the global scope is not configurable, not writable, and not \
enumerable, thus #sec-globaldeclarationinstantiation states a TypeError should be thrown",
                "The global property NaN is not configurable, writable, \
nor enumerable, therefore cannot be declared as a function"
            );
        }
    },
    {
        name: "Redeclaring a global function that is configurable, writable, or enumerable should not throw a TypeError",
        body: function () {
            eval("function Array(){}");
            eval("function ArrayBuffer(){}");
            eval("function Boolean(){}");
            eval("function DataView(){}");
            eval("function Date(){}");
            eval("function Function(){}");
            eval("function Map(){}");
            eval("function Math(){}");
            eval("function Number(){}");
            eval("function Object(){}");
            eval("function Promise(){}");
            eval("function RegExp(){}");
            eval("function Symbol(){}");
            eval("function TypeError(){}");
            eval("function Uin16Array(){}");
            eval("function WeakMap(){}");
            eval("function decodeURI(){}");
            eval("function escape(){}");
            eval("function print(){}");
            eval("function parseInt(){}");
            eval("function readbuffer(){}");
            eval("function readline(){}");
            eval("function unescape(){}");
        }
    },
    {
        name: "Redeclaring a global function that is not configurable, not writable, \
and not enumerable while not in the global scope should not throw a TypeError",
        body: function () {
            function undefined() { }
            function Infinity() { }
            function NaN() { }
        }
    }
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
