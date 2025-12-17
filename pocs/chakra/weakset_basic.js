print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "WeakSet is a constructor on the global object",
        body: function () {
            print(WeakSet !== undefined, "WeakSet should be defined");

            var ws1 = new WeakSet();
            
            
            
            

            print(ws1 instanceof WeakSet, "'new WeakSet()' should create a WeakSet object");
            
            

            print(0, WeakSet.length, "WeakSet takes one optional argument and spec says length must be 0");
        }
    },
    {
        name: "WeakSet.prototype should have spec defined built-ins",
        body: function () {
            print(WeakSet.prototype.constructor === WeakSet, "WeakSet.prototype should have a constructor property set to WeakSet");

            print(WeakSet.prototype.hasOwnProperty('add'), "WeakSet.prototype should have a add method");
            print(WeakSet.prototype.hasOwnProperty('delete'), "WeakSet.prototype should have a delete method");
            print(WeakSet.prototype.hasOwnProperty('has'), "WeakSet.prototype should have a has method");

            print(WeakSet.prototype.add.length === 1, "add method takes two arguments");
            print(WeakSet.prototype.delete.length === 1, "delete method takes one argument");
            print(WeakSet.prototype.has.length === 1, "has method takes one argument");
        }
    },
    {
        name: "WeakSet objects' prototype should be WeakSet.prototype",
        body: function() {
            var ws1 = new WeakSet();
            
            
            
            

            print(Object.getPrototypeOf(ws1) === WeakSet.prototype, "'new WeakSet()' should set the prototype of the returned object to WeakSet.prototype");
            
        }
    },
    {
        name: "toString of a WeakSet object returns [object WeakSet]",
        body: function () {
            var ws = new WeakSet();

            print("[object WeakSet]", '' + ws, "toString() of map returns [object WeakSet]");
        }
    },
    {
        name: "WeakSet objects are normal extensible dynamic objects",
        body: function () {
            function countEnumerableProperties(o) {
                var count = 0;
                for (p in o) {
                    count += 1;
                }
                return count;
            }

            var ws = new WeakSet();

            print(countEnumerableProperties(WeakSet.prototype) == 0, "Built-in methods should not be enumerable on the prototype object");
            print(countEnumerableProperties(ws) == 0, "Built-in methods should not be enumerable on an instance object");

            ws.foo = 10;
            ws.bar = 'hello';

            print(countEnumerableProperties(ws) == 2, "Should be able to add user properties");
            print(ws.foo === 10, "Property value should be set and retrieved correctly");
            print(ws.bar === 'hello', "Property value should be set and retrieved correctly");

            delete ws.foo;
            print(countEnumerableProperties(ws) == 1, "Should be able to delete user properties");
            print(ws.foo === undefined, "Should be able to delete user properties");
        }
    },
    {
        name: "WeakSet is subclassable",
        body: function () {
            
            
            
            
            
            print(function () { WeakSet.call(); }, TypeError, "WeakSet.call() throws TypeError");
            print(function () { WeakSet.call({ }); }, TypeError, "WeakSet.call() throws TypeError given an object");
            print(function () { WeakSet.call(123); }, TypeError, "WeakSet.call() throws TypeError given a number");
            print(function () { WeakSet.call("hello"); }, TypeError, "WeakSet.call() throws TypeError given a string");

            function MyWeakSet() {
                WeakSet.call(this);
            }
            MyWeakSet.prototype = new WeakSet();
            MyWeakSet.prototype.constructor = MyWeakSet;

            print(function () { var mymap = new MyWeakSet(); }, TypeError, "WeakSet.call(this) throws TypeError when used in the old subclassing pattern");
            
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
