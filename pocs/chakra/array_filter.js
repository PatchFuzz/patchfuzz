if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "22.1.3.7: Array.prototype.filter basic case",
        body: function () {
            const a = [2, 1, 0];
            let predicate = function (value, index, obj) {
                print(obj[index], value);
                return value >= index;
            };
            const b = a.filter(predicate);
            print("2,1", b.join(","), "filtered array");
        }
    },
    {
        name: "22.1.3.7: Array.prototype.filter should skip missing items",
        body: function () {
            const a = [1, 2, 3];
            delete a[1];
            let callCount = 0;
            let predicate = function (value, index, obj) {
                print(obj[index], value);
                callCount += 1;
                return true;
            };
            let b = a.filter(predicate);
            print(2, callCount, "visited two items only");
            print("1,3", b.join(","), "filtered array");
        }
    },
    {
        name: "22.1.3.7: mutating array after Array.prototype.filter has started",
        body: function () {
            let a = [1, 2, 3];
            let callCount = 0;
            let predicate = function (value, index, obj) {
                print(obj[index], value);
                callCount += 1;

                if (index === 0) {
                    delete a[1]; 
                    a[2] = 4; 
                    a[4] = 5; 
                }
                return true;
            };
            let b = a.filter(predicate);
            print(2, callCount, "visited two items only");
            print("1,4", b.join(","), "filtered array");
            print("1,,4,,5", a.join(","), "mutated array");
        }
    },
    {
        name: "22.1.3.7: Array.prototype.filter should call ArraySpeciesCreate which relies on 'constructor' property",
        body: function () {
            const a = [1, 2, 3];
            Object.defineProperty(a, 'constructor', {
                get: function () {
                    throw new Error("13");
                }
            });
            print(function () { a.filter(function () { }); }, Error, "Should throw from constructor", "13");
        }
    },
    {
        name: "22.1.3.7: Array.prototype.filter might provide 'this' argument to the callback",
        body: function () {
            const a = [5, 6, 7];
            let that = { calls: 0 };
            let predicate = function (value, index, obj) {
                this.calls++;
                return false;
            };
            const b = a.filter(predicate, that);
            print(3, that.calls, "context's 'calls' property");
            print("", b.join(","), "const 'false' filter should produce empty result");
        }
    },
    {
        name: "22.1.3.7: Array.prototype.filter is generic and can be applied to other objects",
        body: function () {
            let a = { 0: "a", 1: "bc", 2: "de" }
            a.length = 3;
            let predicate = function (value, index, obj) {
                print(obj[index], value);
                return value.length > index;
            };
            const b = Array.prototype.filter.call(a, predicate);
            print("a,bc", b.join(","), "filtered object");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}