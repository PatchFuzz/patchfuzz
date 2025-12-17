print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Array.prototype.concat",
        body: function () {
            var arr = ['a','b','c'];
            arr['constructor'] = Number;

            var out = Array.prototype.concat.call(arr, [1,2,3]);

            print(Array.isArray(out), "Return from Array.prototype.concat should be an Array object");
            print(out instanceof Number, "Return from Array.prototype.concat should not have been constructed from Number");
            print(6, out.length, "Array.prototype.concat sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.filter",
        body: function () {
            var arr = ['a','b','c'];
            arr['constructor'] = Number;

            var out = Array.prototype.filter.call(arr, function() { return true; });

            print(Array.isArray(out), "Return from Array.prototype.filter should be an Array object");
            print(out instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
            print(3, out.length, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
        }
    },
    {
        name: "Array.prototype.map",
        body: function () {
            var arr = ['a','b','c'];
            arr['constructor'] = Number;

            var out = Array.prototype.map.call(arr, function(val) { return val; });

            print(Array.isArray(out), "Return from Array.prototype.map should be an Array object");
            print(out instanceof Number, "Return from Array.prototype.map should not have been constructed from Number");
            print(3, out.length, "Array.prototype.map does not set the length property of returned object, but it is Array.");
        }
    },
    {
        name: "Array.prototype.slice",
        body: function () {
            var arr = ['a','b','c'];
            arr['constructor'] = Number;

            var out = Array.prototype.slice.call(arr);

            print(Array.isArray(out), "Return from Array.prototype.slice should be an Array object");
            print(out instanceof Number, "Return from Array.prototype.slice should not have been constructed from Number");
            print(3, out.length, "Array.prototype.slice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice",
        body: function () {
            var arr = ['a','b','c','d','e','f'];
            arr['constructor'] = Number;

            var out = Array.prototype.splice.call(arr, 0, 3);

            print(Array.isArray(out), "Return from Array.prototype.splice should be an Array object");
            print(out instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
            print(3, out.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
