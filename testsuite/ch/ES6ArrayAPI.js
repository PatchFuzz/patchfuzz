






WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
var getCount = 0;
var hasCount = 0;

var proxyHandler = {
    get: function (oTarget, sKey) {
        if (sKey == "constructor") {
            return Reflect.get(oTarget, sKey);
        } else if (Number(sKey.toString()) != NaN) {
            getCount++;
            return 2222;
        }
        return Reflect.get(oTarget, sKey);
    },
    has: function (oTarget, sKey) {
        hasCount++;
        return Reflect.has(oTarget, sKey);
    },
};

var tests = [

    {
        name: "Array constructor has correct functions",
        body: function() {
            assert.isTrue(Array.hasOwnProperty('from'), "Array.hasOwnProperty('from');");
            assert.areEqual('function', typeof Array.from, "typeof Array.from === 'function'");
            assert.areEqual(1, Array.from.length, "Array.from.length === 0");

            assert.isTrue(Array.hasOwnProperty('of'), "Array.hasOwnProperty('of');");
            assert.areEqual('function', typeof Array.of, "typeof Array.of === 'function'");
            assert.areEqual(0, Array.of.length, "Array.of.length === 0");
        }
    },
    {
        name: "[0].indexOf(-0.0) should return 0",
        body: function() {
            assert.areEqual(0, [0].indexOf(-0.0), "[0].indexOf(-0.0) should return 0");
        }
    },
    {
        name: "Array.from basic behavior",
        body: function() {
            assert.areEqual([], Array.from([]), "Array.from simplest usage is copying empty array");

            assert.areEqual([], Array.from([], undefined), "Array.from disables mapping function when the param is explicitly passed as undefined");

            assert.areEqual([0,1,2,3], Array.from([0,1,2,3]), "Array.from basic behavior with an iterable object");
            assert.areEqual([0,1,2,3], Array.from({ 0: 0, 1: 1, 2: 2, 3: 3, length: 4 }), "Array.from basic behavior with an object with length but no iterator");
        }
    },
    {
        name: "Array.from special behaviors",
        body: function() {
            var fromFnc = Array.from;

            var b = fromFnc.call(Array, "string");
            assert.areEqual('object', typeof b, "Array.from.call(Array, 'string') returns an array");
            assert.areEqual(['s','t','r','i','n','g'], b, "Array.from.call(Array, 'string') == ['s','t','r','i','n','g']");
            assert.areEqual(6, b.length, "Array.from.call(Array, 'string').length === 6");
            assert.isFalse(ArrayBuffer.isView(b), "Array.from.call(Array, 'string') is not a TypedArray");

            var b = fromFnc.call(String, [0,1,2,3]);
            assert.areEqual('object', typeof b, "Array.from.call(String, [0,1,2,3]) returns a String object");
            assert.areEqual('', b.toString(), "Array.from.call(String, [0,1,2,3]).toString() == '4'");
            assert.areEqual(0, b.length, "Array.from.call(String, [0,1,2,3]).length === 1");
            assert.isFalse(ArrayBuffer.isView(b), "Array.from.call(String, [0,1,2,3]) is not a TypedArray");
            assert.areEqual(0, b[0], "Integer-indexed properties are still added to the string");
            assert.areEqual(1, b[1], "Integer-indexed properties are still added to the string");
            assert.areEqual(2, b[2], "Integer-indexed properties are still added to the string");
            assert.areEqual(3, b[3], "Integer-indexed properties are still added to the string");

            var a = { 0: 0, 1: 1, 2: 2, 3: 3, length: 4 };
            assert.throws(function () { fromFnc.call(String, a); }, TypeError, "String's properties are non-configurable", "Cannot redefine property '0'");

            assert.throws(function() { fromFnc.call(Uint8Array, { 0: 0, 1: 1, 2: 2, length: 5 }); }, TypeError, "Array.from tries to set length of the object returned from the constructor which will throw for TypedArrays", "Cannot define property: object is not extensible");

            var a = { 0: 0, 1: 1, 3: 3, length: 5 };
            var b = fromFnc.call(Array, a);
            assert.areEqual('object', typeof b, "Array.from.call(Array, objectWithLengthProperty) returns an object");
            assert.areEqual('0,1,,3,', b.toString(), "Array.from.call(String, [0,1,2,3]).toString() == '4'");
            assert.areEqual(5, b.length, "Array.from.call(Array, objectWithLengthProperty) returns a new array with length = a.length");
            assert.isFalse(ArrayBuffer.isView(b), "Array.from.call(Array, objectWithLengthProperty) is not a TypedArray (ArrayBuffer.isView)");
            assert.areEqual([0,1,undefined,3,undefined], b, "Array.from.call(Array, objectWithLengthProperty) has missing values set to undefined");

            var a = { 0: 0, 1: 1 };
            var b = fromFnc.call(Array, a);
            assert.areEqual('object', typeof b, "Array.from.call(Array, objectWithLengthNoProperty) returns an object");
            assert.areEqual(0, b.length, "Array.from.call(Array, objectWithLengthNoProperty) returns a new array with length = 0");
            assert.isFalse(ArrayBuffer.isView(b), "Array.from.call(Array, objectWithLengthNoProperty) is not a TypedArray (ArrayBuffer.isView)");
            assert.areEqual([], b, "Array.from.call(Array, objectWithLengthNoProperty) is an empty array");

            assert.areEqual([0,1,2], fromFnc.call(undefined, [0,1,2]), "Calling Array.from with undefined this argument produces an array");
            assert.areEqual([0,1,2], fromFnc.call(null, [0,1,2]), "Calling Array.from with null this argument produces an array");
            assert.areEqual([0,1,2], fromFnc.call({}, [0,1,2]), "Calling Array.from with a non-function this argument produces an array");
            assert.areEqual([0,1,2], fromFnc.call(Math.sin, [0,1,2]), "Calling Array.from with a non-constructor function this argument produces an array");
            assert.areEqual([2], Array.from([1], new Proxy(() => 2, {})), "Calling Array.from with a proxy calls the proxy");
        }
    },
    {
        name: "Array.from error conditions",
        body: function() {
            assert.throws(function () { Array.from(); }, TypeError, "Calling Array.from with non-object items argument throws TypeError", "Array.from: argument is not an Object");
            assert.throws(function () { Array.from(undefined); }, TypeError, "Calling Array.from with non-object items argument throws TypeError", "Array.from: argument is not an Object");
            assert.throws(function () { Array.from(null); }, TypeError, "Calling Array.from with non-object items argument throws TypeError", "Array.from: argument is not an Object");
            assert.throws(function () { Array.from({}, null); }, TypeError, "Calling Array.from with non-object mapFn argument throws TypeError", "Array.from: argument is not a Function object");
            assert.throws(function () { Array.from({}, 'string'); }, TypeError, "Calling Array.from with non-object mapFn argument throws TypeError", "Array.from: argument is not a Function object");
            assert.throws(function () { Array.from({}, {}); }, TypeError, "Calling Array.from with non-function mapFn argument throws TypeError", "Array.from: argument is not a Function object");
        }
    },
    {
        name: "Array.from behavior with a map function",
        body: function() {
            var i = 0;

            function mapFunction(val, k) {
                assert.areEqual(i, k, "Array.from called with a mapping function, we should get the elements in order. Setting item[" + k + "] = " + val);
                assert.areEqual(val, k, "Array.from called with a mapping function, Value and index should be same for this test");
                assert.areEqual(2, arguments.length, "Array.from called with a mapping function, only 2 elements should be passed as arguments");
                
                i++;
            }

            var objectWithoutIterator = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            
            Array.from(objectWithoutIterator, mapFunction);
        }
    },
    {
        name: "Array.from behavior with a map function passing this argument",
        body: function() {
            var thisArg = 'thisArg';

            function mapFunction(val, k) {
                
                assert.areEqual(Object(thisArg), this, "thisArg passed into Array.from should flow into mapFunction");
            }

            var objectWithoutIterator = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            
            Array.from(objectWithoutIterator, mapFunction, thisArg);
        }
    },
    {
        name: "Array.from behavior with a map function that mutates source object",
        body: function() {
            var objectWithoutIterator = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                length: 5
            };

            function mapFunction(val, k) {
                switch (k) {
                    case 0:
                        
                        objectWithoutIterator.length = 0;
                        return val;
                    case 1:
                        
                        objectWithoutIterator[2] = 200;
                        return val;
                    case 2:
                        
                        objectWithoutIterator[0] = -100;
                        return val;
                    case 3:
                        
                        delete objectWithoutIterator[4];
                        return val;
                }

                
                return val;
            }

            assert.areEqual([0,1,200,3,undefined], Array.from(objectWithoutIterator, mapFunction), "Array.from called with a map function that mutates the source object");
        }
    },
    {
        name: "Array.from behavior with iterator and a map function",
        body: function() {
            var j = 0;
            var checkThisArg = false;
            var thisArg = 'string';

            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        i: 0,
                        next: function () {
                            return {
                                done: this.i == 5,
                                value: this.i++
                            };
                        }
                    };
                }
            };

            function mapFunction(val, k) {
                assert.areEqual(j, val, "Array.from called with a mapping function, we should get the elements in order. Setting item[" + j + "] = " + val);
                assert.areEqual(val, k, "Array.from called with a mapping function, index should match the value passed in");
                assert.areEqual(2, arguments.length, "Array.from called with a mapping function, only 2 elements should be passed as arguments");

                
                j++;

                if (checkThisArg) {
                    
                    assert.areEqual(Object(thisArg), this, "thisArg passed into Array.from should flow into mapFunction");
                }
            }

            
            Array.from(objectWithIterator, mapFunction);

            j = 0;
            checkThisArg = true;

            
            Array.from(objectWithIterator, mapFunction, thisArg);
        }
    },
    {
        name: "Array.from behavior with iterator and a map function which mutates the iterator state",
        body: function() {
            var iterator_val = 0;

            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () {
                            return {
                                done: iterator_val == 5,
                                value: iterator_val++
                            };
                        }
                    };
                }
            };

            var reset = false;
            function mapFunction(val, k) {
                if (val == 2 && !reset)
                {
                    reset = true;
                    iterator_val = 0;
                }

                return val;
            }

            assert.areEqual([0,1,2,0,1,2,3,4], Array.from(objectWithIterator, mapFunction), "Array.from called with map function which alters iterator state");
        }
    },
    {
        name: "Array.from caches next method from iterator",
        body: function() {
            var iterator_val = 0;

            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () {
                            this.next = undefined;
                            return {
                                done: iterator_val == 5,
                                value: iterator_val++
                            };
                        }
                    };
                }
            };

            assert.areEqual([0,1,2,3,4], Array.from(objectWithIterator), "Array.from with iterator that removes next method");
        }
    },
    {
        name: "Array.from behavior with badly formed iterator objects",
        body: function() {
            var objectWithIteratorThatIsNotAFunction = { [Symbol.iterator]: 'a string' };
            var objectWithIteratorWhichDoesNotReturnObjects = { [Symbol.iterator]: function() { return undefined; } };
            var objectWithIteratorNextIsNotAFunction = { [Symbol.iterator]: function() { return { next: undefined }; } };
            var objectWithIteratorNextDoesNotReturnObjects = { [Symbol.iterator]: function() { return { next: function() { return undefined; } }; } };

            assert.throws(function() { Array.from(objectWithIteratorThatIsNotAFunction); }, TypeError, "obj[@@iterator] must be a function", "Function expected");
            assert.throws(function() { Array.from(objectWithIteratorWhichDoesNotReturnObjects); }, TypeError, "obj[@@iterator] must return an object", "Object expected");
            assert.throws(function() { Array.from(objectWithIteratorNextIsNotAFunction); }, TypeError, "obj[@@iterator].next must be a function", "Function expected");
            assert.throws(function() { Array.from(objectWithIteratorNextDoesNotReturnObjects); }, TypeError, "obj[@@iterator].next must return an object", "Object expected");

            var objectWithUndefinedIterator = { 0: "a", 1: "b", length: 2, [Symbol.iterator]: undefined };
            var objectWithNullIterator = { 0: "a", 1: "b", length: 2, [Symbol.iterator]: null };

            assert.areEqual([ "a", "b" ], Array.from(objectWithUndefinedIterator), "'@@iterator: undefined' is ignored");
            assert.areEqual([ "a", "b" ], Array.from(objectWithNullIterator), "'@@iterator: null' is ignored");
        }
    },
    {
        name: "Array.of basic behavior",
        body: function() {
            assert.areEqual([], Array.of(), "Array.of basic behavior with no arguments");
            assert.areEqual([3], Array.of(3), "Array.of basic behavior with a single argument");
            assert.areEqual([0,1,2,3], Array.of(0, 1, 2, 3), "Array.of basic behavior with a list of arguments");
        }
    },
    {
        name: "Array.of extended behavior",
        body: function() {
            var ofFnc = Array.of;

            assert.throws(function() { ofFnc.call(Uint8ClampedArray, 0, -1, 2, 300, 4); }, TypeError, "Array.of tries to set length of the object returned from the constructor which will throw for TypedArrays", "Cannot define property: object is not extensible");

            var b = ofFnc.call(Array, 'string', 'other string', 5, { 0: 'string val',length:10 });
            assert.areEqual('object', typeof b, "Array.of.call(Array, ...someStringsAndObjects) returns an array");
            assert.areEqual(['string','other string',5,{ 0: 'string val',length:10 }], b, "Array.of.call(Array, ...someStringsAndObjects) == ['string','other string',5,{ 0: 'string val',length:10 }]");
            assert.areEqual(4, b.length, "Array.of.call(Array, ...someStringsAndObjects).length === 4");
            assert.isFalse(ArrayBuffer.isView(b), "Array.of.call(Array, ...someStringsAndObjects) is not a TypedArray");

            assert.throws(function () { ofFnc.call(String, 0, 1, 2, 3); }, TypeError, "String's properties are non-configurable", "Cannot redefine property '0'");

            assert.areEqual([], ofFnc.call(Array), "Array.of.call(Array) returns empty array");
            assert.areEqual([], ofFnc.call(), "Array.of.call() returns empty array");
        }
    },
    {
        name: "OS:840217 - Array.from, Array#fill, Array#lastIndexOf should use ToLength instead of ToUint32 on their parameter's length property",
        body: function() {
            
            Array.from({length: -1});
            Array.prototype.fill.call({length: -1}, 'a');
            Array.prototype.lastIndexOf.call({length: -1}, 'a');
        }
    },
    {
        name: "Array.from called with an items object that has length > 2^32-1 and is not iterable",
        body: function() {
            var o = {length: 4294967301};

            assert.throws(function() { Array.from(o); }, RangeError, "Array.from uses abstract operation ArrayCreate which throws RangeError when requested length > 2^32-1", "Array length must be a finite positive integer");
        }
    },
    {
        name: "Array.from doesn't get @@iterator twice",
        body: function () {
            let count = 0;
            Array.from({
                get [Symbol.iterator]() {
                    count++;
                    return [][Symbol.iterator];
                }
            });
            assert.areEqual(count, 1, "Array.from calls @@iterator getter once");

            count = 0;
            Array.from(new Proxy({}, {
                get(target, property) {
                    if (property === Symbol.iterator) {
                        count++;
                        return [][Symbol.iterator];
                    }
                    return Reflect.get(target, property);
                }
            }));
            assert.areEqual(count, 1, "Array.from calls proxy's getter with @@iterator as parameter only once");
        }
    },
    {
        name: "Array#fill called with an object that has length > 2^32-1",
        body: function() {
            var e = {length: 4294967301, 4294967297: 1234};
            Array.prototype.fill.call(e, 5678, 4294967298, 4294967300);

            assert.areEqual(1234, e[4294967297], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 does not fill elements outside the request range");
            assert.areEqual(5678, e[4294967298], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 is able to fill elements with indices > 2^32");
            assert.areEqual(5678, e[4294967299], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 is able to fill elements with indices > 2^32");
            assert.areEqual(undefined, e[4294967300], "Array.prototype.fill called on an object with length > 2^32 and a fill range existing completely past 2^32 does not fill elements outside the request range");

            var e = {length: 4294967301, 4294967292: 1234};
            Array.prototype.fill.call(e, 5678, 4294967293, 4294967300);

            assert.areEqual(1234, e[4294967292], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 does not fill elements outside the request range");
            assert.areEqual(5678, e[4294967293], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
            assert.areEqual(5678, e[4294967294], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
            assert.areEqual(5678, e[4294967295], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
            assert.areEqual(5678, e[4294967299], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 is able to fill elements with indices > 2^32");
            assert.areEqual(undefined, e[4294967300], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 does not fill elements outside the request range");
        }
    },
    {
        name: "Array#lastIndexOf called with an object that has length > 2^32-1",
        body: function() {
            var e = {length: 4294967301, 4294967291: 1234, 4294967294: 5678, 4294967295: 5678, 4294967296: 5678, 4294967297: 9};

            assert.areEqual(4294967291, Array.prototype.lastIndexOf.call(e, 1234, 4294967300), "Array.prototype.lastIndexOf called on an object with length > 2^32 and a fromIndex also > 2^32 finds the element when expected index is < 2^32");
            assert.areEqual(4294967296, Array.prototype.lastIndexOf.call(e, 5678, 4294967300), "Array.prototype.lastIndexOf called on an object with length > 2^32 and a fromIndex also > 2^32 finds the element when expected index is > 2^32");

            var e = [1,2,3,4];

            assert.areEqual(0, Array.prototype.lastIndexOf.call(e, 1, 4294967296), "Array.prototype.lastIndexOf is able to find the element when it exists at index 0 when fromIndex > 2^32");
            assert.areEqual(0, Array.prototype.lastIndexOf.call(e, 1), "Array.prototype.lastIndexOf is able to find the element when it exists at index 0 when fromIndex not defined");
        }
    },
    {
        name: "Array#copyWithin called with an object that has length > 2^32-1 and parameters also > 2^32-1",
        body: function() {
            var e = {length: 4294967301, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294};
            Array.prototype.copyWithin.call(e, 5, 4294967292, 4294967294);

            assert.areEqual(4294967292, e[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely < 2^32");
            assert.areEqual(4294967293, e[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely < 2^32");

            var e = {length: 4294967304, 4294967300: 4294967300, 4294967301: 4294967301, 4294967302: 4294967302, 4294967303: 4294967303};
            Array.prototype.copyWithin.call(e, 4294967297, 4294967300, 4294967303);

            assert.areEqual(4294967300, e[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");
            assert.areEqual(4294967301, e[4294967298], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");
            assert.areEqual(4294967302, e[4294967299], "Array.prototype.copyWithin called on an object with length > 2^32 and a source and destination range completely > 2^32");

            var e = {length: 4294967301, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299};
            Array.prototype.copyWithin.call(e, 5, 4294967297, 4294967300);

            assert.areEqual(4294967297, e[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967298, e[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967299, e[7], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range completely < 2^32");

            var e = {length: 4294967301, 0: 0, 1: 1, 2: 2, 3: 3, 4: 4};
            Array.prototype.copyWithin.call(e, 4294967297, 0, 5);

            assert.areEqual(0, e[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
            assert.areEqual(1, e[4294967298], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
            assert.areEqual(2, e[4294967299], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");
            assert.areEqual(3, e[4294967300], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range completely > 2^32");

            var e = {length: 4294967301, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294, 4294967295: 4294967295, 4294967296: 4294967296, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299, 4294967300: 4294967300};
            Array.prototype.copyWithin.call(e, 5, 4294967292, 4294967301);

            assert.areEqual(4294967292, e[5], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967293, e[6], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967294, e[7], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967295, e[8], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967296, e[9], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967297, e[10], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967298, e[11], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967299, e[12], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");
            assert.areEqual(4294967300, e[13], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32");

            var e = {length: 4294967400, 4294967292: 4294967292, 4294967293: 4294967293, 4294967294: 4294967294, 4294967295: 4294967295, 4294967296: 4294967296, 4294967297: 4294967297, 4294967298: 4294967298, 4294967299: 4294967299, 4294967300: 4294967300};
            Array.prototype.copyWithin.call(e, 4294967350, 4294967292, 4294967301);

            assert.areEqual(4294967292, e[4294967350], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            assert.areEqual(4294967293, e[4294967351], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            assert.areEqual(4294967294, e[4294967352], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            assert.areEqual(4294967295, e[4294967353], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            assert.areEqual(4294967296, e[4294967354], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            assert.areEqual(4294967297, e[4294967355], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            assert.areEqual(4294967298, e[4294967356], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            assert.areEqual(4294967299, e[4294967357], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");
            assert.areEqual(4294967300, e[4294967358], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely > 2^32");

            var e = {length: 4294967301, 0: 0, 1: 1, 2: 2, 3: 3, 4: 4};
            Array.prototype.copyWithin.call(e, 4294967293, 0, 5);

            assert.areEqual(0, e[4294967293], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
            assert.areEqual(1, e[4294967294], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
            assert.areEqual(2, e[4294967295], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
            assert.areEqual(3, e[4294967296], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");
            assert.areEqual(4, e[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely < 2^32 and destination range crossing 2^32");

            var e = {length: 4294967420, 4294967400: 4294967400, 4294967401: 4294967401, 4294967402: 4294967402, 4294967403: 4294967403, 4294967404: 4294967404};
            Array.prototype.copyWithin.call(e, 4294967293, 4294967400, 4294967405);

            assert.areEqual(4294967400, e[4294967293], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
            assert.areEqual(4294967401, e[4294967294], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
            assert.areEqual(4294967402, e[4294967295], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
            assert.areEqual(4294967403, e[4294967296], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
            assert.areEqual(4294967404, e[4294967297], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range completely > 2^32 and destination range crossing 2^32");
        }
    },
    {
        name: "Array#lastIndexOf called with a fromIndex < 0 && abs(fromIndex) > length (OS #1185913)",
        body: function() {
            var a = [0, 1];
            var r = a.lastIndexOf(0, -3);

            assert.areEqual(-1, r, "Array.prototype.lastIndexOf returns -1 when the search element is not found");
        }
    },
    {
        name: "Array.of() called with the a bound function without a constructor should not throw an exception",
        body: function () {
            var val = Math.cos.bind(Math);
            assert.isTrue(Array.isArray(Array.of.call(val)));
        }
    },
    {
        name: "Array.of() should not invoke setter",
        body: function () {
            function Bag() {}
            Bag.of = Array.of;
            Object.defineProperty(Bag.prototype, "0", {set: function(v) {  }});
            assert.areEqual(1, Bag.of(1)[0]);
        }
    },
    {
        name: "Array.from() should not invoke setter in iterable case",
        body: function () {
            function Bag() {}
            Bag.from = Array.from;
            Object.defineProperty(Bag.prototype, "0", {set: function(v) { throw "Fail"; }});
            var a = [1,2,3];
            assert.areEqual(1, Bag.from(a)[0]);
        }
    },
    {
        name: "Array.from() should not invoke setter in array like case",
        body: function () {
            function Bag() {}
            Bag.from = Array.from;
            Object.defineProperty(Bag.prototype, "0", {set: function(v) { throw "Fail"; }});
            var a = {};
            a[0] = 1;
            a[1] = 2;
            a[2] = 3;
            a.length = 3;
            assert.areEqual(1, Bag.from(a)[0]);
        }
    },
    {
        name: "Array.filter() should not invoke setter even with substituted constructor",
        body: function () {
            var a = [1,2,3];
            a.constructor = function()
            {
                function Bag() {};
                Object.defineProperty(Bag.prototype, "0", { set: function(v){ throw "Fail"; } });
                return new Bag();
            };
            assert.areEqual(1, a.filter(function(v){return v % 2 == 1;})[0]);
        }
    },
    {
        name: "Array.map() should not invoke setter even with substituted constructor",
        body: function () {
            var a = [1,2,3];
            a.constructor = function()
            {
                function Bag() {};
                Object.defineProperty(Bag.prototype, "0", { set: function(v){ throw "Fail"; } });
                return new Bag();
            };
            assert.areEqual(1, a.map(function(v){return v % 2;})[0]);
        }
    },
    {
        name: "Array.slice() should not invoke setter even with substituted constructor",
        body: function () {
            var a = [1,2,3];
            a.constructor = function()
            {
                function Bag() {};
                Object.defineProperty(Bag.prototype, "0", { set: function(v){ throw "Fail"; } });
                return new Bag();
            };
            assert.areEqual(2, a.slice(1, 3)[0]);
        }
    },
    {
        name: "Array.splice() should not invoke setter even with substituted constructor",
        body: function () {
            var a = [1,2,3];
            a.constructor = function()
            {
                function Bag() {};
                Object.defineProperty(Bag.prototype, "0", { set: function(v){ throw "Fail"; } });
                return new Bag();
            };
            assert.areEqual(1, a.splice(0, 1, 'x')[0]);
        }
    },
    {
        name: "Array.fill() should throw when applied on frozen array",
        body: function () {
            var x = [0];
            Object.freeze(x);
            assert.throws(function() { Array.prototype.fill.call(x) }, TypeError, "We should get a TypeError when fill is applied to a frozen array");
        }
    },
    {
        name: "Array.copyWithin() should throw when applied on frozen array",
        body: function () {
            var x = [1,2,3,4,5];
            Object.freeze(x);
            assert.throws(function() { Array.prototype.copyWithin.call(x, 1, 2) }, TypeError, "We should get a TypeError when copyWithin is applied to a frozen array");
        }
    },
    {
        name: "Array.copyWithin() should call [[HasProperty]] and [[Get]] in the correct order",
        body: function () {
            var ops = [];
            var handlers = {
                get: function (target, name) {
                    ops.push(`get:${name}`);
                    return target[name];
                },
                has: function (target, name) {
                    ops.push(`has:${name}`);
                    return name in target;
                }
            };

            
            var p = new Proxy([1,2,3,4,5], handlers);
            p.copyWithin(3);
            assert.areEqual("get:copyWithin,get:length,has:0,get:0,has:1,get:1", ops.toString());
            ops.length = 0;

            
            p.copyWithin(3, 2);
            assert.areEqual("get:copyWithin,get:length,has:3,get:3,has:2,get:2", ops.toString());
            ops.length = 0;

            
            var proto = new Proxy({ "1": 2, "3": 4 }, handlers);
            var a = [,,3,,,];
            Object.setPrototypeOf(a, proto);
            Array.prototype.copyWithin.call(a, 0, 1);
            assert.areEqual("has:1,get:1,has:3,get:3,has:4", ops.toString());
            ops.length = 0;
        }
    },
    {
        name: "Array.concat() should always box the first item",
        body: function () {
            assert.isTrue(typeof Array.prototype.concat.call(101)[0] === "object");
        }
    },
    {
        name: "Boolean primitive should never be considered concat spreadable",
        body: function () {
            try
            {
                Boolean.prototype[Symbol.isConcatSpreadable] = true;
                Boolean.prototype[0] = 1;
                Boolean.prototype[1] = 2;
                Boolean.prototype[2] = 3;
                Boolean.prototype.length = 3;
                assert.isTrue([].concat(true).length === 1); 
            }
            finally
            {
                delete Boolean.prototype[Symbol.isConcatSpreadable];
                delete Boolean.prototype[0];
                delete Boolean.prototype[1];
                delete Boolean.prototype[2];
                delete Boolean.prototype.length;
            }
        }
    },
    {
        name: "String primitive should never be considered concat spreadable",
        body: function () {
            try
            {
                String.prototype[Symbol.isConcatSpreadable] = true;
                String.prototype[0] = 1;
                String.prototype[1] = 2;
                String.prototype[2] = 3;
                String.prototype.length = 3;
                assert.isTrue([].concat("Hello").length === 1); 
            }
            finally
            {
                delete String.prototype[Symbol.isConcatSpreadable];
                delete String.prototype[0];
                delete String.prototype[1];
                delete String.prototype[2];
                delete String.prototype.length;
            }
        }
    },
    {
        name: "Array.prototype.filter calls has trap when proxy in the prototype",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];
        
            var p = new Proxy(arr1, proxyHandler);
            arr2.__proto__ = p;
            arr2.length = 10;
        
            var ret = [].filter.call(arr2, function(item){
                return item > 200;
            });

            assert.areEqual(0, ret.length);
            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
        }
    },
    {
        name: "Array.prototype.filter calls has trap when proxy as a prototype added during the call",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];

            arr2.length = 10;
        
            var first = true;
            var ret = [].filter.call(arr2, function(item){
                if (first) {
                    first = false;
                    var p = new Proxy(arr1, proxyHandler);
                    arr2.__proto__ = p;
                }
                return item > 200;
            });
        
            assert.areEqual(0, ret.length);
            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
        }
    },
    {
        name: "Array.prototype.every calls has trap when proxy in the prototype",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];
        
            var p = new Proxy(arr1, proxyHandler);
            arr2.__proto__ = p;
            arr2.length = 10;
        
            [].every.call(arr2, function(item){
                return true;
            });

            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
        }
    },
    {
        name: "Array.prototype.every calls has trap when proxy as a prototype added during the call",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];

            arr2.length = 10;
        
            var first = true;
            [].every.call(arr2, function(item){
                if (first) {
                    first = false;
                    var p = new Proxy(arr1, proxyHandler);
                    arr2.__proto__ = p;
                }
                return true;
            });
        
            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
        }
    },
    {
        name: "Array.prototype.some calls has trap when proxy in the prototype",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];
        
            var p = new Proxy(arr1, proxyHandler);
            arr2.__proto__ = p;
            arr2.length = 10;
        
            [].some.call(arr2, function(item){
                return false;
            });

            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
        }
    },
    {
        name: "Array.prototype.some calls has trap when proxy as a prototype added during the call",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];

            arr2.length = 10;
        
            var first = true;
            [].some.call(arr2, function(item){
                if (first) {
                    first = false;
                    var p = new Proxy(arr1, proxyHandler);
                    arr2.__proto__ = p;
                }
                return false;
            });
        
            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
        }
    },
    {
        name: "Array.prototype.reduce calls has trap when proxy in the prototype",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];
        
            var p = new Proxy(arr1, proxyHandler);
            arr2.__proto__ = p;
            arr2.length = 10;
        
            var ret = [].reduce.call(arr2, function(a, c){
                return a + c;
            });

            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
            assert.areEqual(231, ret);
        }
    },
    {
        name: "Array.prototype.reduce calls has trap when proxy as a prototype added during the call",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];

            arr2.length = 10;
        
            var first = true;
            var ret = [].reduce.call(arr2, function(a, c){
                if (first) {
                    first = false;
                    var p = new Proxy(arr1, proxyHandler);
                    arr2.__proto__ = p;
                }
                return a + c;
            });
        
            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
            assert.areEqual(231, ret);
        }
    },
    {
        name: "Array.prototype.reduceRight calls has trap when proxy in the prototype",
        body: function () {
            getCount = 0;
            hasCount = 0;
            
            var arr1 = [11, 22, 33, 44, 55, 66];
            var arr2 = [11, 22, 33, 44, 55, 66];
        
            var p = new Proxy(arr1, proxyHandler);
            arr2.__proto__ = p;
            arr2.length = 10;
        
            var ret = [].reduceRight.call(arr2, function(a, c){
                return a + c;
            });

            assert.areEqual(4, hasCount, "Validate that has trap is called 4 times");
            assert.areEqual(0, getCount, "Validate that get trap is not called");
            assert.areEqual(231, ret);
        }
    },
    {
        name: "Array methods trying to create a data property on non-configurable slot and fail",
        body: function () {
            var returnedArr = {};
            Object.defineProperty(returnedArr, '1', { configurable: false});

            var arr = [11, 21];
            Object.defineProperty(arr.constructor, Symbol.species, { get : function () {  return function() {
                return returnedArr;
            } } } );

            function test(arr, desc) {
                desc = desc + " has species which gives an array with non-config property, validating on ";
                var error = "Cannot redefine property '1'";
                assert.throws(function () { Array.prototype.map.call(arr, function (a) { return a;}); }, TypeError, desc + "map", error);
                assert.throws(function () { Array.prototype.filter.call(arr, function (a) { return true;}); }, TypeError,desc + "filter", error);
                assert.throws(function () { Array.prototype.slice.call(arr, 0); }, TypeError, desc + "slice", error);
                assert.throws(function () { Array.prototype.concat.call(arr, [1, 2]); }, TypeError, desc + "concat", error);
            }
            test(arr, "var array");

            var arr2 = [11];
            Object.defineProperty(arr2, '1', {get : function () { return 33; } });
            Object.defineProperty(arr2.constructor, Symbol.species, { get : function () {  return function() {
                return returnedArr;
            } } } );
            test(arr2, "es5 var array");

            function Arr() {
                Object.defineProperty(this, "0", {
                    configurable: false
                });
            }

            assert.throws(function () { Array.of.call(Arr, "a"); }, TypeError, "of constructs an array with non-config property", "Cannot redefine property '0'");
            assert.throws(function () { Array.from.call(Arr, "a"); }, TypeError, "of constructs an array with non-config property", "Cannot redefine property '0'");
        }
    },

];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
