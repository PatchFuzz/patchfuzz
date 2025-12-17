print("..\\UnitTestFramework\\UnitTestFramework.js");

const tests = [
    {
        name : "name",
        body : function ()
        {
            print(Array.prototype.findLastIndex.name, "findLastIndex");
        }
    },
    {
        name : "length",
        body : function ()
        {
            print(Array.prototype.findLastIndex.length, 1);
        }
    },
    {
        name : "call with boolean",
        body : function ()
        {
            print(-1, Array.prototype.findLastIndex.call(true, () => {}));
            print(-1, Array.prototype.findLastIndex.call(false, () => {}));
        }
    },
    {
        name : "altered during loop",
        body : function ()
        {
            var arr = ["Shoes", "Car", "Bike"];
            var results = [];
            
            arr.findLastIndex(function(kValue) {
              if (results.length === 0) {
                arr.splice(1, 1);
              }
              results.push(kValue);
            });
            
            print(3, results.length, "predicate called three times");
            print("Bike", results[0]);
            print("Bike", results[1]);
            print("Shoes", results[2]);
            
            results = [];
            arr = ["Skateboard", "Barefoot"];
            arr.findLastIndex(function(kValue) {
              if (results.length === 0) {
                arr.unshift("Motorcycle");
                arr[0] = "Magic Carpet";
              }
            
              results.push(kValue);
            });
            
            print(2, results.length, "predicate called twice");
            print("Barefoot", results[0]);
            print("Magic Carpet", results[1]);
        }
    },
    {
        name : "not a constructor",
        body : function ()
        {
            print(function (){
                new Array.prototype.findLastIndex(() => {});
            }, TypeError)
        }
    },
    {
        name : "predicate call parameters",
        body : function ()
        {
            var arr = ["Mike", "Rick", "Leo"];
            var results = [];

            arr.findLastIndex(function(kValue, k, O) {
                results.push(arguments);
            });

            print(results.length, 3);

            var result = results[0];
            print("Leo", result[0]);
            print(2, result[1]);
            print(arr, result[2]);
            print(3, result.length);

            result = results[1];
            print("Rick", result[0]);
            print(1, result[1]);
            print(arr, result[2]);
            print(3, result.length);

            result = results[2];
            print("Mike", result[0]);
            print(0, result[1]);
            print(arr, result[2]);
            print(3, result.length);
        }
    },
    {
        name : "predicate call this non strict",
        body : function ()
        {
            var result;
            [1].findLastIndex(function(kValue, k, O) {
                result = this;
            });
            print(this, result);

            var o = {};
            [1].findLastIndex(function() {
                result = this;
            }, o);
            print(o, result);
        }
    },
    {
        name : "predicate call this strict",
        body : function ()
        {
            "use strict";
            var result;
            [1].findLastIndex(function(kValue, k, O) {
                result = this;
            });
            print(undefined, result);

            var o = {};
            [1].findLastIndex(function() {
                result = this;
            }, o);
            print(o, result);
        }
    },
    {
        name : "predicate called for each array property",
        body : function ()
        {
            var arr = [undefined, , , "foo"];
            var called = 0;

            arr.findLastIndex(function() {
                called++;
            });

            print(4, called);
        }
    },
    {
        name : "predicate is not callable throws",
        body : function ()
        {
            print(() => {
                [].findLastIndex({});
            }, TypeError);
            
            print(() => {
                [].findLastIndex(null);
            }, TypeError);
            
            print(() => {
                [].findLastIndex(undefined);
            }, TypeError);
            
            print(() => {
                [].findLastIndex(true);
            }, TypeError);
            
            print(() => {
                [].findLastIndex(1);
            }, TypeError);
            
            print(() => {
                [].findLastIndex("");
            }, TypeError);
            
            print(() => {
                [].findLastIndex(1);
            }, TypeError);
            
            print(() => {
                [].findLastIndex([]);
            }, TypeError);
            
            print(() => {
                [].findLastIndex(/./);
            }, TypeError);
        }
    },
    {
        name : "predicate not called on empty array",
        body : function ()
        {
            var called = false;
            var predicate = function() {
                called = true;
                return true;
            };

            var result = [].findLastIndex(predicate);
            print(-1, result);
            print(false, called);
        }
    },
    {
        name : "return abrupt from predicate call",
        body : function ()
        {
            class TestError extends Error { }

            var predicate = function() {
                throw new TestError();
            };
              
            print(function() {
                [1].findLastIndex(predicate);
            }, TestError);
        }
    },
    {
        name : "return abrupt from property",
        body : function ()
        {
            class TestError extends Error { }

            var o = {
                length: 1
            };
              
            Object.defineProperty(o, 0, {
                get: function() {
                    throw new TestError();
                }
            });
            
            print(function() {
                [].findLastIndex.call(o, function() {});
            }, TestError);
        }
    },
    {
        name : "return abrupt from this length as symbol",
        body : function ()
        {
            var o = {};
            o.length = Symbol(1);
            
            print(function() {
                [].findLastIndex.call(o, function() {});
            }, TypeError);
        }
    },
    {
        name : "return abrupt from this length",
        body : function ()
        {
            class TestError extends Error { }

            var o1 = {};
            Object.defineProperty(o1, "length", {
                get: function() {
                    throw new TestError();
                },
                configurable: true
            });

            print(function() {
                [].findLastIndex.call(o1);
            }, TestError);

            var o2 = {
                length: {
                    valueOf: function() {
                        throw new TestError();
                    }
                }
            };
            print(function() {
                [].findLastIndex.call(o2);
            }, TestError);
        }
    },
    {
        name : "return abrupt from this",
        body : function ()
        {
            print(function() {
                Array.prototype.findLastIndex.call(undefined, function() { });
            }, TypeError);
            
            print(function() {
                Array.prototype.findLastIndex.call(null, function() { });
            }, TypeError);
        }
    },
    {
        name : "return found value predicate result is true",
        body : function ()
        {
            var arr = ["Shoes", "Car", "Bike"];
            var called = 0;

            var result = arr.findLastIndex(function(val) {
                called++;
                return true;
            });

            print(2, result);
            print(1, called, "predicate was called once");

            called = 0;
            result = arr.findLastIndex(function(val) {
                called++;
                return val === "Bike";
            });

            print(1, called, "predicate was called three times");
            print(2, result);

            called = 0;
            result = arr.findLastIndex(function(val) {
                called++;
                return val === "Shoes";
            });

            print(3, called, "predicate was called three times");
            print(0, result);

            result = arr.findLastIndex(function(val) {
                return "string";
            });
            print(2, result, "coerced string");

            result = arr.findLastIndex(function(val) {
                return {};
            });
            print(2, result, "coerced object");

            result = arr.findLastIndex(function(val) {
                return Symbol("");
            });
            print(2, result, "coerced Symbol");

            result = arr.findLastIndex(function(val) {
                return 1;
            });
            print(2, result, "coerced number");

            result = arr.findLastIndex(function(val) {
                return -1;
            });
            print(2, result, "coerced negative number");
        }
    },
    {
        name : "return undefined if predicate returns false value",
        body : function ()
        {
            var arr = ["Shoes", "Car", "Bike"];
            var called = 0;

            var result = arr.findLastIndex(function(val) {
                called++;
                return false;
            });

            print(3, called, "predicate was called three times");
            print(-1, result);

            result = arr.findLastIndex(function(val) {
                return "";
            });
            print(-1, result, "coerced string");

            result = arr.findLastIndex(function(val) {
                return undefined;
            });
            print(-1, result, "coerced undefined");

            result = arr.findLastIndex(function(val) {
                return null;
            });
            print(-1, result, "coerced null");

            result = arr.findLastIndex(function(val) {
                return 0;
            });
            print(-1, result, "coerced 0");

            result = arr.findLastIndex(function(val) {
                return NaN;
            });
            print(-1, result, "coerced NaN");
        }
    },
    {
        name : "return last item",
        body : function ()
        {
            var arr = [ { value: "Shoes" }, { value: "Car" }, { value: "Shoes" }, { value: "Bike" } ];
            var called = 0;

            var result = arr.findLastIndex(function (val) {
                called++;
                return val.value === "Shoes";
            });

            print(2, result);
            print(2, called);
        }
    },
    {
        name : "length limit and behavior",
        body : function () {
            var arrZero = [];
            var arrOne = [1];
            var arrMax = [];
            arrMax.length = 2 ** 32 - 1;
            arrMax[2 ** 32 - 2] = 1;

            var result = arrZero.findLastIndex(function (x) {
                return x === 1
            });
            print(-1, result);

            result = arrOne.findLastIndex(function (x) {
                return x === 1
            });
            print(0, result);

            result = arrOne.findLastIndex(function (x) {
                return x === 2
            });
            print(-1, result);

            result = arrMax.findLastIndex(function (x) {
                return x === 1
            });
            print(2 ** 32 - 2, result);
        }
    }
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
