print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "WeakSet constructor called on undefined or WeakSet.prototype returns new WeakSet object (and throws on null, non-extensible object)",
        body: function () {
            
            
            
            
            print(function () { WeakSet.call(undefined); }, TypeError, "WeakSet.call() throws TypeError given undefined");
            print(function () { WeakSet.call(null); }, TypeError, "WeakSet.call() throws TypeError given null");
            print(function () { WeakSet.call(WeakSet.prototype); }, TypeError, "WeakSet.call() throws TypeError given WeakSet.prototype");
            
        }
    },

    {
        name: "WeakSet constructor throws when called on already initialized WeakSet object",
        body: function () {
            var weakset = new WeakSet();
            print(function () { WeakSet.call(weakset); }, TypeError);

            
            
            
            
        }
    },

    {
        name: "WeakSet constructor populates the weakset with values from given optional iterable argument",
        body: function () {
            var keys = [ { }, { }, { }, { } ];
            var ws = new WeakSet([ keys[0], keys[1], keys[2] ]);

            print(ws.has(keys[0]), "ws has value keys[0]");
            print(ws.has(keys[1]), "ws has value keys[1]");
            print(ws.has(keys[2]), "ws has value keys[2]");

            var customIterable = {
                [Symbol.iterator]: function () {
                    var i = 0;
                    return {
                        next: function () {
                            return {
                                done: i > 3,
                                value: keys[i++]
                            };
                        }
                    };
                }
            };

            ws = new WeakSet(customIterable);

            print(ws.has(keys[0]), "ws has key keys[0]");
            print(ws.has(keys[1]), "ws has key keys[1]");
            print(ws.has(keys[2]), "ws has key keys[2]");
            print(ws.has(keys[3]), "ws has key keys[3]");
        }
    },

    {
        name : "WeakSet constructor caches next method from iterator",
        body: function () {
            const keys = [ { }, { }, { } ];
            let iterCount = 0;
            const iter = {
                [Symbol.iterator]() { return this; },
                next() {
                    this.next = function (){ throw new Error ("Next should have been cached so this should not be called") };
                    return {
                        value : keys[iterCount],
                        done : iterCount++ > 2
                    }
                }
            }
            const ws = new WeakSet(iter);

            print(ws.has(keys[0]), "ws has key keys[0]");
            print(ws.has(keys[1]), "ws has key keys[1]");
            print(ws.has(keys[2]), "ws has key keys[2]");
        }
    },

    {
        name: "WeakSet constructor throws exceptions for non- and malformed iterable arguments",
        body: function () {
            var iterableNoIteratorMethod = { [Symbol.iterator]: 123 };
            var iterableBadIteratorMethod = { [Symbol.iterator]: function () { } };
            var iterableNoIteratorNextMethod = { [Symbol.iterator]: function () { return { }; } };
            var iterableBadIteratorNextMethod = { [Symbol.iterator]: function () { return { next: 123 }; } };
            var iterableNoIteratorResultObject = { [Symbol.iterator]: function () { return { next: function () { } }; } };

            print(function () { new WeakSet(123); }, TypeError, "new WeakSet() throws on non-object", "Function expected");
            print(function () { new WeakSet({ }); }, TypeError, "new WeakSet() throws on non-iterable object", "Function expected");
            print(function () { new WeakSet(iterableNoIteratorMethod); }, TypeError, "new WeakSet() throws on non-iterable object where @@iterator property is not a function", "Function expected");
            print(function () { new WeakSet(iterableBadIteratorMethod); }, TypeError, "new WeakSet() throws on non-iterable object where @@iterator function doesn't return an iterator", "Object expected");
            print(function () { new WeakSet(iterableNoIteratorNextMethod); }, TypeError, "new WeakSet() throws on iterable object where iterator object does not have next property", "Function expected");
            print(function () { new WeakSet(iterableBadIteratorNextMethod); }, TypeError, "new WeakSet() throws on iterable object where iterator object's next property is not a function", "Function expected");
            print(function () { new WeakSet(iterableNoIteratorResultObject); }, TypeError, "new WeakSet() throws on iterable object where iterator object's next method doesn't return an iterator result", "Object expected");
        }
    },

    {
        name: "APIs throw TypeError where specified",
        body: function () {
            function MyWeakSetImposter() { }
            MyWeakSetImposter.prototype = new WeakSet();
            MyWeakSetImposter.prototype.constructor = MyWeakSetImposter;

            var o = new MyWeakSetImposter();

            print(function () { o.add(o); }, TypeError, "add should throw if this doesn't have WeakSetData property");
            print(function () { o.delete(o); }, TypeError, "delete should throw if this doesn't have WeakSetData property");
            print(function () { o.has(o); }, TypeError, "has should throw if this doesn't have WeakSetData property");

            print(function () { WeakSet.prototype.add.call(); }, TypeError, "add should throw if called with no arguments");
            print(function () { WeakSet.prototype.delete.call(); }, TypeError, "delete should throw if called with no arguments");
            print(function () { WeakSet.prototype.has.call(); }, TypeError, "has should throw if called with no arguments");

            print(function () { WeakSet.prototype.add.call(null, o); }, TypeError, "add should throw if this is null");
            print(function () { WeakSet.prototype.delete.call(null, o); }, TypeError, "delete should throw if this is null");
            print(function () { WeakSet.prototype.has.call(null, o); }, TypeError, "has should throw if this is null");

            print(function () { WeakSet.prototype.add.call(undefined, o); }, TypeError, "add should throw if this is undefined");
            print(function () { WeakSet.prototype.delete.call(undefined, o); }, TypeError, "delete should throw if this is undefined");
            print(function () { WeakSet.prototype.has.call(undefined, o); }, TypeError, "has should throw if this is undefined");

            var weakset = new WeakSet();

            print(function () { weakset.add(null); }, TypeError, "add should throw if key is not an object, e.g. null");
            print(function () { weakset.add(undefined); }, TypeError, "add should throw if key is not an object, e.g. undefined");
            print(function () { weakset.add(true); }, TypeError, "add should throw if key is not an object, e.g. a boolean");
            print(function () { weakset.add(10); }, TypeError, "add should throw if key is not an object, e.g. a number");
            print(function () { weakset.add("hello"); }, TypeError, "add should throw if key is not an object, e.g. a string");
        }
    },

    {
        name: "Non-object key argument silent fails delete and has",
        body: function () {
            var weakset = new WeakSet();

            print(weakset.has(null), "null is not an object and cannot be a key in a WeakSet; has returns false");
            print(weakset.has(undefined), "undefined is not an object and cannot be a key in a WeakSet; has returns false");
            print(weakset.has(true), "boolean is not an object and cannot be a key in a WeakSet; has returns false");
            print(weakset.has(10), "number is not an object and cannot be a key in a WeakSet; has returns false");
            print(weakset.has("hello"), "string is not an object and cannot be a key in a WeakSet; has returns false");

            print(weakset.delete(null), "null is not an object and cannot be a key in a WeakSet; delete returns false");
            print(weakset.delete(undefined), "undefined is not an object and cannot be a key in a WeakSet; delete returns false");
            print(weakset.delete(true), "boolean is not an object and cannot be a key in a WeakSet; delete returns false");
            print(weakset.delete(10), "number is not an object and cannot be a key in a WeakSet; delete returns false");
            print(weakset.delete("hello"), "string is not an object and cannot be a key in a WeakSet; delete returns false");

            var booleanObject = new Boolean(true);
            var numberObject = new Number(10);
            var stringObject = new String("hello");

            weakset.add(booleanObject);
            weakset.add(numberObject);
            weakset.add(stringObject);

            print(weakset.has(true), "boolean is not an object and cannot be a key in a WeakSet; has returns false");
            print(weakset.has(10), "number is not an object and cannot be a key in a WeakSet; has returns false");
            print(weakset.has("hello"), "string is not an object and cannot be a key in a WeakSet; has returns false");

            print(weakset.delete(true), "boolean is not an object and cannot be a key in a WeakSet; delete returns false");
            print(weakset.delete(10), "number is not an object and cannot be a key in a WeakSet; delete returns false");
            print(weakset.delete("hello"), "string is not an object and cannot be a key in a WeakSet; delete returns false");
        }
    },

    {
        name: "Basic usage, add, delete, has",
        body: function () {
            var weakset = new WeakSet();

            var o = { };
            var p = { };
            var q = { };

            weakset.add(o);
            weakset.add(p);
            weakset.add(q);

            print(weakset.has(o), "Should contain key o");
            print(weakset.has(p), "Should contain key p");
            print(weakset.has(q), "Should contain key q");
            print(weakset.has(weakset), "Should not contain other keys, 'weakset'");
            print(weakset.has({ }), "Should not contain other keys, '{ }'");

            print(weakset.delete(p), "Should return true after deleting key p");

            print(weakset.has(o), "Should still contain key o");
            print(weakset.has(p), "Should no longer contain key p");
            print(weakset.has(q), "Should still contain key q");

            print(weakset.delete(p), "Should return false, p is no longer a key");

            print(weakset.delete(o), "Should return true after deleting key o");
            print(weakset.delete(q), "Should return true after deleting key q");

            print(weakset.has(o), "Should no longer contain key o");
            print(weakset.has(p), "Should still not contain key p");
            print(weakset.has(q), "Should no longer contain key q");
        }
    },

    {
        name: "Not specifying arguments should default them to undefined",
        body: function () {
            var weakset = new WeakSet();

            print(function () { weakset.add(); }, TypeError, "Should throw TypeError for implicit undefined; add");

            print(weakset.has(), "Should return false for implicit undefined; has");
            print(weakset.delete(), "Should return false for implicit undefined; delete");
        }
    },

    {
        name: "Extra arguments should be ignored",
        body: function () {
            var weakset = new WeakSet();
            var o = { };
            var p = { };
            var q = { };

            print(weakset.has(o, p, q), "Looks for o, ignores p and q, weak weakset is empty and has should return false");
            print(weakset.delete(o, p, q), "Looks for o, ignores p and q, weak weakset is empty and delete should return false");

            weakset.add(o, p, q);

            print(weakset.has(o), "Should contain o");
            print(weakset.has(p), "Should not contain p");
            print(weakset.has(q), "Should not contain q");
            print(weakset.has(o, p, q), "Ignores p and q, does have o");
            print(weakset.has(o, q, p), "Order of extra arguments has no affect, still has o");
            print(weakset.has(p, o), "Ignores o, does not have p");

            print(weakset.delete(p, o, q), "p is not found so should return false, ignores o and q");
            print(weakset.delete(q, o), "q is not found so should return false, ignores o");
            print(weakset.delete(o, p, q), "o is found and deleted, so should return true, ignores p and q");
        }
    },

    {
        name: "Delete should return true if item was in the WeakSet, false if not",
        body: function () {
            var weakset = new WeakSet();
            var o = { };
            var p = { };

            weakset.add(o);

            print(weakset.delete(p), "p is not a key in the weakset, delete should return false");
            print(weakset.delete(o), "o is a key in the weakset, delete should remove it and return true");
            print(weakset.delete(o), "o is no longer a key in the weakset, delete should now return false");
        }
    },

    {
        name: "Adding the same key twice is valid, having no affect on the second add",
        body: function () {
            var weakset = new WeakSet();

            var o = { };
            var p = { };

            weakset.add(o);
            weakset.add(o);
            weakset.add(p);
            weakset.delete(o);
            weakset.add(p);
            weakset.add(o);
            weakset.add(o);

            weakset.delete(o);
            weakset.delete(p);

            weakset.add(o);
            print(weakset.has(o), "o is in the weakset");
            weakset.add(o);
            print(weakset.has(o), "o is still in the weakset");
            weakset.add(p);
            print(weakset.has(o), "o is still in the weakset");
            print(weakset.has(p), "p is now in the weakset");
            weakset.delete(o);
            print(weakset.has(o), "o is no longer in the weakset");
            print(weakset.has(p), "p is still in the weakset");
            weakset.add(p);
            print(weakset.has(p), "p is still in the weakset");
        }
    },

    {
        name: "add returns the weakset instance itself",
        body: function () {
            var weakset = new WeakSet();
            var o = { };

            print(weakset, weakset.add(o), "Adding a new key should return WeakSet instance");
            print(weakset, weakset.add(o), "Adding an existing key should return WeakSet instance");
        }
    },

    {
        name: "Adding and removing keys from one WeakSet shouldn't affect other WeakSets",
        body: function () {
            var ws1 = new WeakSet();
            var ws2 = new WeakSet();
            var ws3 = new WeakSet();

            var o = { };
            var p = { };
            var q = { };

            ws1.add(o);
            ws1.add(p);
            ws2.add(q);

            print(ws1.has(o), "ws1 has o");
            print(ws2.has(o), "ws2 does not have o");
            print(ws3.has(o), "ws3 does not have o");

            print(ws1.has(p), "ws1 has p");
            print(ws2.has(q), "ws2 has q");
            print(ws1.has(q), "ws1 does not have q");
            print(ws2.has(p), "ws2 does not have p");
            print(ws3.has(p), "ws3 does not have p");
            print(ws3.has(q), "ws3 does not have q");

            ws3.add(p);
            ws3.add(q);

            print(ws3.has(p), "ws3 now has p");
            print(ws3.has(q), "ws3 now has q");
            print(ws1.has(p), "ws1 still has p");
            print(ws2.has(p), "ws2 still does not have p");
            print(ws1.has(q), "ws1 still does not have q");
            print(ws2.has(q), "ws2 still has q");

            print(ws1.delete(p), "p is removed from ws1");

            print(ws1.has(p), "ws1 no longer has p");
            print(ws3.has(p), "ws3 still has p");

            ws3.delete(p);
            ws3.delete(q);

            print(ws3.has(p), "ws3 no longer has p");
            print(ws3.has(q), "ws3 no longer has q");
            print(ws1.has(o), "ws1 still has o");
            print(ws2.has(q), "ws2 still has q");
        }
    },

    {
        name: "Number, Boolean, and String and other special objects should all as keys",
        body: function () {
            var weakset = new WeakSet();

            var n = new Number(1);
            var b = new Boolean(2);
            var s = new String("Hi");
            var ab = new ArrayBuffer(32);

            weakset.add(n);
            weakset.add(b);
            weakset.add(s);
            weakset.add(ab);

            print(weakset.has(n), "weakset has key n which is a Number instance");
            print(weakset.has(b), "weakset has key b which is a Boolean instance");
            print(weakset.has(s), "weakset has key s which is a String instance");
            print(weakset.has(ab), "weakset has key ab which is an ArrayBuffer instance");

            print(weakset.delete(n), "Successfully delete key n which is a Number instance from weakset");
            print(weakset.delete(b), "Successfully delete key b which is a Boolean instance from weakset");
            print(weakset.delete(s), "Successfully delete key s which is a String instance from weakset");
            print(weakset.delete(ab), "Successfully delete key ab which is an ArrayBuffer instance from weakset");

            print(weakset.has(n), "weakset no longer has key n");
            print(weakset.has(b), "weakset no longer has key b");
            print(weakset.has(s), "weakset no longer has key s");
            print(weakset.has(ab), "weakset no longer has key ab");
        }
    },

];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
