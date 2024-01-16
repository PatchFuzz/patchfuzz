

var funcArgAndBodyStr =
"(arr) {" + "\n" +
"    var sum = 0;" + "\n" +
"    for (var i in arr) {" + "\n" +
"        sum += arr[i];" + "\n" +
"    } " +
"    return sum;" + "\n" +
"}";

var testData = {
    "ArrayWithUndecided": { in: [], out: 0 },
    "ArrayWithInt32": { in: [ 1, 2, 3 ], out: 6 },
    "ArrayWithContiguous": { in: [ "a", "b", "c" ], out: "0abc" },
    "ArrayWithDouble": { in: [10.25, 20.25, 30.25 ], out: 60.75 },
    "ArrayWithArrayStorage": { in: [ "a", "b", "c" ], out: "0abc1000" }, 
    "ArrayWithSlowPutArrayStorage": { in: [ "a", "b", "c" ], out: "0abc10" }, 

    "NonArrayWithUndecided": { in: {}, out: 0 },
    "NonArrayWithInt32": { in: { "0":1, "1":2, "2":3 }, out: 6 },
    "NonArrayWithContiguous": { in: { "0":"a", "1":"b", "2":"c" }, out: "0abc" },
    "NonArrayWithDouble": { in: { "0":10.25, "1":20.25, "2":30.25 }, out: 60.75 },
    "NonArrayWithArrayStorage": { in: { "0":"a", "1":"b", "2":"c" }, out: "0abc1000" }, 
    "NonArrayWithSlowPutArrayStorage": { in: { "0":"a", "1":"b", "2":"c" }, out: "0abc10" }, 
};


var o = { a: 10 };
Object.defineProperties(o, {
    "0": {
        get: function() { return this.a; },
        set: function(x) { this.a = x; },
    },
});

testData["ArrayWithArrayStorage"].in[1000] = 1000;
testData["ArrayWithSlowPutArrayStorage"].in.__proto__ = o;
testData["NonArrayWithArrayStorage"].in["1000"] = 1000;
testData["NonArrayWithSlowPutArrayStorage"].in.__proto__ = o;

var numberOfFailures = 0;

function test(name, data) {
    eval("function " + name + funcArgAndBodyStr);
    noInline(name);

    var failed = false;
    var previousResult;
    for (var i = 0; i < 10000; ++i) {
        var expected = data.out;
        var actual = eval(name + "(data.in)");

        if ((actual != expected) && (actual != previousResult)) {
            print("FAIL: " + name + ": expected: " + expected + ", actual: " + actual + ", starting @ loop iteration " + i);
            $vm.breakpoint();
            previousResult = actual;
            failed = true;
            numberOfFailures++;
        }
    }
}

for (name in testData)
    test(name, testData[name]);

if (numberOfFailures)
    throw "Error: number of failures found: " + numberOfFailures;
