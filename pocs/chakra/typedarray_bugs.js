print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "TypedArray.prototype.filter species create order issue",
    body: function () {
        var a = new Int8Array(2);
        var speciesCalled = false;
        Object.defineProperty(a.constructor, Symbol.species, { get : function () { speciesCalled = true; return Int8Array; } });
        function mapFn() {
            throw new Error('Error from mapFn');
        }
        print(() => a.filter(mapFn), Error, 'Error should be thrown from the mapFn', 'Error from mapFn');
        print(speciesCalled, 'species should not be called as the mapFn throws error');
    }
  },
  {
    name: "TypedArray.prototype.join empty typedarray still evaluate the param",
    body: function () {
        var count = 0;
        var obj = { toString : function () { count++; return ','; } };
        var a = new Int8Array();
        a.join(obj);
        print(count, 1, "a's length is 0 but it should evaluate obj");
        
        count = 0;
        a = new Int8Array(1);
        a.join(obj);
        print(count, 1, "a'length is 1 but it should evaluate obj");
    }
  },
  {
    name: "TypedArray.prototype.join passing 'undefined' should not print that",
    body: function () {
        var a = new Int8Array([11, 22]);
        var ret = a.join(undefined);
        print(ret, "11,22", "join should not join the literal 'undefined' string while joining.");
    }
  },
  {
    name: "TypedArray.prototype.keys/entries/values accept only TypedArray object",
    body: function () {
        function test(fn) {
            var name = fn.name;
            print(() => fn(), TypeError, name + " function throws when no param passed", "'this' is not a typed array object");
            print(() => fn.call(), TypeError, name + " function throws when no param passed", "'this' is not a typed array object");
            print(() => fn.call({}), TypeError, name + " function throws when no TypedArray object passed", "'this' is not a typed array object");
            print(() => fn.call(new ArrayBuffer(1)), TypeError, name + " function throws when no TypedArray object passed", "'this' is not a typed array object");
        }
        test(Int8Array.prototype.keys);
        test(Int8Array.prototype.values);
        test(Int8Array.prototype.entries);
    }
  },
  {
    name: "TypedArray.prototype.set out of bound offset should throw RangeError",
    body: function () {
        var v = new Int8Array(4);
        print(() => v.set([1], -1), RangeError);
        print(() => v.set([1], -1.001), RangeError);
        print(() => v.set([1], -Infinity), RangeError);
        print(() => v.set([1], v.length), RangeError);
        print(() => v.set([1], Infinity), RangeError);
    }
  },
  {
    name: "TypedArray.prototype.subarray range",
    body: function () {
        var v = new Int8Array([11, 22]);
        print(v.subarray(-Infinity), [11, 22], "-Infinity should make the 'begin' to 0");
        print(v.subarray(Infinity), [], "Infinity makes the 'begin' to be same as length");
        print(v.subarray(0, -Infinity), [], "This makes the 'end' to 0");
        print(v.subarray(0, Infinity), [11, 22], "This makes the 'end' to be same as length");
    }
  },
  {
    name: "prototype of the typedarray object should be same when species create invoked",
    body: function () {
        [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array].forEach(function(ctor) {
            var base = new ctor(8);
            
            
            var test = base.subarray(0, 1);
            
            print(Object.getPrototypeOf(base), Object.getPrototypeOf(test), "both should have the same prototype");
        });
    }
  },
  {
    name: "typedarray.prototype.keys should take length from internal slot",
    body: function () {
        var a = new Int8Array(4);
        Object.defineProperty(a, 'length', {value : 10});
        var b = a.keys();
        var counter = 0;
        for (var i of b) {
            counter++;
        }
        print(counter, 4, "The iterable object should iterate only 4 times, not 10 times");
    }
  },
  
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
