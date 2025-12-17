print("..\\UnitTestFramework\\UnitTestFramework.js");

function verifyThrowsIfRegExpSearchString(functionName) {
    var f = String.prototype[functionName].bind("abc");

    var re = /./;
    print(f.bind(undefined, re), TypeError, "Regular RegExp");

    helpers.withPropertyDeleted(RegExp.prototype, Symbol.match, function () {
        print(f.bind(undefined, re), TypeError, "Regular RegExp without Symbol.match property");
    })

    re = 1;
    print(f.bind(undefined, re), "Not an Object (Number)");

    re = {};
    print(f.bind(undefined, re), "Object without Symbol.match property");

    re = {
        [Symbol.match]: true
    };
    print(f.bind(undefined, re), TypeError, "Object with Boolean Symbol.match property");

    re = {
        [Symbol.match]: 'coerced to true'
    };
    print(f.bind(undefined, re), TypeError, "Object with Symbol.match property coerced to 'true'");

    re = {
        [Symbol.match]: null
    };
    print(f.bind(undefined, re), "Object with Symbol.match property coerced to 'false'");
}

var tests = [
    {
        name: "Array prototype and String prototype should have spec defined built-ins with correct lengths",
        body: function () {
            print(Array.prototype.hasOwnProperty('find'), "Array.prototype should have a find method");
            print(Array.prototype.hasOwnProperty('findIndex'), "Array.prototype should have a findIndex method");

            print(String.prototype.hasOwnProperty('repeat'), "String.prototype should have a repeat method");
            print(String.prototype.hasOwnProperty('startsWith'), "String.prototype should have a startsWith method");
            print(String.prototype.hasOwnProperty('endsWith'), "String.prototype should have a endsWith method");
            print(String.prototype.hasOwnProperty('includes'), "String.prototype should have a includes method");

            print(Array.prototype.find.length === 1, "find method takes two arguments but the second is optional and the spec says the length must be 1");
            print(Array.prototype.findIndex.length === 1, "findIndex method takes two arguments but the second is optional and the spec says the length must be 1");

            print(String.prototype.repeat.length === 1, "repeat method takes zero arguments");
            print(String.prototype.startsWith.length === 1, "startsWith method takes two arguments but the second is optional and the spec says the length must be 1");
            print(String.prototype.endsWith.length === 1, "endsWith method takes two arguments but the second is optional and the spec says the length must be 1");
            print(String.prototype.includes.length === 1, "includes method takes two arguments but the second is optional and the spec says the length must be 1");
        }
    },
    {
        name: "find takes a predicate and applies it to each element in the array in ascending order until the predicate returns true, then find returns that element",
        body: function () {
            print(function () { Array.prototype.find.call(); }, TypeError, "find throws TypeError if it is given no arguments", "Array.prototype.find: 'this' is null or undefined");
            print(function () { Array.prototype.find.call(undefined); }, TypeError, "find throws TypeError if its this argument is undefined", "Array.prototype.find: 'this' is null or undefined");
            print(function () { Array.prototype.find.call(undefined, function () { return true; }, {}); }, TypeError, "find throws TypeError if its this argument is undefined even if given further arguments", "Array.prototype.find: 'this' is null or undefined");
            print(function () { Array.prototype.find.call(null); }, TypeError, "find throws TypeError if its this argument is null", "Array.prototype.find: 'this' is null or undefined");
            print(function () { Array.prototype.find.call(null, function () { return true; }, {}); }, TypeError, "find throws TypeError if its this argument is null even if given further arguments", "Array.prototype.find: 'this' is null or undefined");

            var arr = [ 1, 2, 3 ];

            
            print(function () { arr.find(); }, TypeError, "find throws TypeError if it is given no predicate argument", "Array.prototype.find: argument is not a Function object");
            print(function () { arr.find({}); }, TypeError, "find throws TypeError if it is given a non-Function object predicate argument", "Array.prototype.find: argument is not a Function object");

            var fakeArrWithLengthGetter = {
                __proto__: Array.prototype,
                get length () { throw new Error('getter called'); }
            };

            print(function () { fakeArrWithLengthGetter.find(); }, Error, "find gets length property, calling getter method, before checking for a valid predicate function argument", "getter called");

            
            print(        1, arr.find(function (v, i, a) { return true; }), "Simple predicate always returns true, should find first item");
            print(        1, arr.find(function (v, i, a) { if (i >= 1) { print("shouldn't visit index > 0"); } return v === 1; }), "Simple predicate matching first element, should find first element");
            print(        2, arr.find(function (v, i, a) { if (i >= 2) { print("shouldn't visit index > 1"); } return v === 2; }), "Simple predicate matching second element, should find second element");
            print(        3, arr.find(function (v, i, a) { if (i >= 3) { print("shouldn't visit index > 2"); } return v === 3; }), "Simple predicate matching third element, should find third element");
            print(undefined, arr.find(function (v, i, a) { if (i >= 3) { print("shouldn't visit index > 2"); } return v === 4; }), "Simple predicate matching non-existent element, should not find any element");
            print(        2, arr.find(function (v, i, a) { if (i >= 2) { print("shouldn't visit index > 1"); } return v === 2 || v === 3; }), "Simple predicate matching two elements, second and third, should find first of them, i.e. the second element");

            
            print(undefined, arr.find(function (v, i, a) { if (i >= 3) { print("shouldn't visit index > 2 (initial array length"); } a.push(v + 3); return false; }), "Elements added after find has started shouldn't be included in the search");
            print([ 1, 2, 3, 4, 5, 6 ], arr, "Three more elements should be added to end of arr");

            
            function f(v, i, a) {
                if (i % 2 === 1) {
                    print(undefined, v, "odd indices should be undefined since they were deleted");
                } else {
                    delete a[i+1];
                }
                return false;
            };
            print(undefined, arr.find(f), "Elements deleted before being visited after find has started shouldn't be included in the search");
            print(        1, arr[0], "Odd elements should be deleted [0]");
            print(undefined, arr[1], "Odd elements should be deleted [1]");
            print(        3, arr[2], "Odd elements should be deleted [2]");
            print(undefined, arr[3], "Odd elements should be deleted [3]");
            print(        5, arr[4], "Odd elements should be deleted [4]");
            print(undefined, arr[5], "Odd elements should be deleted [5]");

            
            print(undefined, arr.find(function (v, i, a) { delete a[i]; return false; }), "Elements deleted after being visited has no effect on the search");
            print(undefined, arr[0], "All elements should be deleted [0]");
            print(undefined, arr[1], "All elements should be deleted [1]");
            print(undefined, arr[2], "All elements should be deleted [2]");
            print(undefined, arr[3], "All elements should be deleted [3]");
            print(undefined, arr[4], "All elements should be deleted [4]");
            print(undefined, arr[5], "All elements should be deleted [5]");

            print(6, arr.length, "arr length is still 6");

            
            var thisArg = { };
            print(undefined, arr.find(function (v, i, a) { if (this !== thisArg) { print("this is not what was passed to second parameter of find()"); } return false; }, thisArg), "Argument passed as the optional second parameter of find should become the this value in the predicate");

            
            
            
            var arr = { '0': 1, '1': 2, '2': 3, length: -1 };
            print(undefined, Array.prototype.find.call(arr, function (v, i, a) {print("shouldn't visit any element when length is less than zero"); return true;}), "find should use ToLength function that clamps length between 0 and pow(2,53)-1");
        }
    },
    {
        name: "findIndex takes a predicate and applies it to each element in the array in ascending order until the predicate returns true, then findIndex returns the index of that element",
        body: function () {
            print(function () { Array.prototype.findIndex.call(); }, TypeError, "findIndex throws TypeError if it is given no arguments", "Array.prototype.findIndex: 'this' is null or undefined");
            print(function () { Array.prototype.findIndex.call(undefined); }, TypeError, "findIndex throws TypeError if its this argument is undefined", "Array.prototype.findIndex: 'this' is null or undefined");
            print(function () { Array.prototype.findIndex.call(undefined, function () { return true; }, {}); }, TypeError, "findIndex throws TypeError if its this argument is undefined even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined");
            print(function () { Array.prototype.findIndex.call(null); }, TypeError, "findIndex throws TypeError if its this argument is null", "Array.prototype.findIndex: 'this' is null or undefined");
            print(function () { Array.prototype.findIndex.call(null, function () { return true; }, {}); }, TypeError, "findIndex throws TypeError if its this argument is null even if given further arguments", "Array.prototype.findIndex: 'this' is null or undefined");

            var arr = [ 1, 2, 3 ];

            
            print(function () { arr.findIndex(); }, TypeError, "findIndex throws TypeError if it is given no predicate argument", "Array.prototype.findIndex: argument is not a Function object");
            print(function () { arr.findIndex({}); }, TypeError, "findIndex throws TypeError if it is given a non-Function object predicate argument", "Array.prototype.findIndex: argument is not a Function object");

            var fakeArrWithLengthGetter = {
                __proto__: Array.prototype,
                get length () { throw new Error('getter called'); }
            };

            print(function () { fakeArrWithLengthGetter.findIndex(); }, Error, "findIndex gets length property, calling getter method, before checking for a valid predicate function argument", "getter called");

            
            print( 0, arr.findIndex(function (v, i, a) { return true; }), "Simple predicate always returns true, should find first item");
            print( 0, arr.findIndex(function (v, i, a) { if (i >= 1) { print("shouldn't visit index > 0"); } return v === 1; }), "Simple predicate matching first element, should find first element");
            print( 1, arr.findIndex(function (v, i, a) { if (i >= 2) { print("shouldn't visit index > 1"); } return v === 2; }), "Simple predicate matching second element, should find second element");
            print( 2, arr.findIndex(function (v, i, a) { if (i >= 3) { print("shouldn't visit index > 2"); } return v === 3; }), "Simple predicate matching third element, should find third element");
            print(-1, arr.findIndex(function (v, i, a) { if (i >= 3) { print("shouldn't visit index > 2"); } return v === 4; }), "Simple predicate matching non-existent element, should not find any element");
            print( 1, arr.findIndex(function (v, i, a) { if (i >= 2) { print("shouldn't visit index > 1"); } return v === 2 || v === 3; }), "Simple predicate matching two elements, second and third, should find first of them, i.e. the second element");

            
            print(-1, arr.findIndex(function (v, i, a) { if (i >= 3) { print("shouldn't visit index > 2 (initial array length"); } a.push(v + 3); return false; }), "Elements added after findIndex has started shouldn't be included in the search");
            print([ 1, 2, 3, 4, 5, 6 ], arr, "Three more elements should be added to end of arr");

            
            function f(v, i, a) {
                if (i % 2 === 1) {
                    print(undefined, v, "odd indices should be undefined since they were deleted");
                } else {
                    delete a[i+1];
                }
                return false;
            }
            print(       -1, arr.findIndex(f), "Elements deleted before being visited after findIndex has started shouldn't be included in the search");
            print(        1, arr[0], "Odd elements should be deleted [0]");
            print(undefined, arr[1], "Odd elements should be deleted [1]");
            print(        3, arr[2], "Odd elements should be deleted [2]");
            print(undefined, arr[3], "Odd elements should be deleted [3]");
            print(        5, arr[4], "Odd elements should be deleted [4]");
            print(undefined, arr[5], "Odd elements should be deleted [5]");

            
            print(       -1, arr.findIndex(function (v, i, a) { delete a[i]; return false; }), "Elements deleted after being visited has no effect on the search");
            print(undefined, arr[0], "All elements should be deleted [0]");
            print(undefined, arr[1], "All elements should be deleted [1]");
            print(undefined, arr[2], "All elements should be deleted [2]");
            print(undefined, arr[3], "All elements should be deleted [3]");
            print(undefined, arr[4], "All elements should be deleted [4]");
            print(undefined, arr[5], "All elements should be deleted [5]");

            print(6, arr.length, "arr length is still 6");

            
            var thisArg = { };
            print(-1, arr.findIndex(function (v, i, a) { if (this !== thisArg) { print("this is not what was passed to second parameter of findIndex()"); } return false; }, thisArg), "Argument passed as the optional second parameter of findIndex should become the this value in the predicate");

            
            
            
            var arr = { '0': 1, '1': 2, '2': 3, length: -3 };
            print(-1, Array.prototype.findIndex.call(arr, function (v, i, a) {print("shouldn't visit any element when length is less than zero"); return true;}), "findIndex should use ToLength function that clamps length between 0 and pow(2,53)-1");
        }
    },
    {
        name: "find and findIndex do not skip 'holes' in arrays and array-likes",
        body: function () {
            var arr = [,,,,,];
            var count = 0;

            arr.find(function () { count++; return false; });
            print(arr.length, count, "find calls its callback for every element up to the array's length even if those elements are undefined");

            count = 0;

            arr.findIndex(function () { count++; return false; });
            print(arr.length, count, "findIndex calls its callback for every element up to the array's length even if those elements are undefined");

            arr = { length: 5, 0: undefined, 1: undefined, 3: undefined };

            count = 0;

            Array.prototype.find.call(arr, function () { count++; return false; });
            print(arr.length, count, "find calls its callback for every element up to the array-like's length even if those elements do not exist on the array-like");

            count = 0;

            Array.prototype.findIndex.call(arr, function () { count++; return false; });
            print(arr.length, count, "findIndex calls its callback for every element up to the array-like's length even if those elements do not exist on the array-like");
        }
    },
    {
        name: "repeat takes a string and number and returns a string that is the given string repeated the given number of times",
        body: function () {
            print(function () { String.prototype.repeat.call(); }, TypeError, "repeat throws TypeError if it is given no arguments", "String.prototype.repeat: 'this' is null or undefined");
            print(function () { String.prototype.repeat.call(undefined); }, TypeError, "repeat throws TypeError if its this argument is undefined", "String.prototype.repeat: 'this' is null or undefined");
            print(function () { String.prototype.repeat.call(undefined, "", 0); }, TypeError, "repeat throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.repeat: 'this' is null or undefined");
            print(function () { String.prototype.repeat.call(null); }, TypeError, "repeat throws TypeError if its this argument is null", "String.prototype.repeat: 'this' is null or undefined");
            print(function () { String.prototype.repeat.call(null, "", 0); }, TypeError, "repeat throws TypeError if its this argument is null even if given further arguments", "String.prototype.repeat: 'this' is null or undefined");

            var s;

            s = "";

            print("", s.repeat(0), "empty string repeated zero times is the empty string");
            print("", s.repeat(NaN), "empty string: NaN converts to zero so produces the empty string");
            print("", s.repeat(1), "empty string repeated once is the empty string");
            print("", s.repeat(2), "empty string repeated twice is the empty string");
            print("", s.repeat(50), "empty string repeated fifty times is the empty string");

            s = "a";

            print("", s.repeat(0), "single character string repeated zero times is the empty string");
            print("", s.repeat(NaN), "single character string: NaN converts to zero so produces the empty string");
            print("a", s.repeat(1), "single character string repeated once is itself");
            print("aa", s.repeat(2), "single character string repeated twice is a two character string");
            print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", s.repeat(50), "single character string repeated fifty times is a 50 character string");

            s = "abc";

            print("", s.repeat(0), "multi-character string repeated zero times is the empty string");
            print("", s.repeat(NaN), "multi-character string: NaN converts to zero so produces the empty string");
            print("abc", s.repeat(1), "multi-character string repeated once is itself");
            print("abcabc", s.repeat(2), "3 character string repeated twice is a six character string");
            print("abcabcabcabcabcabcabcabcabcabc", s.repeat(10), "3 character string repeated ten times is a 30 character string");

            print(function () { s.repeat(-1); }, RangeError, "negative repeat counts are out of range", "String.prototype.repeat: argument out of range");
            print(function () { s.repeat(-Infinity); }, RangeError, "negative infinite repeat count is out of range", "String.prototype.repeat: argument out of range");
            print(function () { s.repeat(Infinity); }, RangeError, "infinite repeat count is out of range", "String.prototype.repeat: argument out of range");
            print(function () { s.repeat(2 ** 30); }, RangeError, "lengths too large for a string throw");

            print("\0\0\0\0", "\0".repeat(4), "null character embedded in string is repeated");
            print("a\0ba\0ba\0b", "a\0b".repeat(3), "null character embedded in string mixed with normal characters is repeated");
            print("\0abc\0\0abc\0\0abc\0", "\0abc\0".repeat(3), "null character embedded in string surrounding normal characters is repeated");
        }
    },
    {
        name: "startsWith returns true if the given search string matches the substring of the given string starting at the given position",
        body: function () {
            print(function () { String.prototype.startsWith.call(); }, TypeError, "startsWith throws TypeError if it is given no arguments", "String.prototype.startsWith: 'this' is null or undefined");
            print(function () { String.prototype.startsWith.call(undefined); }, TypeError, "startsWith throws TypeError if its this argument is undefined", "String.prototype.startsWith: 'this' is null or undefined");
            print(function () { String.prototype.startsWith.call(undefined, "", 0); }, TypeError, "startsWith throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.startsWith: 'this' is null or undefined");
            print(function () { String.prototype.startsWith.call(null); }, TypeError, "startsWith throws TypeError if its this argument is null", "String.prototype.startsWith: 'this' is null or undefined");
            print(function () { String.prototype.startsWith.call(null, "", 0); }, TypeError, "startsWith throws TypeError if its this argument is null even if given further arguments", "String.prototype.startsWith: 'this' is null or undefined");

            var s;

            s = "";

            print(s.startsWith(""), "the empty string starts with the empty string");
            print(s.startsWith("anything"), "the empty string does not start with any non-empty string");
            print(s.startsWith("", 1), "the search position is clipped to exist within the string and thus the the empty string starts with the empty string for any given position argument");
            print(s.startsWith("", Infinity), "the empty string starts with the empty string even if given starting position is Infinity, since the starting position is clipped");

            s = "abcdefghijklmnopqrstuvwxyz";

            print(s.startsWith(""), "a non-empty string starts with the empty string");
            print(s.startsWith("a"), "single character prefix substring matches the beginning of the string");
            print(s.startsWith("abc"), "prefix substring matches the beginning of the string");
            print(s.startsWith("abcdefghijklm"), "long prefix substring string matches the beginning of the string");
            print(s.startsWith("abcdefghijklmnopqrstuvwxyz"), "identical string matches the beginning of the string");

            print(s.startsWith("bcd"), "non-prefix substring does not match beginning of the string");
            print(s.startsWith("mnopqrstuv"), "long non-prefix substring does not match beginning of the string");
            print(s.startsWith("xyz"), "suffix substring does not match beginning of the string");
            print(s.startsWith("abczzz"), "non-substring with partial prefix match does not match beginning of the string");

            print(s.startsWith("", 3), "a non-empty string starts with the empty string at any position");
            print(s.startsWith("", 26), "a non-empty string starts with the empty string at its end");
            print(s.startsWith("", Infinity), "a non-empty string starts with the empty string at its end (Infinity clipped to end position)");
            print(s.startsWith("abcd", -Infinity), "a non-empty string starts with a prefix substring at its beginning (-Infinity clipped to start position)");
            print(s.startsWith("bcd", 1), "a non-empty string starts with a given substring at the position where that substring begins");
            print(s.startsWith("mnopqrstuv", 12), "a non-empty string starts with a given (long) substring at the position where that substring begins");
            print(s.startsWith("xyz", 23), "a non-empty string starts with a suffix substring at the position where the suffix begins");
            print(s.startsWith("z", 25), "a non-empty string starts with a single character suffix substring at the last position in the string");
            print(s.startsWith("z", 26), "a non-empty string does not start with a single suffix substring at the position past the string");

            s = "abc\0def";

            print(s.startsWith("abc\0def"), "string with embedded null character starts with itself");
            print(s.startsWith("abc\0d"), "string with embedded null character starts with prefix including null character");
            print(s.startsWith("abc\0"), "string with embedded null character starts with prefix including and ending with null character in search string");
            print(s.startsWith("abc\0abc"), "string with embedded null character does not start with string that is only different after null character");
            print(s.startsWith("def\0abc"), "string with embedded null character does not start with string that is only different before null character");
            print(s.startsWith("\0def", 3), "string with embedded null character starts with substring beginning with null character at corresponding starting position");

            var n = 12345;

            print(String.prototype.startsWith.call(n, "123"), "startsWith works even when its this argument is not a string object");
            print(String.prototype.startsWith.call(n, "45"), "startsWith works even when its this argument is not a string object");
        }
    },
    {
        name: "startsWith throws if searchString is a RegExp",
        body: verifyThrowsIfRegExpSearchString.bind(undefined, "startsWith")
    },
    {
        name: "endsWith returns true if the given search string matches the substring of the given string ending at the given position",
        body: function () {
            print(function () { String.prototype.endsWith.call(); }, TypeError, "endsWith throws TypeError if it is given no arguments", "String.prototype.endsWith: 'this' is null or undefined");
            print(function () { String.prototype.endsWith.call(undefined); }, TypeError, "endsWith throws TypeError if its this argument is undefined", "String.prototype.endsWith: 'this' is null or undefined");
            print(function () { String.prototype.endsWith.call(undefined, "", 0); }, TypeError, "endsWith throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.endsWith: 'this' is null or undefined");
            print(function () { String.prototype.endsWith.call(null); }, TypeError, "endsWith throws TypeError if its this argument is null", "String.prototype.endsWith: 'this' is null or undefined");
            print(function () { String.prototype.endsWith.call(null, "", 0); }, TypeError, "endsWith throws TypeError if its this argument is null even if given further arguments", "String.prototype.endsWith: 'this' is null or undefined");

            var s;

            s = "";

            print(s.endsWith(""), "the empty string ends with the empty string");
            print(s.endsWith("anything"), "the empty string does not end with any non-empty string");
            print(s.endsWith("", -1), "the search position is clipped to exist within the string and thus the the empty string ends with the empty string for any given position argument");
            print(s.endsWith("", Infinity), "the empty string ends with the empty string even if given ending position is Infinity, since the ending position is clipped");

            s = "abcdefghijklmnopqrstuvwxyz";

            print(s.endsWith(""), "a non-empty string ends with the empty string");
            print(s.endsWith("z"), "single character suffix substring matches the beginning of the string");
            print(s.endsWith("xyz"), "suffix substring matches the beginning of the string");
            print(s.endsWith("nopqrstuvwxyz"), "long suffix substring string matches the beginning of the string");
            print(s.endsWith("abcdefghijklmnopqrstuvwxyz"), "identical string matches the beginning of the string");

            print(s.endsWith("wxy"), "non-suffix substring does not match beginning of the string");
            print(s.endsWith("mnopqrstuv"), "long non-suffix substring does not match beginning of the string");
            print(s.endsWith("abc"), "prefix substring does not match beginning of the string");
            print(s.endsWith("aaaxyz"), "non-substring with partial suffix match does not match beginning of the string");

            print(s.endsWith("", 23), "a non-empty string ends with the empty string at any position");
            print(s.endsWith("", 0), "a non-empty string ends with the empty string at its beginning");
            print(s.endsWith("wxyz", Infinity), "a non-empty string ends with a suffix substring at its end (Infinity clipped to end position)");
            print(s.endsWith("", -Infinity), "a non-empty string ends with the empty string at its beginning (-Infinity clipped to start position)");
            print(s.endsWith("wxy", 25), "a non-empty string ends with a given substring at the position where that substring ends");
            print(s.endsWith("mnopqrstuv", 22), "a non-empty string ends with a given (long) substring at the position where that substring ends");
            print(s.endsWith("abc", 3), "a non-empty string ends with a prefix substring at the position where the prefix ends");
            print(s.endsWith("a", 1), "a non-empty string ends with a single character prefix substring at the first position in the string");
            print(s.endsWith("a", 0), "a non-empty string does not end with a single prefix substring at the position past the beginning of the string");

            s = "abc\0def";

            print(s.endsWith("abc\0def"), "string with embedded null character ends with itself");
            print(s.endsWith("c\0def"), "string with embedded null character ends with prefix including null character");
            print(s.endsWith("\0def"), "string with embedded null character ends with prefix including and starting with null character in search string");
            print(s.endsWith("abc\0abc"), "string with embedded null character does not end with string that is only different after null character");
            print(s.endsWith("def\0abc"), "string with embedded null character does not end with string that is only different before null character");
            print(s.endsWith("abc\0", 4), "string with embedded null character ends with substring ending with null character at corresponding ending position");

            var n = 12345;

            print(String.prototype.endsWith.call(n, "345"), "endsWith works even when its this argument is not a string object");
            print(String.prototype.endsWith.call(n, "12"), "endsWith works even when its this argument is not a string object");
        }
    },
    {
        name: "endsWith throws if searchString is a RegExp",
        body: verifyThrowsIfRegExpSearchString.bind(undefined, "endsWith")
    },
    {
        name: "includes returns true if the given search string matches any substring of the given string",
        body: function () {
            print(function () { String.prototype.includes.call(); }, TypeError, "includes throws TypeError if it is given no arguments", "String.prototype.includes: 'this' is null or undefined");
            print(function () { String.prototype.includes.call(undefined); }, TypeError, "includes throws TypeError if its this argument is undefined", "String.prototype.includes: 'this' is null or undefined");
            print(function () { String.prototype.includes.call(undefined, "", 0); }, TypeError, "includes throws TypeError if its this argument is undefined even if given further arguments", "String.prototype.includes: 'this' is null or undefined");
            print(function () { String.prototype.includes.call(null); }, TypeError, "includes throws TypeError if its this argument is null", "String.prototype.includes: 'this' is null or undefined");
            print(function () { String.prototype.includes.call(null, "", 0); }, TypeError, "includes throws TypeError if its this argument is null even if given further arguments", "String.prototype.includes: 'this' is null or undefined");

            var s;

            s = "";

            print(s.includes(""), "the empty string includes the empty string");
            print(s.includes("anything"), "the empty string includes no non-empty strings");
            print(s.includes("", 1), "the search position is clipped to exist within the string and thus the empty string includes itself for any given position argument");
            print(s.includes("", Infinity), "the empty string includes the empty string even if given ending position is Infinity, since the ending position is clipped");

            s = "abcdefghijklmnopqrstuvwxyz";

            print(s.includes(""), "a non-empty string includes the empty string");
            print(s.includes("abc"), "substring found at the beginning of the string");
            print(s.includes("xyz"), "substring found at the end of the string");
            print(s.includes("z"), "substring found at the very end of the string");
            print(s.includes("ijklmno"), "substring found in the middle of the string");

            print(s.includes("abczzz"), "substring partially matches at the beginning of the string but is not a match");
            print(s.includes("xyzaaa"), "substring partially matches at the ending of the string but is not a match");
            print(s.includes("zaaa"), "substring partially matches at the very ending of the string but is not a match");
            print(s.includes("ijklxyz"), "substring partially matches in the middle of the string but is not a match");

            print(s.includes("", 26), "a non-empty string includes the empty string even at the end");
            print(s.includes("", Infinity), "a non-empty string includes the empty string even at the end (Infinity clipped to end position)");
            print(s.includes("abc", -Infinity), "a non-empty string includes a substring starting at the beginning (-Infinity clipped to start position)");
            print(s.includes("z", 26), "a non-empty string includes no non-empty string at the end");
            print(s.includes("z", 25), "starting at the last character, a string includes its last character");
            print(s.includes("y", 25), "starting at the last character, a string does not contain previous characters");
            print(s.includes("abc", 1), "a string does not contain a substring if the only occurrence begins before the given start position");
            print(s.includes("mnop", 5), "substring found in the middle of a string after the given start position");
            print(s.includes("efg", 4), "substring found in the middle of a string at the given start position");

            s = "abc\0def";

            print(s.includes("abc\0def"), "string with embedded null character includes itself");
            print(s.includes("abc\0d"), "string with embedded null character includes prefix including null character");
            print(s.includes("abc\0"), "string with embedded null character includes prefix including and ending with null character in search string");
            print(s.includes("\0def"), "string with embedded null character includes prefix including and starting with null character in search string");
            print(s.includes("abc\0abc"), "string with embedded null character does not contain string that is only different after null character");
            print(s.includes("def\0abc"), "string with embedded null character does not contain string that is only different before null character");
            print(s.includes("\0def", 3), "string with embedded null character includes with substring beginning with null character at corresponding starting position");

            var n = 12345;

            print(String.prototype.includes.call(n, "34"), "includes works even when its this argument is not a string object");
            print(String.prototype.includes.call(n, "7"), "includes works even when its this argument is not a string object");
        }
    },
    {
        name: "includes throws if searchString is a RegExp",
        body: verifyThrowsIfRegExpSearchString.bind(undefined, "includes")
    },
    {
        name: "String.fromCodePoint has correct shape",
        body: function() {
            print(1, String.fromCodePoint.length, "String.fromCodePoint.length === 1");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}

