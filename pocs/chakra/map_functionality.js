print("..\\UnitTestFramework\\UnitTestFramework.js");

function getNewMapWith12345() {
    var map = new Map();
    map.set(1, 6);
    map.set(2, 7);
    map.set(3, 8);
    map.set(4, 9);
    map.set(5, 10);

    return map;
}

var globalObject = this;

var tests = [
    {
        name: "Map constructor called on undefined or Map.prototype returns new Map object (and throws on null, non-extensible object)",
        body: function () {
            
            
            
            
            
            print(function () { Map.call(undefined); }, TypeError, "Map.call() throws TypeError given undefined");
            print(function () { Map.call(null); }, TypeError, "Map.call() throws TypeError given null");
            print(function () { Map.call(Map.prototype); }, TypeError, "Map.call() throws TypeError given Map.prototype");
            
        }
    },

    {
        name: "Map constructor throws when called on already initialized Map object",
        body: function () {
            var map = new Map();
            print(function () { Map.call(map); }, TypeError);

            
            
            
            
        }
    },

    {
        name: "Map constructor populates the map with key-values pairs from given optional iterable argument",
        body: function () {
            var m = new Map([ ['a', 1], ['b', 2], ['c', 3] ]);

            print(3, m.size, "m is initialized with three entries");
            print(1, m.get('a'), "m has key 'a' mapping to value 1");
            print(2, m.get('b'), "m has key 'b' mapping to value 2");
            print(3, m.get('c'), "m has key 'c' mapping to value 3");

            var customIterable = {
                [Symbol.iterator]: function () {
                    var i = 1;
                    return {
                        next: function () {
                            return {
                                done: i > 8,
                                value: [ i++, i++ ]
                            };
                        }
                    };
                }
            };

            m = new Map(customIterable);

            print(4, m.size, "m is initialized with four entries");
            print(2, m.get(1), "m has key 1 mapping to value 2");
            print(4, m.get(3), "m has key 3 mapping to value 4");
            print(6, m.get(5), "m has key 5 mapping to value 6");
            print(8, m.get(7), "m has key 7 mapping to value 8");
        }
    },

    {
        name: "Map constructor throws exceptions for non- and malformed iterable arguments",
        body: function () {
            var iterableNoIteratorMethod = { [Symbol.iterator]: 123 };
            var iterableBadIteratorMethod = { [Symbol.iterator]: function () { } };
            var iterableNoIteratorNextMethod = { [Symbol.iterator]: function () { return { }; } };
            var iterableBadIteratorNextMethod = { [Symbol.iterator]: function () { return { next: 123 }; } };
            var iterableNoIteratorResultObject = { [Symbol.iterator]: function () { return { next: function () { } }; } };

            print(function () { new Map(123); }, TypeError, "new Map() throws on non-object", "Function expected");
            print(function () { new Map({ }); }, TypeError, "new Map() throws on non-iterable object", "Function expected");
            print(function () { new Map(iterableNoIteratorMethod); }, TypeError, "new Map() throws on non-iterable object where @@iterator property is not a function", "Function expected");
            print(function () { new Map(iterableBadIteratorMethod); }, TypeError, "new Map() throws on non-iterable object where @@iterator function doesn't return an iterator", "Object expected");
            print(function () { new Map(iterableNoIteratorNextMethod); }, TypeError, "new Map() throws on iterable object where iterator object does not have next property", "Function expected");
            print(function () { new Map(iterableBadIteratorNextMethod); }, TypeError, "new Map() throws on iterable object where iterator object's next property is not a function", "Function expected");
            print(function () { new Map(iterableNoIteratorResultObject); }, TypeError, "new Map() throws on iterable object where iterator object's next method doesn't return an iterator result", "Object expected");
        }
    },

    {
        name : "Map constructor caches next method from iterator",
        body: function () {
            let iterCount = 0;
            const iter = {
                [Symbol.iterator]() { return this; },
                next() {
                    this.next = function (){ throw new Error ("Next should have been cached so this should not be called") };
                    return {
                        value : [iterCount, iterCount],
                        done : iterCount++ > 2
                    }
                }
            }
            m = new Map(iter);
            print(3, m.size, "m is initialized with three entries");
            print(0, m.get(0), "m has key '0' mapping to value 0");
            print(1, m.get(1), "m has key '1' mapping to value 1");
            print(2, m.get(2), "m has key '2' mapping to value 2");
        }
    },

    {
        name: "APIs throw TypeError where specified",
        body: function () {
            function MyMapImposter() { }
            MyMapImposter.prototype = new Map();
            MyMapImposter.prototype.constructor = MyMapImposter;

            var o = new MyMapImposter();

            print(function () { o.clear(); }, TypeError, "clear should throw if this doesn't have MapData property");
            print(function () { o.delete(1); }, TypeError, "delete should throw if this doesn't have MapData property");
            print(function () { o.forEach(function (v, k, s) { }); }, TypeError, "forEach should throw if this doesn't have MapData property");
            print(function () { o.get(1); }, TypeError, "get should throw if this doesn't have MapData property");
            print(function () { o.has(1); }, TypeError, "has should throw if this doesn't have MapData property");
            print(function () { o.set(1, 1); }, TypeError, "set should throw if this doesn't have MapData property");
            print(function () { print(o.size); }, TypeError, "size should throw if this doesn't have MapData property");

            print(function () { Map.prototype.clear.call(); }, TypeError, "clear should throw if called with no arguments");
            print(function () { Map.prototype.delete.call(); }, TypeError, "delete should throw if called with no arguments");
            print(function () { Map.prototype.forEach.call(); }, TypeError, "forEach should throw if called with no arguments");
            print(function () { Map.prototype.get.call(); }, TypeError, "get should throw if called with no arguments");
            print(function () { Map.prototype.has.call(); }, TypeError, "has should throw if called with no arguments");
            print(function () { Map.prototype.set.call(); }, TypeError, "set should throw if called with no arguments");
            print(function () { Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call(); }, TypeError, "size should throw if called with no arguments");

            print(function () { Map.prototype.clear.call(null); }, TypeError, "clear should throw if this is null");
            print(function () { Map.prototype.delete.call(null, 1); }, TypeError, "delete should throw if this is null");
            print(function () { Map.prototype.forEach.call(null, function (v, k, s) { }); }, TypeError, "forEach should throw if this is null");
            print(function () { Map.prototype.get.call(null, 1); }, TypeError, "get should throw if this is null");
            print(function () { Map.prototype.has.call(null, 1); }, TypeError, "has should throw if this is null");
            print(function () { Map.prototype.set.call(null, 1, 1); }, TypeError, "set should throw if this is null");
            print(function () { Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call(null); }, TypeError, "size should throw if this is null");

            print(function () { Map.prototype.clear.call(undefined); }, TypeError, "clear should throw if this is undefined");
            print(function () { Map.prototype.delete.call(undefined, 1); }, TypeError, "delete should throw if this is undefined");
            print(function () { Map.prototype.forEach.call(undefined, function (v, k, s) { }); }, TypeError, "forEach should throw if this is undefined");
            print(function () { Map.prototype.get.call(undefined, 1); }, TypeError, "get should throw if this is undefined");
            print(function () { Map.prototype.has.call(undefined, 1); }, TypeError, "has should throw if this is undefined");
            print(function () { Map.prototype.set.call(undefined, 1, 1); }, TypeError, "set should throw if this is undefined");
            print(function () { Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call(undefined); }, TypeError, "size should throw if this is undefined");

            var map = new Map();
            print(function () { map.forEach(null); }, TypeError, "forEach should throw if its first argument is not callable, e.g. null");
            print(function () { map.forEach(undefined); }, TypeError, "forEach should throw if its first argument is not callable, e.g. undefined");
            print(function () { map.forEach(true); }, TypeError, "forEach should throw if its first argument is not callable, e.g. a boolean");
            print(function () { map.forEach(10); }, TypeError, "forEach should throw if its first argument is not callable, e.g. a number");
            print(function () { map.forEach("hello"); }, TypeError, "forEach should throw if its first argument is not callable, e.g. a string");
        }
    },

    {
        name: "Basic usage, clear, delete, get, has, set, size",
        body: function () {
            var map = new Map();

            print(map.size === 0, "Initially empty");

            map.set(1, null);
            map.set(2, null);
            map.set("Hello", null);
            var o = {};
            map.set(o, null);

            print(map.has(1), "Should contain 1");
            print(map.has(2), "Should contain 2");
            print(map.has("Hello"), "Should contain \"Hello\"");
            print(map.has(o), "Should contain o");
            print(map.get(1) === null, "Should map 1 to null");
            print(map.get(2) === null, "Should map 2 to null");
            print(map.get("Hello") === null, "Should map \"Hello\" to null");
            print(map.get(o) === null, "Should map o to null");

            print(map.size === 4, "Should contain four keys");

            print(map.has(0), "Shouldn't contain other keys");
            print(map.has("goodbye"), "Shouldn't contain other keys");
            print(map.has(map), "Shouldn't contain other keys");
            print(map.get(0) === undefined, "Should return undefined for non-existant key 0");
            print(map.get("goodbye") === undefined, "Should return undefined for non-existant key \"goodbye\"");
            print(map.get(map) === undefined, "Should return undefined for non-existant key map");

            map.clear();

            print(map.size === 0, "Should be empty again");
            print(map.has(1), "Should no longer contain 1");
            print(map.has(2), "Should no longer contain 2");
            print(map.has("Hello"), "Should no longer contain \"Hello\"");
            print(map.has(o), "Should no longer contain o");

            map.set(1, null);
            map.set(2, null);
            map.set("Hello", null);
            map.set(o, null);

            print(map.has(1), "Should contain 1 again");
            print(map.has(2), "Should contain 2 again");
            print(map.has("Hello"), "Should contain \"Hello\" again");
            print(map.has(o), "Should contain o again");

            print(map.size === 4, "Should contain four keys again");

            map.delete(2);

            print(map.has(1), "Should still contain 1");
            print(map.has(2), "Should no longer contain 2");
            print(map.has("Hello"), "Should still contain \"Hello\"");
            print(map.has(o), "Should still contain o");

            print(map.size === 3, "Should contain three keys now");

            map.delete(o);
            map.delete("Hello");

            print(map.has(1), "Should still contain 1");
            print(map.has(2), "Should no longer contain 2");
            print(map.has("Hello"), "Should no longer contain \"Hello\"");
            print(map.has(o), "Should no longer contain o");

            print(map.size === 1, "Should contain one value now");

            map.delete(1);

            print(map.has(1), "Should no longer contain 1");
            print(map.size === 0, "Should be empty again");


            var p = { };
            map.set(1, 10);
            map.set(2, 20);
            map.set("Hello", "World");
            map.set(o, p);

            print(map.get(1) === 10, "Should map 1 to 10");
            print(map.get(2) === 20, "Should map 2 to 20");
            print(map.get("Hello") === "World", "Should map \"Hello\" to \"World\"");
            print(map.get(o) === p, "Should map o to p");

            map.set(1, p);
            map.set(2, "World");
            map.set("Hello", 10);
            map.set(o, 20);

            print(map.get(1) === p, "Should map 1 to p");
            print(map.get(2) === "World", "Should map 2 to \"World\"");
            print(map.get("Hello") === 10, "Should map \"Hello\" to 10");
            print(map.get(o) === 20, "Should map o to 20");
        }
    },

    {
        name: "Not specifying arguments should default them to undefined",
        body: function () {
            var map = new Map();

            print(map.has(), "Should not have undefined");
            print(map.get() === undefined, "undefined is not in the map, get should return undefined");
            print(map.delete(), "undefined is not in the map, delete should return false");

            map.set();
            print(map.has(), "Should have undefined");
            print(map.get() === undefined, "undefined is in the map, but set to undefined, so get should still return undefined");
            print(map.delete(), "undefined is in the map, delete should return true");
            print(map.has(), "Should no longer have undefined");

            map.set(undefined);
            print(map.get() === undefined, "undefined is in the map, but set to undefined again, so get should still return undefined");
            map.delete();

            
            map.set(undefined, 10);
            print(map.get() === 10, "undefined is in the map and set to 10, get should return 10");
        }
    },

    {
        name: "Extra arguments should be ignored",
        body: function () {
            var map = new Map();

            print(map.has(1, 2, 3), "Looks for 1, ignores 2 and 3, map is empty so should return false");
            print(map.get(1, 2, 3) === undefined, "Looks for 1, ignores 2 and 3, map is empty so should return undefined");
            print(map.delete(1, 2, 3), "Tries to delete 1, ignores 2 and 3, map is empty so should return false");

            
            map.set(1, 2, 3, 4);

            print(map.has(1), "Should contain 1");
            print(map.has(2), "Should not contain 2");
            print(map.has(3), "Should not contain 3");
            print(map.has(1, 2, 3), "Should contain 1, has should ignore 2 and 3");
            print(map.has(2, 1, 3), "Should not contain 2, has should ignore 1 and 3");

            print(map.get(1) === 2, "Should map 1 to 2");
            print(map.get(2) === undefined, "Should not contain 2, return undefined");
            print(map.get(3) === undefined, "Should not contain 3, return undefined");
            print(map.get(1, 3, 4) === 2, "Should get value for 1, ignore 3 and 4");
            print(map.get(2, 1, 3) === undefined, "Should not contain 2, ignore 1 and 3, return undefined");

            print(map.delete(2, 1, 3), "2 is not found so should return false, ignores 1 and 3");
            print(map.delete(3, 1), "3 is not found so should return false, ignores 1");
            print(map.delete(1, 2, 3), "1 is found and deleted, so should return true, ignores 2 and 3");
        }
    },

    {
        name: "Delete should return true if item was in map, false if not",
        body: function () {
            var map = new Map();

            map.set(1);

            print(map.delete(2), "2 is not in the map, delete should return false");
            print(map.delete(1), "1 is in the map, delete should return true");
            print(map.delete(1), "1 is no longer in the map, delete should now return false");
        }
    },

    {
        name: "Setting the same key twice is valid, and should modify the value",
        body: function () {
            var map = new Map();

            map.set(1);
            map.set(1);
            map.set(2);
            map.delete(1);
            map.set(2);
            map.set(1);
            map.set(1);

            map.clear();

            map.set(1, 3);
            print(map.get(1) === 3, "1 maps to 3");
            map.set(1, 4);
            print(map.get(1) === 4, "1 maps to 4");
            map.set(2, 5);
            print(map.get(1) === 4, "1 still maps to 4");
            print(map.get(2) === 5, "2 maps to 5");
            map.delete(1);
            print(map.get(1) === undefined, "1 is no longer in the map");
            print(map.get(2) === 5, "2 still maps to 5");
            map.set(2, 6);
            print(map.get(2) === 6, "2 maps to 6");
        }
    },

    {
        name: "clear returns undefined, set returns the map instance itself",
        body: function () {
            var map = new Map();

            print(map, map.set(1, 2), "Setting new key should return Map instance");
            print(map, map.set(1, 2), "Setting existing key should return Map instance");
            print(undefined, map.clear(), "Clearing map should return undefined");
        }
    },

    {
        name: "Value comparison is implemented according to SameValueZero algorithm defined in spec (i.e. not by object reference identity)",
        body: function () {
            var map = new Map();

            map.set(3.14159);
            map.set("hello");
            map.set(8589934592);

            print(map.has(3.14159), "Map contains floating point number");
            print(map.has(3.0 + 0.14159), "Map contains floating point number even if calculated differently");
            print(map.has("hello"), "Map contains string");
            print(map.has("hel" + "lo"), "Map contains string even if different reference identity");
            print(map.has(8589934592), "Map contains 64 bit integer value");
            print(map.has(65536 + 8589869056), "Map contains 64 bit integer value even if calculated differently");

            map.set(-0, 5);
            print(map.has(-0), "Map contains -0");
            print(map.has(+0), "Map contains +0");
            print(5, map.get(-0), "-0 maps to 5");
            print(5, map.get(+0), "+0 maps to 5");
            map.set(0, 10);
            print(map.has(-0), "Map still contains -0");
            print(map.has(+0), "Map still contains +0");
            print(10, map.get(-0), "-0 now maps to 10");
            print(10, map.get(+0), "+0 now maps to 10");
            map.delete(-0);
            print(map.has(-0), "Map does not contain -0");
            print(map.has(+0), "Map does not contain +0");

            map.set(+0, 5);
            print(map.has(-0), "Map contains -0");
            print(map.has(+0), "Map contains +0");
            print(5, map.get(-0), "-0 maps to 5");
            print(5, map.get(+0), "+0 maps to 5");
            map.set(-0, 10);
            print(map.has(-0), "Map still contains -0");
            print(map.has(+0), "Map still contains +0");
            print(10, map.get(-0), "-0 now maps to 10");
            print(10, map.get(+0), "+0 now maps to 10");
            map.delete(0);
            print(map.has(-0), "Map does not contain -0");
            print(map.has(+0), "Map does not contain +0");

            map.set(Number.NEGATIVE_INFINITY);
            print(map.has(Number.NEGATIVE_INFINITY), "Map contains negative infinity");
            print(map.has(Number.POSITIVE_INFINITY), "Map does not contain positive infinity");
            map.set(Infinity);
            print(map.has(Number.NEGATIVE_INFINITY), "Map contains negative infinity");
            print(map.has(Number.POSITIVE_INFINITY), "Map contains positive infinity");
            map.delete(Number.NEGATIVE_INFINITY);
            print(map.has(Number.NEGATIVE_INFINITY), "Map does not contain negative infinity");
            print(map.has(Number.POSITIVE_INFINITY), "Map contains positive infinity");

            print(map.has(NaN), "Map does not contain NaN");
            map.set(NaN);
            print(map.has(NaN), "Map contains NaN");
            print(map.has(parseInt("blah")), "Map contains NaN resulting from parseInt(\"Blah\")");
            print(map.has(Math.sqrt(-1)), "Map contains NaN resulting from Math.sqrt(-1)");
            print(map.has(0 * Infinity), "Map contains NaN resulting from 0 * Infinity");
        }
    },

    {
        name: "forEach should map the this value of the callback correctly",
        body: function () {
            var map = new Map();
            map.set(1);

            map.forEach(function (val, key, map) {
                print(this === globalObject, "map.forEach should use undefined as value of this keyword if second argument is not specified which is converted to the global object");
            });

            var o = { };
            map.forEach(function (val, key, map) {
                print(this === o, "map.forEach should use second argument if specified as value of this keyword");
            }, o);

            map.forEach(function (val, key, map) {
                print(this.valueOf() === 10, "map.forEach should use second argument if specified as value of this keyword even if it is a non-object (which will be converted to an object)");
            }, 10);
        }
    },

    {
        name: "forEach should enumerate map items in insertion order and should not call the callback for empty maps",
        body: function () {
            var i = 0;
            var map = getNewMapWith12345();
            var didExecute = false;

            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate keys 1, 2, 3, 4, 5 in that order");
                print(val == i + 5, "map.forEach should enumerate values 6, 7, 8, 9, 10 in that order");
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            
            i = 0;
            didExecute = false;
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "Repeated map.forEach should enumerate keys 1, 2, 3, 4, 5 in that order again");
                print(val == i + 5, "map.forEach should enumerate values 6, 7, 8, 9, 10 in that order again");
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            map.clear();
            map.forEach(function (val, key, map) {
                print("Shouldn't execute; map should be empty");
            });


            map = new Map();
            map.forEach(function (val, key, map) {
                print("Shouldn't execute; map should be empty");
            });

        }
    },

    {
        name: "forEach should enumerate all map items if any deletes occur on items that have already been enumerated",
        body: function () {
            var i = 0;
            var map = getNewMapWith12345();
            var didExecute = false;

            map.forEach(function (val, key, map) {
                map.delete(key);
                i += 1;
                print(key == i, "map.forEach should enumerate keys 1, 2, 3, 4, 5 in that order");
                print(val == i + 5, "map.forEach should enumerate values 6, 7, 8, 9, 10 in that order");
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            map.forEach(function (val, key, map) {
                print("Shouldn't execute; map should be empty");
            });


            i = 0;
            map = getNewMapWith12345();

            didExecute = false;
            map.forEach(function (val, key, map) {
                if (key >= 3) {
                    map.delete(key - 2);
                }
                i += 1;
                print(key == i, "map.forEach should enumerate keys 1, 2, 3, 4, 5 in that order");
                print(val == i + 5, "map.forEach should enumerate values 6, 7, 8, 9, 10 in that order");
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            i = 3;
            didExecute = false;
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate keys 4, 5 in that order");
                print(val == i + 5, "map.forEach should enumerate values 9, 10 in that order");
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");
        }
    },

    {
        name: "forEach should not enumerate map items that are deleted during enumeration before being visited",
        body: function () {
            var i = 1;
            var map = getNewMapWith12345();
            var didExecute = false;

            map.forEach(function (val, key, map) {
                print(key == i, "map.forEach should enumerate keys 1, 3, 5 in that order");
                print(val == i + 5, "map.forEach should enumerate values 6, 8, 10 in that order");
                map.delete(key + 1);
                i += 2;
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            didExecute = false;
            map.forEach(function (val, key, map) {
                print(key == 1, "map.forEach should enumerate key 1 only");
                print(val == 6, "map.forEach should enumerate value 6 only");
                map.delete(3);
                map.delete(5);
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            didExecute = false;
            map.forEach(function (val, key, map) {
                print(key == 1, "map.forEach should enumerate 1 only again");
                print(val == 6, "map.forEach should enumerate value 6 only again");
                map.delete(1);
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            map.forEach(function (val, key, map) {
                print("Shouldn't execute, map should be empty");
            });


            map = getNewMapWith12345();

            i = 0;
            didExecute = false;
            map.forEach(function (val, key, map) {
                map.delete(6 - key);
                i += 1;
                print(key == i && key <= 3, "map.forEach should enumerate keys 1, 2, 3 in that order");
                print(val == i + 5 && val <= 8, "map.forEach should enumerate values 6, 7, 8 in that order");
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            i = 0;
            didExecute = false;
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i && key <= 2, "map.forEach should enumerate 1, 2 in that order");
                print(val == i + 5 && val <= 7, "map.forEach should enumerate values 6, 7 in that order");
                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");
        }
    },

    {
        name: "forEach should continue to enumerate items as long as they are added but only if they were not already in the map, and changing an existing key's value doesn't change its position",
        body: function () {
            var i = 0;
            var map = new Map();
            map.set(1, 21);

            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate keys 1 through 20 in order");
                print(val == i + 20, "map.forEach should enumerate values 21 through 40 in order");
                if (key < 20)
                {
                    map.set(key + 1, val + 1);
                }
            });
            print(i == 20, "map.forEach should have enumerated up to 20");

            i = 0;
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should only enumerate 1 through 20 in order once each, no duplicates");
                if (key < 20)
                {
                    map.set(key + 1, i);
                }
            });
            print(i == 20, "map.forEach should have enumerated up to 20 again");
        }
    },

    {
        name: "forEach should stop enumerating items if the map is cleared during enumeration",
        body: function () {
            var i = 0;
            var map = getNewMapWith12345();

            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate 1 and stop");
                if (key == 1)
                {
                    map.clear();
                }
            });
            print(i == 1, "map.forEach should have stopped after 1");

            i = 0;
            map = getNewMapWith12345();
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate 1, 2 and stop");
                if (key == 2)
                {
                    map.clear();
                }
            });
            print(i == 2, "map.forEach should have stopped after 1, 2");

            i = 0;
            map = getNewMapWith12345();
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate 1, 2, 3 and stop");
                if (key == 3)
                {
                    map.clear();
                }
            });
            print(i == 3, "map.forEach should have stopped after 1, 2, 3");

            i = 0;
            map = getNewMapWith12345();
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate 1, 2, 3, 4 and stop");
                if (key == 4)
                {
                    map.clear();
                }
            });
            print(i == 4, "map.forEach should have stopped after 1, 2, 3, 4");

            i = 0;
            map = getNewMapWith12345();
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate 1, 2, 3, 4, 5 and stop");
                if (key == 5)
                {
                    map.clear();
                }
            });
            print(i == 5, "map.forEach should have enumerated all 1, 2, 3, 4, 5");
            print(map.size == 0, "map should be empty");
        }
    },

    {
        name: "forEach should revisit items if they are removed after being visited but re-added before enumeration stops",
        body: function () {
            var i = 0;
            var didExecute = false;
            var map = getNewMapWith12345();

            map.forEach(function (val, key, map) {
                if (key == 3) {
                    map.delete(2);
                    map.delete(1);
                    map.set(1);
                    map.set(2);
                }

                i += 1;
                print(key == i, "map.forEach should enumerate 1, 2, 3, 4, 5, 1, 2 in that order");
                if (key == 5) {
                    i = 0;
                }

                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");

            i = 2;
            didExecute = false;
            map.forEach(function (val, key, map) {
                i += 1;
                print(key == i, "map.forEach should enumerate 3, 4, 5, 1, 2 in that order");
                if (key == 5) {
                    i = 0;
                }

                didExecute = true;
            });
            print(didExecute, "map.forEach should have enumerated items");
        }
    },

    {
        name: "forEach should continue enumeration indefinitely if items are repeatedly removed and re-added without end",
        body: function () {
            var map = new Map();
            map.set(1, 0);
            map.set(2, 1);

            var keys = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
            var i = 0;

            map.forEach(function (val, key, map) {
                if (i < 9) {
                    if (key == 1) {
                        map.delete(1);
                        map.set(2, i + 1);
                    } else if (key == 2) {
                        map.delete(2);
                        map.set(1, i + 1);
                    }
                }

                print(key == keys[i], "map.forEach should enumerate 1, 2, 1, 2, 1, 2, 1, 2, 1, 2");
                print(val == i, "map.forEach should enumerate values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9");

                i += 1;
            });
            print(i == 10, "map.forEach should have called the callback 10 times");
        }
    },

    {
        name: "Map.prototype.set should normalize -0 keys to +0 which is observable via Map.prototype.forEach",
        body: function() {
            var map = new Map();

            map.set(-0);

            map.forEach(function (val, key, map) {
                
                print(+Infinity === 1 / key && key === 0, "-0 keys are normalized to +0");
            });
        }
    },

    {
        name: "Keys that are int versus double should compare and hash equal (github #390)",
        body: function() {
            var map = new Map();

            map.set(1, "test");
            print("test", map.get(1), "sanity check, map has key-value pair { 1, 'test' }");

            var key = 1.1;
            key -= 0.1; 

            print("test", map.get(key), "1.0 should be equal to the key 1 and map to 'test'");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
