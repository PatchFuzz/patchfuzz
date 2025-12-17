if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Array.prototype.includes range test cases",
        body: function () {
            var x = [1, 2, 2, 4, 5, 0, NaN, 0, true, true , false, undefined, 1.1, 2.4]

            for(var i=0; i < x.length; i++)
            {
                print(x.includes(x[i]), "includes returns true for valid search values in the array range including NaN and undefined")
            }
            print(x.includes(-0), "includes treats -0 and +0 as same");
        }
    },
    {
        name: "Array.prototype.includes out of range test cases",
        body: function () {
            var x = [1, 2, 2, 4, 5, 0, NaN, 0, true, true , false, undefined, 1.1, 2.4]

            print(x.includes(1, 1), "includes(1, 1): out of range values should return false");
            print(x.includes(-0, 10), "includes(-0, 10): out of range values should return false");
            print(x.includes(undefined, x.length - 2), "includes(undefined, x.length - 2): out of range values should return false");
            print(x.includes(10), "includes(10): out of range values should return false");
            print(x.includes(null), "includes(null): out of range values should return false");
        }
    },
    {
        name: "Array.prototype.includes works with native arrays",
        body: function () {
            var x = [1, 2, 2, 4, 5, 0]; 
            print(x.includes(2), "includes(2): includes return true for search hits");
            print(x.includes(0), "includes(0): includes return true for search hits");
            print(x.includes(3), "includes(3): includes return false for search miss");
            print(x.includes(1.2), "includes(1.2): includes return false for search miss");
            print(x.includes(undefined), "includes(undefined): includes return false for search miss");
            print(x.includes(2, -5), "includes(2, -5): includes return true for search hit");
            print(x.includes(2, -1), "includes(2, -1): includes return false for search miss");
            print(x.includes(-0), "includes(-0): includes return true for search hit");

            var x = [1,2, 1.2, 2.3, -2.8, 4, 5, 0]; 
            print(x.includes(2.3), "includes(2.3): includes return true for search hits");
            print(x.includes(0), "includes(0): includes return true for search hits");
            print(x.includes(-2.9), "includes(-2.9): includes return false for search miss");
            print(x.includes(1.2), "includes(1.2): includes return false for search miss");
            print(x.includes(undefined), "includes(undefined): includes return false for search miss");
            print(x.includes(2.3, -5), "includes(2.3, -5): includes return true for search hit");
            print(x.includes(2, -1), "includes(2, -1): includes return false for search miss");
            print(x.includes(-0), "includes(-0): includes return true for search hit");
            print(x.includes(-0, -200), "includes(-0, -200): includes return true for search hit");

            print(x.includes(2, 100), "includes(2, 100): includes return true for search hit");

        }
    },
    {
        name: "Array.prototype.includes works with missing elements in arrays",
        body: function () {
            var x = [1, 2, 2, 4, 5, 0]; 
            x[1000] = 25;
            print(x.includes(undefined), "includes(undefined): includes return true for search hit");

            var x = [1,2, 1.2, 2.3, -2.8, 4, 5, 0]; 
            x[1000] = 25.5;
            print(x.includes(undefined), "includes(undefined): includes return true for search hit");

            var x = [ 1, 2, -0, "x"];
            x[1000] = 25.5;
            print(x.includes(undefined), "includes(undefined): includes return true for search hit");
        }
    },
    {
        name: "Array.prototype.includes walks prototype with missing elements in arrays",
        body: function () {
            
            var marker = false;
            var arr = [10];
            Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){return 30;}});
            arr.length = 6;
            print(arr.includes(30), "includes(30): includes successful in searching prototype values");
            print(arr.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");

            arr = [10.1];
            arr.length = 6;
            print(arr.includes(30), "includes(30): includes successful in searching prototype values");
            print(arr.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");
            print(arr.includes(30, 2), "includes(30, 2): includes successful in searching prototype values");
            print(arr.includes(undefined, 4), "includes(undefined, 4): includes return true for search hit invoking prototype");

            arr = ["x"];
            arr.length = 6;
            print(arr.includes(30), "includes(30): includes successful in searching prototype values");
            print(arr.includes(undefined), "includes(undefined): includes return true for search hit invoking prototype");
            print(arr.includes(30, -4), "includes(30, -4): includes successful in searching prototype values");
            print(arr.includes(undefined, -2), "includes(undefined, -2): includes return true for search hit invoking prototype");

        }
    },
    {
        name: "Array.prototype.includes built-in length is 1",
        body: function () {
            print(1, [].includes.length, "includes built-in length is 1");
        }
    },
    {
        name: "Array.prototype.includes built-in works for object",
        body: function () {

            var b = function(){};
            b.prototype = Array.prototype;
            var y = new b();
            var a = {};

            y[0] = "abc";
            y[1] = "def";
            y[2] = "efg";
            y[3] = true;
            y[4] = true;
            y[5] = false;
            y[6] = a;
            y[7] = a;
            y[8] = null;
            y[9] = NaN;

            y.length = 11;

            print(y.includes("abc"), "includes('abc'): includes return true for search hit");
            print(y.includes("abc", 3), "includes('abc', 3): includes return false for search miss");
            print(y.includes("abc", 2), "includes('abc', 2): includes return false for search miss");
            print(y.includes("abc", -2), "includes('abc', -2): includes return false for search miss");
            print(y.includes("xyg"), "includes('xyg'): includes return false for search miss");
            print(y.includes("", -2), "includes('', -2): includes return false for search miss");
            print(y.includes(new Boolean(true)), "includes(new Boolean(true)): includes return false for search miss");
            print(y.includes(NaN), "includes(NaN): includes return true for search hit");
            print(y.includes(undefined), "includes(undefined):includes return true for search hit");
        }
    },
    {
        name: "Array.prototype.includes with proxy to validate that has is not called",
        body: function () {

            var calls = 0;
            var p = new Proxy({}, {
                get : function(_, k) {
                    if (k == 'length') {
                        return 4;
                    }
                    calls++
                    return k*2;
                }
            });

            var a = [].includes.call(p, 100);
            print(calls, 4, "Even though 'has' is not there get will be called 4 times");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}