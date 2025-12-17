print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "WeakMap constructor called on undefined or WeakMap.prototype returns new WeakMap object (and throws on null, non-extensible object)",
        body: function () {
            
            
            
            
            print(function () { WeakMap.call(undefined); }, TypeError, "WeakMap.call() throws TypeError given undefined");
            print(function () { WeakMap.call(null); }, TypeError, "WeakMap.call() throws TypeError given null");
            print(function () { WeakMap.call(WeakMap.prototype); }, TypeError, "WeakMap.call() throws TypeError given WeakMap.prototype");
            
        }
    },

    {
        name: "WeakMap constructor throws when called on already initialized WeakMap object",
        body: function () {
            var weakmap = new WeakMap();
            print(function () { WeakMap.call(weakmap); }, TypeError);

            
            
            
        }
    },

    {
        name: "WeakMap constructor populates the weakmap with key-values pairs from given optional iterable argument",
        body: function () {
            var keys = [ { }, { }, { }, { } ];
            var wm = new WeakMap([ [keys[0], 1], [keys[1], 2], [keys[2], 3] ]);

            print(1, wm.get(keys[0]), "wm has key keys[0] mapping to value 1");
            print(2, wm.get(keys[1]), "wm has key keys[1] mapping to value 2");
            print(3, wm.get(keys[2]), "wm has key keys[2] mapping to value 3");

            var customIterable = {
                [Symbol.iterator]: function () {
                    var i = 0;
                    return {
                        next: function () {
                            return {
                                done: i > 3,
                                value: [ keys[i], ++i * 2 ]
                            };
                        }
                    };
                }
            };

            wm = new WeakMap(customIterable);

            print(2, wm.get(keys[0]), "wm has key keys[0] mapping to value 2");
            print(4, wm.get(keys[1]), "wm has key keys[1] mapping to value 4");
            print(6, wm.get(keys[2]), "wm has key keys[2] mapping to value 6");
            print(8, wm.get(keys[3]), "wm has key keys[3] mapping to value 8");
        }
    },

    {
        name : "WeakMap constructor caches next method from iterator",
        body: function () {
            const keys = [ { }, { }, { } ];
            let iterCount = 0;
            const iter = {
                [Symbol.iterator]() { return this; },
                next() {
                    this.next = function (){ throw new Error ("Next should have been cached so this should not be called") };
                    return {
                        value : [keys[iterCount], iterCount],
                        done : iterCount++ > 2
                    }
                }
            }
            const wm = new WeakMap(iter);

            print(0, wm.get(keys[0]), "wm has key keys[0]");
            print(1, wm.get(keys[1]), "wm has key keys[1]");
            print(2, wm.get(keys[2]), "wm has key keys[2]");
        }
    },

    {
        name: "WeakMap constructor throws exceptions for non- and malformed iterable arguments",
        body: function () {
            var iterableNoIteratorMethod = { [Symbol.iterator]: 123 };
            var iterableBadIteratorMethod = { [Symbol.iterator]: function () { } };
            var iterableNoIteratorNextMethod = { [Symbol.iterator]: function () { return { }; } };
            var iterableBadIteratorNextMethod = { [Symbol.iterator]: function () { return { next: 123 }; } };
            var iterableNoIteratorResultObject = { [Symbol.iterator]: function () { return { next: function () { } }; } };

            print(function () { new WeakMap(123); }, TypeError, "new WeakMap() throws on non-object", "Function expected");
            print(function () { new WeakMap({ }); }, TypeError, "new WeakMap() throws on non-iterable object", "Function expected");
            print(function () { new WeakMap(iterableNoIteratorMethod); }, TypeError, "new WeakMap() throws on non-iterable object where @@iterator property is not a function", "Function expected");
            print(function () { new WeakMap(iterableBadIteratorMethod); }, TypeError, "new WeakMap() throws on non-iterable object where @@iterator function doesn't return an iterator", "Object expected");
            print(function () { new WeakMap(iterableNoIteratorNextMethod); }, TypeError, "new WeakMap() throws on iterable object where iterator object does not have next property", "Function expected");
            print(function () { new WeakMap(iterableBadIteratorNextMethod); }, TypeError, "new WeakMap() throws on iterable object where iterator object's next property is not a function", "Function expected");
            print(function () { new WeakMap(iterableNoIteratorResultObject); }, TypeError, "new WeakMap() throws on iterable object where iterator object's next method doesn't return an iterator result", "Object expected");
        }
    },

    {
        name: "APIs throw TypeError where specified",
        body: function () {
            function MyWeakMapImposter() { }
            MyWeakMapImposter.prototype = new WeakMap();
            MyWeakMapImposter.prototype.constructor = MyWeakMapImposter;

            var o = new MyWeakMapImposter();

            print(function () { o.delete(o); }, TypeError, "delete should throw if this doesn't have WeakMapData property");
            print(function () { o.get(o); }, TypeError, "get should throw if this doesn't have WeakMapData property");
            print(function () { o.has(o); }, TypeError, "has should throw if this doesn't have WeakMapData property");
            print(function () { o.set(o, o); }, TypeError, "set should throw if this doesn't have WeakMapData property");

            print(function () { WeakMap.prototype.delete.call(); }, TypeError, "delete should throw if called with no arguments");
            print(function () { WeakMap.prototype.get.call(); }, TypeError, "get should throw if called with no arguments");
            print(function () { WeakMap.prototype.has.call(); }, TypeError, "has should throw if called with no arguments");
            print(function () { WeakMap.prototype.set.call(); }, TypeError, "set should throw if called with no arguments");

            print(function () { WeakMap.prototype.delete.call(null, o); }, TypeError, "delete should throw if this is null");
            print(function () { WeakMap.prototype.get.call(null, o); }, TypeError, "get should throw if this is null");
            print(function () { WeakMap.prototype.has.call(null, o); }, TypeError, "has should throw if this is null");
            print(function () { WeakMap.prototype.set.call(null, o, o); }, TypeError, "set should throw if this is null");

            print(function () { WeakMap.prototype.delete.call(undefined, o); }, TypeError, "delete should throw if this is undefined");
            print(function () { WeakMap.prototype.get.call(undefined, o); }, TypeError, "get should throw if this is undefined");
            print(function () { WeakMap.prototype.has.call(undefined, o); }, TypeError, "has should throw if this is undefined");
            print(function () { WeakMap.prototype.set.call(undefined, o, o); }, TypeError, "set should throw if this is undefined");

            var weakmap = new WeakMap();

            print(function () { weakmap.set(null, o); }, TypeError, "set should throw if key is not an object, e.g. null");
            print(function () { weakmap.set(undefined, o); }, TypeError, "set should throw if key is not an object, e.g. undefined");
            print(function () { weakmap.set(true, o); }, TypeError, "set should throw if key is not an object, e.g. a boolean");
            print(function () { weakmap.set(10, o); }, TypeError, "set should throw if key is not an object, e.g. a number");
            print(function () { weakmap.set("hello", o); }, TypeError, "set should throw if key is not an object, e.g. a string");
        }
    },

    {
        name: "Non-object key argument silent fails delete, get, and has",
        body: function () {
            var weakmap = new WeakMap();

            print(weakmap.get(null) === undefined, "null is not an object and cannot be a key in a WeakMap; get returns undefined");
            print(weakmap.get(undefined) === undefined, "undefined is not an object and cannot be a key in a WeakMap; get returns undefined");
            print(weakmap.get(true) === undefined, "boolean is not an object and cannot be a key in a WeakMap; get returns undefined");
            print(weakmap.get(10) === undefined, "number is not an object and cannot be a key in a WeakMap; get returns undefined");
            print(weakmap.get("hello") === undefined, "string is not an object and cannot be a key in a WeakMap; get returns undefined");

            print(weakmap.has(null), "null is not an object and cannot be a key in a WeakMap; has returns false");
            print(weakmap.has(undefined), "undefined is not an object and cannot be a key in a WeakMap; has returns false");
            print(weakmap.has(true), "boolean is not an object and cannot be a key in a WeakMap; has returns false");
            print(weakmap.has(10), "number is not an object and cannot be a key in a WeakMap; has returns false");
            print(weakmap.has("hello"), "string is not an object and cannot be a key in a WeakMap; has returns false");

            print(weakmap.delete(null), "null is not an object and cannot be a key in a WeakMap; delete returns false");
            print(weakmap.delete(undefined), "undefined is not an object and cannot be a key in a WeakMap; delete returns false");
            print(weakmap.delete(true), "boolean is not an object and cannot be a key in a WeakMap; delete returns false");
            print(weakmap.delete(10), "number is not an object and cannot be a key in a WeakMap; delete returns false");
            print(weakmap.delete("hello"), "string is not an object and cannot be a key in a WeakMap; delete returns false");

            var booleanObject = new Boolean(true);
            var numberObject = new Number(10);
            var stringObject = new String("hello");

            weakmap.set(booleanObject, null);
            weakmap.set(numberObject, null);
            weakmap.set(stringObject, null);

            print(weakmap.get(true) === undefined, "boolean is not an object and cannot be a key in a WeakMap; get returns undefined");
            print(weakmap.get(10) === undefined, "number is not an object and cannot be a key in a WeakMap; get returns undefined");
            print(weakmap.get("hello") === undefined, "string is not an object and cannot be a key in a WeakMap; get returns undefined");

            print(weakmap.has(true), "boolean is not an object and cannot be a key in a WeakMap; has returns false");
            print(weakmap.has(10), "number is not an object and cannot be a key in a WeakMap; has returns false");
            print(weakmap.has("hello"), "string is not an object and cannot be a key in a WeakMap; has returns false");

            print(weakmap.delete(true), "boolean is not an object and cannot be a key in a WeakMap; delete returns false");
            print(weakmap.delete(10), "number is not an object and cannot be a key in a WeakMap; delete returns false");
            print(weakmap.delete("hello"), "string is not an object and cannot be a key in a WeakMap; delete returns false");
        }
    },

    {
        name: "Basic usage, delete, get, has, set",
        body: function () {
            var weakmap = new WeakMap();

            var o = { };
            var p = { };
            var q = { };

            weakmap.set(o, 10);
            weakmap.set(p, o);
            weakmap.set(q, q);

            print(weakmap.has(o), "Should contain key o");
            print(weakmap.has(p), "Should contain key p");
            print(weakmap.has(q), "Should contain key q");
            print(weakmap.has(weakmap), "Should not contain other keys, 'weakmap'");
            print(weakmap.has({ }), "Should not contain other keys, '{ }'");

            print(weakmap.get(o) === 10, "Should weakmap o to 10");
            print(weakmap.get(p) === o, "Should weakmap p to o");
            print(weakmap.get(q) === q, "Should weakmap q to q");
            print(weakmap.get(weakmap) === undefined, "Should return undefined for non-existant key, 'weakmap'");
            print(weakmap.get({ }) === undefined, "Should return undefined for non-existant key, '{ }'");

            print(weakmap.delete(p), "Should return true after deleting key p");

            print(weakmap.has(o), "Should still contain key o");
            print(weakmap.has(p), "Should no longer contain key p");
            print(weakmap.has(q), "Should still contain key q");

            print(weakmap.delete(p), "Should return false, p is no longer a key");

            print(weakmap.delete(o), "Should return true after deleting key o");
            print(weakmap.delete(q), "Should return true after deleting key q");

            print(weakmap.has(o), "Should no longer contain key o");
            print(weakmap.has(p), "Should still not contain key p");
            print(weakmap.has(q), "Should no longer contain key q");
        }
    },

    {
        name: "Not specifying arguments should default them to undefined",
        body: function () {
            var weakmap = new WeakMap();

            print(weakmap.has(), "Should return false for implicit undefined; has");
            print(weakmap.get() === undefined, "Should return undefined for implicit undefined; get");
            print(weakmap.delete(), "Should return false for implicit undefined; delete");

            print(function () { weakmap.set(); }, TypeError, "Should throw TypeError for implicit undefined; set");
        }
    },

    {
        name: "Extra arguments should be ignored",
        body: function () {
            var weakmap = new WeakMap();
            var o = { };
            var p = { };
            var q = { };

            print(weakmap.has(o, p, q), "Looks for o, ignores p and q, weak weakmap is empty and has should return false");
            print(weakmap.get(o, p, q) === undefined, "Looks for o, ignores p and q, weak weakmap is empty and get should return false");
            print(weakmap.delete(o, p, q), "Looks for o, ignores p and q, weak weakmap is empty and delete should return false");

            weakmap.set(o, p, q);

            print(weakmap.has(o), "Should contain o");
            print(weakmap.has(p), "Should not contain p");
            print(weakmap.has(q), "Should not contain q");
            print(weakmap.has(o, p, q), "Ignores p and q, does have o");
            print(weakmap.has(o, q, p), "Order of extra arguments has no affect, still has o");
            print(weakmap.has(p, o), "Ignores o, does not have p");

            print(weakmap.get(o) === p, "Should contain o and return p");
            print(weakmap.get(p) === undefined, "Should not contain p and return undefined");
            print(weakmap.get(q) === undefined, "Should not contain q and return undefined");
            print(weakmap.get(o, p, q) === p, "Ignores p and q, does have o, returns p");
            print(weakmap.get(o, q, p) === p, "Order of extra arguments has no affect, still has o, still returns p");
            print(weakmap.get(p, o) === undefined, "Ignores o, does not have p and returns undefined");

            print(weakmap.delete(p, o, q), "p is not found so should return false, ignores o and q");
            print(weakmap.delete(q, o), "q is not found so should return false, ignores o");
            print(weakmap.delete(o, p, q), "o is found and deleted, so should return true, ignores p and q");
        }
    },

    {
        name: "Delete should return true if item was in the WeakMap, false if not",
        body: function () {
            var weakmap = new WeakMap();
            var o = { };
            var p = { };

            weakmap.set(o, p);

            print(weakmap.delete(p), "p is not a key in the weakmap, delete should return false");
            print(weakmap.delete(o), "o is a key in the weakmap, delete should remove it and return true");
            print(weakmap.delete(o), "o is no longer a key in the weakmap, delete should now return false");
        }
    },

    {
        name: "Setting the same key twice is valid, and should modify the value",
        body: function () {
            var weakmap = new WeakMap();

            var o = { };
            var p = { };

            weakmap.set(o);
            weakmap.set(o);
            weakmap.set(p);
            weakmap.delete(o);
            weakmap.set(p);
            weakmap.set(o);
            weakmap.set(o);

            weakmap.delete(o);
            weakmap.delete(p);

            weakmap.set(o, 3);
            print(weakmap.get(o) === 3, "o maps to 3");
            weakmap.set(o, 4);
            print(weakmap.get(o) === 4, "o maps to 4");
            weakmap.set(p, 5);
            print(weakmap.get(o) === 4, "o still maps to 4");
            print(weakmap.get(p) === 5, "p maps to 5");
            weakmap.delete(o);
            print(weakmap.get(o) === undefined, "o is no longer in the weakmap");
            print(weakmap.get(p) === 5, "p still maps to 5");
            weakmap.set(p, 6);
            print(weakmap.get(p) === 6, "p maps to 6");
        }
    },

    {
        name: "set returns the weakmap instance itself",
        body: function () {
            var weakmap = new WeakMap();
            var o = { };

            print(weakmap, weakmap.set(o, o), "Setting new key should return WeakMap instance");
            print(weakmap, weakmap.set(o, o), "Setting existing key should return WeakMap instance");
        }
    },

    {
        name: "Adding and removing keys from one WeakMap shouldn't affect other WeakMaps",
        body: function () {
            var wm1 = new WeakMap();
            var wm2 = new WeakMap();
            var wm3 = new WeakMap();

            var o = { };
            var p = { };
            var q = { };

            wm1.set(o, o);
            wm1.set(p, q);
            wm2.set(q, o);

            print(wm1.has(o), "wm1 has o");
            print(wm2.has(o), "wm2 does not have o");
            print(wm3.has(o), "wm3 does not have o");

            print(wm1.get(o) === o, "wm1 has o map to o");
            print(wm2.get(o) === undefined, "wm2 does not have o and get returns undefined");
            print(wm3.get(o) === undefined, "wm3 does not have o and get returns undefined");

            print(wm1.has(p), "wm1 has p");
            print(wm2.has(q), "wm2 has q");
            print(wm1.has(q), "wm1 does not have q");
            print(wm2.has(p), "wm2 does not have p");
            print(wm3.has(p), "wm3 does not have p");
            print(wm3.has(q), "wm3 does not have q");

            print(wm1.get(p) === q, "wm1 has p map to q");
            print(wm2.get(q) === o, "wm2 has q map to o");
            print(wm1.get(q) === undefined, "wm1 does not have q and get returns undefined");
            print(wm2.get(p) === undefined, "wm2 does not have p and get returns undefined");
            print(wm3.get(p) === undefined, "wm3 does not have p and get returns undefined");
            print(wm3.get(q) === undefined, "wm3 does not have q and get returns undefined");

            wm3.set(p, o);
            wm3.set(q, p);

            print(wm3.has(p), "wm3 now has p");
            print(wm3.has(q), "wm3 now has q");
            print(wm1.has(p), "wm1 still has p");
            print(wm2.has(p), "wm2 still does not have p");
            print(wm1.has(q), "wm1 still does not have q");
            print(wm2.has(q), "wm2 still has q");

            print(wm1.delete(p), "p is removed from wm1");

            print(wm1.has(p), "wm1 no longer has p");
            print(wm3.has(p), "wm3 still has p");

            wm3.delete(p);
            wm3.delete(q);

            print(wm3.has(p), "wm3 no longer has p");
            print(wm3.has(q), "wm3 no longer has q");
            print(wm1.has(o), "wm1 still has o");
            print(wm2.has(q), "wm2 still has q");
        }
    },

    {
        name: "Number, Boolean, and String and other special objects should all as keys",
        body: function () {
            var weakmap = new WeakMap();

            var n = new Number(1);
            var b = new Boolean(2);
            var s = new String("Hi");
            var ab = new ArrayBuffer(32);

            weakmap.set(n, 1);
            weakmap.set(b, 2);
            weakmap.set(s, 3);
            weakmap.set(ab, 4);

            print(weakmap.has(n), "weakmap has key n which is a Number instance");
            print(weakmap.has(b), "weakmap has key b which is a Boolean instance");
            print(weakmap.has(s), "weakmap has key s which is a String instance");
            print(weakmap.has(ab), "weakmap has key ab which is an ArrayBuffer instance");

            print(weakmap.get(n) === 1, "weakmap has key n which is a Number instance and maps it to 1");
            print(weakmap.get(b) === 2, "weakmap has key b which is a Boolean instance and maps it to 2");
            print(weakmap.get(s) === 3, "weakmap has key s which is a String instance and maps it to 3");
            print(weakmap.get(ab) === 4, "weakmap has key ab which is an ArrayBuffer instance and maps it to 4");

            print(weakmap.delete(n), "Successfully delete key n which is a Number instance from weakmap");
            print(weakmap.delete(b), "Successfully delete key b which is a Boolean instance from weakmap");
            print(weakmap.delete(s), "Successfully delete key s which is a String instance from weakmap");
            print(weakmap.delete(ab), "Successfully delete key ab which is an ArrayBuffer instance from weakmap");

            print(weakmap.has(n), "weakmap no longer has key n");
            print(weakmap.has(b), "weakmap no longer has key b");
            print(weakmap.has(s), "weakmap no longer has key s");
            print(weakmap.has(ab), "weakmap no longer has key ab");
        }
    },

    {
        name: "WeakMap can add keys that are sealed and frozen (testworthy because WeakMap implementation sets internal property on key objects)",
        body: function () {
            var wm = new WeakMap();

            var sealedObj = Object.seal({ });
            var frozenObj = Object.freeze({ });

            wm.set(sealedObj, 1248);
            wm.set(frozenObj, 3927);

            print(wm.has(sealedObj), "WeakMap has sealed object as key");
            print(wm.has(frozenObj), "WeakMap has frozen object as key");

            print(1248, wm.get(sealedObj), "WeakMap maps sealed object key to corresponding mapped value");
            print(3927, wm.get(frozenObj), "WeakMap maps frozen object key to corresponding mapped value");

            var wm2 = new WeakMap();

            print(wm2.has(sealedObj), "Second WeakMap does not have sealed object key");
            print(wm2.has(frozenObj), "Second WeakMap does not have frozen object key");

            wm2.set(sealedObj, 42);
            wm2.set(frozenObj, 68);

            print(wm2.has(sealedObj), "Second WeakMap now has sealed object key");
            print(wm2.has(frozenObj), "Second WeakMap now has frozen object key");

            print(wm.has(sealedObj), "First WeakMap still has sealed object as key");
            print(wm.has(frozenObj), "First WeakMap still has frozen object as key");

            wm.delete(sealedObj);
            wm2.delete(frozenObj);

            print(wm2.has(sealedObj), "Second WeakMap still has sealed object key");
            print(wm2.has(frozenObj), "Second WeakMap no longer has frozen object key");

            print(wm.has(sealedObj), "First WeakMap no longer has sealed object as key");
            print(wm.has(frozenObj), "First WeakMap still has frozen object as key");
        }
    },

    {
        name: "WeakMap internal property data is not copied by Object.assign",
        body: function () {
            var key1 = {};
            var key2 = {};
            var map = new WeakMap(); 

            map.set(key1, 1);
            map.delete(Object.assign(key2, key1));
            print(map.has(key2));

            key1 = {};
            key2 = {};
            map = new WeakMap(); 

            map.set(key1, 1);
            key1.a = 1;
            map.delete(Object.assign(key2, key1));
            print(map.has(key2));
        }
    }

];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
