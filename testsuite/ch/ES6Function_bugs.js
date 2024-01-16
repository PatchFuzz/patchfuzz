






WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "OS1558391: assignment to 'length' after defineProperty with getter function should not trigger assertion",
        body: function() {
            function f() { }
            Object.defineProperty(f, 'length', {
                get: function () { }
            });
            assert.doesNotThrow(function () { f.length = 1; }, "assertion failure on assignment to 'length' after defineProperty with getter");
         }
    },
    {
        name: "OS1616633: defineProperty with getter function after sealing a function object should not trigger assertion",
        body: function() {
            function g(name) {
                var f=function () { }
                Object.seal(f);
                Object.defineProperty(f, name, {
                    get: function () { }
                    });
            }
            assert.throws(function () { g('length') }, TypeError, "Cannot redefine non-configurable property 'length'");
            assert.throws(function () { g('arguments') }, TypeError, "Cannot redefine non-configurable property 'arguments'");
            assert.throws(function () { g('caller') }, TypeError, "Cannot redefine non-configurable property 'caller'");
         }
    },
    {
        name: "OS1658052: defineProperty with value after sealing a function object should not trigger assertion",
        body: function() {
            function g(name) {
                var f=function () { }
                Object.seal(f);
                Object.defineProperty(f, name, {
                    value: 0
                    });
            }
            assert.doesNotThrow(function () { g('length') }, "assertion failure on defineProperty 'length' with value after sealing a function object");
            assert.throws(function () { g('arguments') }, TypeError, "Cannot redefine non-configurable property 'arguments'");
            assert.throws(function () { g('caller') }, TypeError, "Cannot redefine non-configurable property 'caller'");
         }
    },
    {
        name: "OS1893544: defineProperty with {writable: false, configurable:true} after defineProperty with getter on a function object should not trigger assertion",
        body: function() {
            function g(name) {
                var f=function () { }
                Object.defineProperty(f, name, {
                    get: function () { },
                    });
                Object.defineProperty(f, name, {
                    writable: false,
                    configurable: true
                    });
            }
            assert.doesNotThrow(function () { g('length') }, "assertion failure on defineProperty 'length' with {writable: false, configurable:true} after defineProperty with getter on a function object");
            assert.throws(function () { g('arguments') }, TypeError, "Cannot redefine non-configurable property 'arguments'");
            assert.throws(function () { g('caller') }, TypeError, "Cannot redefine non-configurable property 'caller'");
         }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });

