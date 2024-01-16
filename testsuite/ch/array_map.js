




if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "22.1.3.16: Array.prototype.map basic case",
        body: function () {
            const a = [5, 6, 7];
            let transform = function (value, index, obj) {
                assert.areEqual(obj[index], value);
                return value * index;
            };
            const b = a.map(transform);
            assert.areEqual("0,6,14", b.join(","), "transformed array");
        }
    },
    {
        name: "22.1.3.16: Array.prototype.map should skip missing items",
        body: function () {
            const a = [1, 2, 3];
            delete a[1];
            let callCount = 0;
            let transform = function (value, index, obj) {
                assert.areEqual(obj[index], value);
                callCount += 1;
                return value * 2;
            };
            let b = a.map(transform);
            assert.areEqual(2, callCount, "visited two items only");
            assert.areEqual("2,,6", b.join(","), "transformed array");
        }
    },
    {
        name: "22.1.3.16: mutating array after Array.prototype.map has started",
        body: function () {
            let a = [1, 2, 3];
            let callCount = 0;
            let transform = function (value, index, obj) {
                assert.areEqual(obj[index], value);
                callCount += 1;

                if (index === 0) {
                    delete a[1]; 
                    a[2] = 4; 
                    a[4] = 5; 
                }
                return value * index;
            };
            let b = a.map(transform);
            assert.areEqual(2, callCount, "visited two items only");
            assert.areEqual("0,,8", b.join(","), "transformed array");
            assert.areEqual("1,,4,,5", a.join(","), "mutated array");
        }
    },
    {
        name: "22.1.3.16: Array.prototype.map should call ArraySpeciesCreate which relies on 'constructor' property",
        body: function () {
            const a = [1, 2, 3];
            Object.defineProperty(a, 'constructor', {
                get: function () {
                    throw new Error("13");
                }
            });
            assert.throws(function () { a.map(function () { }); }, Error, "Should throw from constructor", "13");
        }
    },
    {
        name: "22.1.3.16: Array.prototype.map might provide 'this' argument to the callback",
        body: function () {
            const a = [5, 6, 7];
            let that = {calls: 0};
            let transform = function (value, index, obj) {
                this.calls++;
                return 0;
            };
            a.map(transform, that);
            assert.areEqual(3, that.calls, "context's 'calls' property");
        }
    },
    {
        name: "22.1.3.16: Array.prototype.map is generic and can be applied to other objects",
        body: function () {
            let a = { 0: "a", 1: "bc", 2: "" }
            a.length = 3;
            let transform = function (value, index, obj) {
                assert.areEqual(obj[index], value);
                return value + "!";
            };
            const b = Array.prototype.map.call(a, transform);
            assert.areEqual("a!,bc!,!", b.join(","), "transformed object");
        }
    }
];

testRunner.runTests(tests, { verbose: false  });