print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Set is a constructor on the global object",
        body: function () {
            print(Set !== undefined, "Set should be defined");

            var set1 = new Set();
            
            
            
            

            print(set1 instanceof Set, "'new Set()' should create a Set object");
            
            

            print(0, Set.length, "Set takes one optional argument and spec says length must be 0");
        }
    },
    {
        name: "Set.prototype should have spec defined built-ins",
        body: function () {
            print(Set.prototype.constructor === Set, "Set.prototype should have a constructor property set to Set");

            print(Set.prototype.hasOwnProperty('add'), "Set.prototype should have an add method");
            print(Set.prototype.hasOwnProperty('clear'), "Set.prototype should have a clear method");
            print(Set.prototype.hasOwnProperty('delete'), "Set.prototype should have a delete method");
            print(Set.prototype.hasOwnProperty('forEach'), "Set.prototype should have a forEach method");
            print(Set.prototype.hasOwnProperty('has'), "Set.prototype should have a has method");
            print(Set.prototype.hasOwnProperty('size'), "Set.prototype should have a size accessor");

            print(Set.prototype.add.length === 1, "add method takes one argument");
            print(Set.prototype.clear.length === 0, "clear method takes zero arguments");
            print(Set.prototype.delete.length === 1, "delete method takes one argument");
            print(Set.prototype.forEach.length === 1, "forEach method takes two arguments but second is optional and spec says length must be 1");
            print(Set.prototype.has.length === 1, "has method takes one argument");

            print(Object.getOwnPropertyDescriptor(Set.prototype, 'size').get !== undefined, "size accessor should have get method");
            print(Object.getOwnPropertyDescriptor(Set.prototype, 'size').set === undefined, "size accessor should not have set method");
        }
    },
    {
        name: "Set objects' prototype should be Set.prototype",
        body: function () {
            var set1 = new Set();
            
            
            
            

            print(Object.getPrototypeOf(set1) === Set.prototype, "'new Set()' should set the prototype of the returned object to Set.prototype");
            
        }
    },
    {
        name: "toString of a Set object returns [object Set]",
        body: function () {
            var set = new Set();

            print("[object Set]", '' + set, "toString() of map returns [object Set]");
        }
    },
    {
        name: "Set objects are normal extensible dynamic objects",
        body: function () {
            function countEnumerableProperties(o) {
                var count = 0;
                for (p in o) {
                    count += 1;
                }
                return count;
            }

            var set = new Set();

            print(countEnumerableProperties(Set.prototype) == 0, "Built-in methods should not be enumerable on the prototype object");
            print(countEnumerableProperties(set) == 0, "Built-in methods should not be enumerable on an instance object");

            set.foo = 10;
            set.bar = 'hello';

            print(countEnumerableProperties(set) == 2, "Should be able to add user properties");
            print(set.foo === 10, "Property value should be set and retrieved correctly");
            print(set.bar === 'hello', "Property value should be set and retrieved correctly");

            delete set.foo;
            print(countEnumerableProperties(set) == 1, "Should be able to delete user properties");
            print(set.foo === undefined, "Should be able to delete user properties");
        }
    },
    {
        name: "Set is subclassable",
        body: function () {
            
            
            
            
            
            print(function () { Set.call(); }, TypeError, "Set.call() throws TypeError");
            print(function () { Set.call({ }); }, TypeError, "Set.call() throws TypeError given an object");
            print(function () { Set.call(123); }, TypeError, "Set.call() throws TypeError given a number");
            print(function () { Set.call("hello"); }, TypeError, "Set.call() throws TypeError given a string");

            function MySet() {
                Set.call(this);
            }
            MySet.prototype = new Set();
            MySet.prototype.constructor = MySet;

            print(function () { var mymap = new MySet(); }, TypeError, "Set.call(this) throws TypeError when used in the old subclassing pattern");
            
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
