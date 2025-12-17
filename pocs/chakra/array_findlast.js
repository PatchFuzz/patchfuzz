print("..\\UnitTestFramework\\UnitTestFramework.js");

const tests = [
    {
        name : "name",
        body : function ()
        {
            print(Array.prototype.findLast.name, "findLast");
        }
    },
    {
        name : "length",
        body : function ()
        {
            print(Array.prototype.findLast.length, 1);
        }
    },
    {
        name : "call with boolean",
        body : function ()
        {
            print(undefined, Array.prototype.findLast.call(true, () => {}));
            print(undefined, Array.prototype.findLast.call(false, () => {}));
        }
    },
    {
        name : "altered during loop",
        body : function ()
        {
            var arr = ["Shoes", "Car", "Bike"];
            var results = [];
            
            arr.findLast(function(kValue) {
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
            arr.findLast(function(kValue) {
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
                new Array.prototype.findLast(() => {});
            }, TypeError)
        }
    },
    {
        name : "predicate call parameters",
        body : function ()
        {
            var arr = ["Mike", "Rick", "Leo"];
            var results = [];

            arr.findLast(function(kValue, k, O) {
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
            [1].findLast(function(kValue, k, O) {
                result = this;
            });
            print(this, result);

            var o = {};
            [1].findLast(function() {
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
            [1].findLast(function(kValue, k, O) {
                result = this;
            });
            print(undefined, result);

            var o = {};
            [1].findLast(function() {
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

            arr.findLast(function() {
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
                [].findLast({});
            }, TypeError);
            
            print(() => {
                [].findLast(null);
            }, TypeError);
            
            print(() => {
                [].findLast(undefined);
            }, TypeError);
            
            print(() => {
                [].findLast(true);
            }, TypeError);
            
            print(() => {
                [].findLast(1);
            }, TypeError);
            
            print(() => {
                [].findLast("");
            }, TypeError);
            
            print(() => {
                [].findLast(1);
            }, TypeError);
            
            print(() => {
                [].findLast([]);
            }, TypeError);
            
            print(() => {
                [].findLast(/./);
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

            var result = [].findLast(predicate);
            print(undefined, result);
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
                [1].findLast(predicate);
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
                [].findLast.call(o, function() {});
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
                [].findLast.call(o, function() {});
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
                [].findLast.call(o1);
            }, TestError);

            var o2 = {
                length: {
                    valueOf: function() {
                        throw new TestError();
                    }
                }
            };
            print(function() {
                [].findLast.call(o2);
            }, TestError);
        }
    },
    {
        name : "return abrupt from this",
        body : function ()
        {
            print(function() {
                Array.prototype.findLast.call(undefined, function() { });
            }, TypeError);
            
            print(function() {
                Array.prototype.findLast.call(null, function() { });
            }, TypeError);
        }
    },
    {
        name : "return found value predicate result is true",
        body : function ()
        {
            var arr = ["Shoes", "Car", "Bike"];
            var called = 0;

            var result = arr.findLast(function(val) {
                called++;
                return true;
            });

            print("Bike", result);
            print(1, called, "predicate was called once");

            called = 0;
            result = arr.findLast(function(val) {
                called++;
                return val === "Bike";
            });

            print(1, called, "predicate was called three times");
            print("Bike", result);

            called = 0;
            result = arr.findLast(function(val) {
                called++;
                return val === "Shoes";
            });

            print(3, called, "predicate was called three times");
            print("Shoes", result);

            result = arr.findLast(function(val) {
                return "string";
            });
            print("Bike", result, "coerced string");

            result = arr.findLast(function(val) {
                return {};
            });
            print("Bike", result, "coerced object");

            result = arr.findLast(function(val) {
                return Symbol("");
            });
            print("Bike", result, "coerced Symbol");

            result = arr.findLast(function(val) {
                return 1;
            });
            print("Bike", result, "coerced number");

            result = arr.findLast(function(val) {
                return -1;
            });
            print("Bike", result, "coerced negative number");
        }
    },
    {
        name : "return undefined if predicate returns false value",
        body : function ()
        {
            var arr = ["Shoes", "Car", "Bike"];
            var called = 0;

            var result = arr.findLast(function(val) {
                called++;
                return false;
            });

            print(3, called, "predicate was called three times");
            print(undefined, result);

            result = arr.findLast(function(val) {
                return "";
            });
            print(undefined, result, "coerced string");

            result = arr.findLast(function(val) {
                return undefined;
            });
            print(undefined, result, "coerced undefined");

            result = arr.findLast(function(val) {
                return null;
            });
            print(undefined, result, "coerced null");

            result = arr.findLast(function(val) {
                return 0;
            });
            print(undefined, result, "coerced 0");

            result = arr.findLast(function(val) {
                return NaN;
            });
            print(undefined, result, "coerced NaN");
        }
    },
    {
        name : "return last item",
        body : function ()
        {
            var arr = [ { value: "Shoes" }, { value: "Car" }, { value: "Shoes" }, { value: "Bike" } ];
            var called = 0;

            var result = arr.findLast(function (val) {
                called++;
                return val.value === "Shoes";
            });

            print("Shoes", result.value);
            print(arr[2], result);
            print(2, called);
        }
    },
    {
        name : "length limit and behavior",
        body : function () {
            var arrZero = [];
            var arrOne = [{ value: 1 }];
            var arrMax = [];
            arrMax.length = 2 ** 32 - 1;
            var maxResult = arrMax[2 ** 32 - 2] = { value: 1 };

            var result = arrZero.findLast(function (x) {
                return x.value === 1
            });
            print(undefined, result);

            result = arrOne.findLast(function (x) {
                return x.value === 1
            });
            print(arrOne[0], result);

            result = arrOne.findLast(function (x) {
                return x.value === 2
            });
            print(undefined, result);

            result = arrMax.findLast(function (x) {
                return x.value === 1
            });
            print(maxResult, result);
        }
    }
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
