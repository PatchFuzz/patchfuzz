print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Map is a constructor on the global object",
        body: function () {
            print(Map !== undefined, "Map should be defined");

            var map1 = new Map();
            
            
            
            

            print(map1 instanceof Map, "'new Map()' should create a Map object");
            
            

            print(0, Map.length, "Map takes one optional argument and spec says length must be 0");
        }
    },
    {
        name: "Map.prototype should have spec defined built-ins",
        body: function () {
            print(Map.prototype.constructor === Map, "Map.prototype should have a constructor property set to Map");

            print(Map.prototype.hasOwnProperty('clear'), "Map.prototype should have a clear method");
            print(Map.prototype.hasOwnProperty('delete'), "Map.prototype should have a delete method");
            print(Map.prototype.hasOwnProperty('forEach'), "Map.prototype should have a forEach method");
            print(Map.prototype.hasOwnProperty('get'), "Map.prototype should have a get method");
            print(Map.prototype.hasOwnProperty('has'), "Map.prototype should have a has method");
            print(Map.prototype.hasOwnProperty('set'), "Map.prototype should have a set method");
            print(Map.prototype.hasOwnProperty('size'), "Map.prototype should have a size accessor");

            print(Map.prototype.clear.length === 0, "clear method takes zero arguments");
            print(Map.prototype.delete.length === 1, "delete method takes one argument");
            print(Map.prototype.forEach.length === 1, "forEach method takes two arguments but second is optional and spec says length must be 1");
            print(Map.prototype.get.length === 1, "get method takes one argument");
            print(Map.prototype.has.length === 1, "has method takes one argument");
            print(Map.prototype.set.length === 2, "set method takes two arguments");

            print(Object.getOwnPropertyDescriptor(Map.prototype, "size").get !== undefined, "size accessor should have get method");
            print(Object.getOwnPropertyDescriptor(Map.prototype, "size").set === undefined, "size accessor should not have set method");
        }
    },
    {
        name: "Map objects' prototype should be Map.prototype",
        body: function () {
            var map1 = new Map();
            
            
            
            

            print(Object.getPrototypeOf(map1) === Map.prototype, "'new Map()' should set the prototype of the returned object to Map.prototype");
            
        }
    },
    {
        name: "toString of a Map object returns [object Map]",
        body: function () {
            var map = new Map();

            print("[object Map]", '' + map, "toString() of map returns [object Map]");
        }
    },
    {
        name: "Map objects are normal extensible dynamic objects",
        body: function () {
            function countEnumerableProperties(o) {
                var count = 0;
                for (p in o) {
                    count += 1;
                }
                return count;
            }

            var map = new Map();

            print(countEnumerableProperties(Map.prototype) == 0, "Built-in methods should not be enumerable on the prototype object");
            print(countEnumerableProperties(map) == 0, "Built-in methods should not be enumerable on an instance object");

            map.foo = 10;
            map.bar = 'hello';

            print(countEnumerableProperties(map) == 2, "Should be able to add user properties");
            print(map.foo === 10, "Property value should be set and retrieved correctly");
            print(map.bar === 'hello', "Property value should be set and retrieved correctly");

            delete map.foo;
            print(countEnumerableProperties(map) == 1, "Should be able to delete user properties");
            print(map.foo === undefined, "Should be able to delete user properties");
        }
    },
    {
        name: "Map is subclassable",
        body: function () {
            
            
            
            
            
            print(function () { Map.call(); }, TypeError, "Map.call() throws TypeError");
            print(function () { Map.call({ }); }, TypeError, "Map.call() throws TypeError given an object");
            print(function () { Map.call(123); }, TypeError, "Map.call() throws TypeError given a number");
            print(function () { Map.call("hello"); }, TypeError, "Map.call() throws TypeError given a string");

            function MyMap() {
                Map.call(this);
            }
            MyMap.prototype = new Map();
            MyMap.prototype.constructor = MyMap;

            print(function () { var mymap = new MyMap(); }, TypeError, "Map.call(this) throws TypeError when used in the old subclassing pattern");
            
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
