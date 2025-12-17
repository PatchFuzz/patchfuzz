print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "WeakMap is a constructor on the global object",
        body: function () {
            print(WeakMap !== undefined, "WeakMap should be defined");

            var wm1 = new WeakMap();
            
            
            

            print(wm1 instanceof WeakMap, "'new WeakMap()' should create a WeakMap object");
            
            

            print(0, WeakMap.length, "WeakMap takes one optional argument and spec says length must be 0");
        }
    },
    {
        name: "WeakMap.prototype should have spec defined built-ins",
        body: function () {
            print(WeakMap.prototype.constructor === WeakMap, "WeakMap.prototype should have a constructor property set to WeakMap");

            print(WeakMap.prototype.hasOwnProperty('delete'), "WeakMap.prototype should have a delete method");
            print(WeakMap.prototype.hasOwnProperty('get'), "WeakMap.prototype should have a get method");
            print(WeakMap.prototype.hasOwnProperty('has'), "WeakMap.prototype should have a has method");
            print(WeakMap.prototype.hasOwnProperty('set'), "WeakMap.prototype should have a set method");

            print(WeakMap.prototype.delete.length === 1, "delete method takes one argument");
            print(WeakMap.prototype.get.length === 1, "get method takes one argument");
            print(WeakMap.prototype.has.length === 1, "has method takes one argument");
            print(WeakMap.prototype.set.length === 2, "set method takes two arguments");
        }
    },
    {
        name: "WeakMap objects' prototype should be WeakMap.prototype",
        body: function() {
            var wm1 = new WeakMap();
            
            
            

            print(Object.getPrototypeOf(wm1) === WeakMap.prototype, "'new WeakMap()' should set the prototype of the returned object to WeakMap.prototype");
            
        }
    },
    {
        name: "toString of a WeakMap object returns [object WeakMap]",
        body: function () {
            var wm = new WeakMap();

            print("[object WeakMap]", '' + wm, "toString() of map returns [object WeakMap]");
        }
    },
    {
        name: "WeakMap objects are normal extensible dynamic objects",
        body: function () {
            function countEnumerableProperties(o) {
                var count = 0;
                for (p in o) {
                    count += 1;
                }
                return count;
            }

            var wm = new WeakMap();

            print(countEnumerableProperties(WeakMap.prototype) == 0, "Built-in methods should not be enumerable on the prototype object");
            print(countEnumerableProperties(wm) == 0, "Built-in methods should not be enumerable on an instance object");

            wm.foo = 10;
            wm.bar = 'hello';

            print(countEnumerableProperties(wm) == 2, "Should be able to add user properties");
            print(wm.foo === 10, "Property value should be set and retrieved correctly");
            print(wm.bar === 'hello', "Property value should be set and retrieved correctly");

            delete wm.foo;
            print(countEnumerableProperties(wm) == 1, "Should be able to delete user properties");
            print(wm.foo === undefined, "Should be able to delete user properties");
        }
    },
    {
        name: "WeakMap is subclassable",
        body: function () {
            
            
            
            
            print(function () { WeakMap.call(); }, TypeError, "WeakMap.call() throws TypeError");
            print(function () { WeakMap.call({ }); }, TypeError, "WeakMap.call() throws TypeError given an object");
            print(function () { WeakMap.call(123); }, TypeError, "WeakMap.call() throws TypeError given a number");
            print(function () { WeakMap.call("hello"); }, TypeError, "WeakMap.call() throws TypeError given a string");

            function MyWeakMap() {
                WeakMap.call(this);
            }
            MyWeakMap.prototype = new WeakMap();
            MyWeakMap.prototype.constructor = MyWeakMap;

            print(function () { var mymap = new MyWeakMap(); }, TypeError, "WeakMap.call(this) throws TypeError when used in the old subclassing pattern");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
