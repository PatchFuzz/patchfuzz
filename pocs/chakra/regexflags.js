print("..\\UnitTestFramework\\UnitTestFramework.js");

function bindFlagsGetter(thisArg) {
    var getter = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get;
    return getter.bind(thisArg);
}

function generatePrototypeFlagsTests() {
    var testsGroupedByFlag =
        [['global', 'g'],
         ['ignoreCase', 'i'],
         ['multiline', 'm'],
         ['sticky', 'y'],
         ['unicode', 'u'],
         ['dotAll', 's']].map(function ([propertyName, flag]) {
            return [
                {
                    name: "RegExp.prototype.flags should include '" + flag + "' when '" + propertyName + "' is 'true'",
                    body: function () {
                        var object = {};
                        object[propertyName] = true;
                        var flags = bindFlagsGetter(object)();
                        print(flags.includes(flag));
                    }
                },
                {
                    name: "RegExp.prototype.flags should not include '" + flag + "' when '" + propertyName + "' is 'false'",
                    body: function () {
                        var object = {};
                        object[propertyName] = false;
                        var flags = bindFlagsGetter(object)();
                        print(flags.includes(flag));
                    }
                },
                {
                    name: "RegExp.prototype.flags should coerce '" + flag + "' to Boolean",
                    body: function () {
                        var object = {};

                        object[propertyName] = 123;
                        var flags = bindFlagsGetter(object)();
                        print(flags.includes(flag), "123 -> true");

                        object[propertyName] = null;
                        var flags = bindFlagsGetter(object)();
                        print(flags.includes(flag), "null -> false");
                    }
                },
            ];
        });
    return Array.prototype.concat.apply([], testsGroupedByFlag);
}

var tests = [
    {
        name: "Test sticky and unicode and dotAll getter on RegExp.prototype",
        body: function () {
            print(undefined, RegExp.prototype.unicode, "RegExp.prototype.unicode");
            print(undefined, RegExp.prototype.sticky, "RegExp.prototype.sticky");
            print(undefined, RegExp.prototype.dotAll, "RegExp.prototype.sticky");

            function verifier(r, expectedUnicode, expectedSticky, expectedDotAll)
            {
                r.unicode = true; 
                r.sticky = true; 
                r.dotAll = true; 
                print(expectedUnicode, r.unicode, r + ": unicode");
                print(expectedSticky, r.sticky, r + ": sticky");
                print(expectedDotAll, r.dotAll, r + ": dotAll");
            }

            verifier(/.?\d+/, false, false, false);
            RegExp.prototype.unicode = true; 
            verifier(/.?\d+/s, false, false, true);
            verifier(/.?\d+/gu, true, false, false);
            verifier(/.?\d+/gus, true, false, true);
            verifier(/.?\d+/iy, false, true, false);
            RegExp.prototype.sticky = true; 
            RegExp.prototype.dotAll = true; 
            print(undefined, RegExp.prototype.unicode, "RegExp.prototype.unicode");
            print(undefined, RegExp.prototype.sticky, "RegExp.prototype.sticky");
            print(undefined, RegExp.prototype.dotAll, "RegExp.prototype.dotAll");
            verifier(new RegExp("a*bc", "g"), false, false, false);
            verifier(new RegExp("a*bc", "u"), true, false, false);
            verifier(new RegExp("a*bc?","y"), false, true, false);
            verifier(new RegExp("a*bc?","s"), false, false, true);
            verifier(new RegExp("a*b\d\s?","iuys"), true, true, true);
        }
    },
    {
        name: "Test sticky bit with exec()",
        body: function () {
            var pattern = /hello\d\s?/y;
            var text = "hello1 hello2 hello3";
            [["hello1 ", 7],
             ["hello2 ", 14],
             ["hello3", 20],
             [null, 0]].forEach(function ([expectedMatchedString, expectedLastIndex]) {
                var result = pattern.exec(text);
                if (expectedMatchedString !== null) {
                    print(expectedMatchedString, result[0], "matched string");
                }
                else {
                    print(null, result, "result");
                }
                print(expectedLastIndex, pattern.lastIndex, "lastIndex");
            });
        }
    },
    {
        name: "Test sticky bit with test()",
        body: function () {
            var pattern = /hello\d\s?/y;
            var text = "hello1 hello2 hello3";
            [[true, 7],
             [true, 14],
             [true, 20],
             [false, 0]].forEach(function ([expectedResult, expectedLastIndex]) {
                print(expectedResult, pattern.test(text), "result");
                print(expectedLastIndex, pattern.lastIndex, "lastIndex");
            });
        }
    },
    {
        name: "Test sticky bit with search()",
        body: function () {
            var pattern = /hello\d\s?/y;
            var text = "hello1 hello2 hello3";
            print(0, text.search(pattern), "result");
            print(0, pattern.lastIndex, "lastIndex")
        }
    },
    {
        name: "Test sticky bit with replace()",
        body: function () {
            var pattern = /hello\d\s?/y;
            var text = "hello1 hello2 hello3";
            
            print("world hello2 hello3", text.replace(pattern, "world "), "result");
            print(7, pattern.lastIndex, "lastIndex");
        }
    },
    {
        name: "Test sticky bit with replace() with global flag.",
        body: function () {
            var pattern = /hello\d\s?/g;
            var text = "hello1 hello2 hello3";
            
            print("world world world ", text.replace(pattern, "world "), "result");
            print(0, pattern.lastIndex, "lastIndex");
        }
    },
    {
        name: "Test sticky bit with replace() with global/sticky flag.",
        body: function () {
            var pattern = /hello\d\s?/gy;
            var text = "hello1 hello2 hello3";
            
            print("world world world ", text.replace(pattern, "world "), "result");
            print(0, pattern.lastIndex, "lastIndex");
        }
    },
    {
        name: "Test sticky bit with match()",
        body: function () {
            var pattern = /hello\d\s?/y;
            var text = "hello1 hello2 hello3";
            
            var result = text.match(pattern);
            print(1, result.length, "result length");
            print("hello1 ", result[0], "result[0]");
            print(7, pattern.lastIndex, "lastIndex");
        }
    },
    {
        name: "Test sticky bit with match() with global flag.",
        body: function () {
            var pattern = /hello\d\s?/g;
            var text = "hello1 hello2 hello3";
            
            var result = text.match(pattern);
            print(3, result.length, "result length");
            print("hello1 ", result[0], "result[0]");
            print("hello2 ", result[1], "result[1]");
            print("hello3", result[2], "result[2]");
            print(0, pattern.lastIndex, "lastIndex");
        }
    },
    {
        name: "Test sticky bit with match() with global/sticky flag.",
        body: function () {
            var pattern = /hello\d\s?/gy;
            var text = "hello1 hello2 hello3";
            
            var result = text.match(pattern);
            print(3, result.length, "result length");
            print("hello1 ", result[0], "result[0]");
            print("hello2 ", result[1], "result[1]");
            print("hello3", result[2], "result[2]");
            print(0, pattern.lastIndex, "lastIndex");
        }
    },
    {
        name: "Test sticky bit with split()",
        body: function () {
            var pattern = /\d/y;
            var text = "hello1 hello2 hello3";
            
            var result = text.split(pattern);
            print(4, result.length, "result length");
            print("hello", result[0], "result[0]");
            print(" hello", result[1], "result[1]");
            print(" hello", result[2], "result[2]");
            print("", result[3], "result[3]");
            print(0, pattern.lastIndex, "lastIndex");
        }
    },
    {
        name: "RegExp.prototype.flags should throw an exception when 'this' isn't an Object",
        body: function () {
            var nonObject = "string";
            print(bindFlagsGetter(nonObject), TypeError);
        }
    },
    {
        name: "RegExp.prototype.flags should be callable when 'this' is an ordinary Object",
        body: function () {
            print(bindFlagsGetter({}));
        }
    },
    {
        name: "RegExp.prototype.flags should return an empty String when no flag exists",
        body: function () {
            print("", bindFlagsGetter({})());
        }
    },
    {
        name: "RegExp.prototype.flags should return the flags in the correct order",
        body: function () {
            var object = {
                ignoreCase: true,
                unicode: true,
                sticky: true,
                multiline: true,
                dotAll: true,
                global: true
            };
            print("gimusy", bindFlagsGetter(object)());
        }
    },
];
tests = tests.concat(generatePrototypeFlagsTests());

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
