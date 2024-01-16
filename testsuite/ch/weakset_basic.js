






WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "WeakSet is a constructor on the global object",
        body: function () {
            assert.isTrue(WeakSet !== undefined, "WeakSet should be defined");

            var ws1 = new WeakSet();
            
            
            
            

            assert.isTrue(ws1 instanceof WeakSet, "'new WeakSet()' should create a WeakSet object");
            
            

            assert.areEqual(0, WeakSet.length, "WeakSet takes one optional argument and spec says length must be 0");
        }
    },
    {
        name: "WeakSet.prototype should have spec defined built-ins",
        body: function () {
            assert.isTrue(WeakSet.prototype.constructor === WeakSet, "WeakSet.prototype should have a constructor property set to WeakSet");

            assert.isTrue(WeakSet.prototype.hasOwnProperty('add'), "WeakSet.prototype should have a add method");
            assert.isTrue(WeakSet.prototype.hasOwnProperty('delete'), "WeakSet.prototype should have a delete method");
            assert.isTrue(WeakSet.prototype.hasOwnProperty('has'), "WeakSet.prototype should have a has method");

            assert.isTrue(WeakSet.prototype.add.length === 1, "add method takes two arguments");
            assert.isTrue(WeakSet.prototype.delete.length === 1, "delete method takes one argument");
            assert.isTrue(WeakSet.prototype.has.length === 1, "has method takes one argument");
        }
    },
    {
        name: "WeakSet objects' prototype should be WeakSet.prototype",
        body: function() {
            var ws1 = new WeakSet();
            
            
            
            

            assert.isTrue(Object.getPrototypeOf(ws1) === WeakSet.prototype, "'new WeakSet()' should set the prototype of the returned object to WeakSet.prototype");
            
        }
    },
    {
        name: "toString of a WeakSet object returns [object WeakSet]",
        body: function () {
            var ws = new WeakSet();

            assert.areEqual("[object WeakSet]", '' + ws, "toString() of map returns [object WeakSet]");
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

            assert.isTrue(countEnumerableProperties(WeakSet.prototype) == 0, "Built-in methods should not be enumerable on the prototype object");
            assert.isTrue(countEnumerableProperties(ws) == 0, "Built-in methods should not be enumerable on an instance object");

            ws.foo = 10;
            ws.bar = 'hello';

            assert.isTrue(countEnumerableProperties(ws) == 2, "Should be able to add user properties");
            assert.isTrue(ws.foo === 10, "Property value should be set and retrieved correctly");
            assert.isTrue(ws.bar === 'hello', "Property value should be set and retrieved correctly");

            delete ws.foo;
            assert.isTrue(countEnumerableProperties(ws) == 1, "Should be able to delete user properties");
            assert.isTrue(ws.foo === undefined, "Should be able to delete user properties");
        }
    },
    {
        name: "WeakSet is subclassable",
        body: function () {
            
            
            
            
            
            assert.throws(function () { WeakSet.call(); }, TypeError, "WeakSet.call() throws TypeError");
            assert.throws(function () { WeakSet.call({ }); }, TypeError, "WeakSet.call() throws TypeError given an object");
            assert.throws(function () { WeakSet.call(123); }, TypeError, "WeakSet.call() throws TypeError given a number");
            assert.throws(function () { WeakSet.call("hello"); }, TypeError, "WeakSet.call() throws TypeError given a string");

            function MyWeakSet() {
                WeakSet.call(this);
            }
            MyWeakSet.prototype = new WeakSet();
            MyWeakSet.prototype.constructor = MyWeakSet;

            assert.throws(function () { var mymap = new MyWeakSet(); }, TypeError, "WeakSet.call(this) throws TypeError when used in the old subclassing pattern");
            
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
