print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "String.prototype.padStart/padEnd should exist and constructed properly",
        body: function () {
            print(String.prototype.hasOwnProperty('padStart'), "String.prototype should have a padStart method");
            print(String.prototype.hasOwnProperty('padEnd'), "String.prototype should have a padEnd method");
            print(1, String.prototype.padStart.length, "padStart method takes one argument");
            print(1, String.prototype.padEnd.length, "padEnd method takes one argument");
            print("padStart", String.prototype.padStart.name, "padStart.name is 'padStart'");
            print("padEnd", String.prototype.padEnd.name, "padEnd.name is 'padEnd'");

            var descriptor = Object.getOwnPropertyDescriptor(String.prototype, 'padStart');
            print(descriptor.writable, "writable(padStart) must be true");
            print(descriptor.enumerable, "enumerable(padStart) must be false");
            print(descriptor.configurable, "configurable(padStart) must be true");

            descriptor = Object.getOwnPropertyDescriptor(String.prototype, 'padEnd');
            print(descriptor.writable, "writable(padEnd) must be true");
            print(descriptor.enumerable, "enumerable(padEnd) must be false");
            print(descriptor.configurable, "configurable(padEnd) must be true");
        }
    },
    {
        name: "String.prototype.padStart functionality",
        body: function () {
            print('foo'.padStart(), 'foo', "No arguments to padStart will not affect string");
            print('foo'.padStart(1), 'foo', "No padding added if maxLength (first argument) is less than the length of actual string");
            print('foo'.padStart(-1), 'foo', "No padding added if maxLength (first argument), negative, is less than the length of actual string");
            print('foo'.padStart(3), 'foo', "No padding added if maxLength (first argument) is equal to the length of actual string");
            print('foo'.padStart(4), ' foo', "String with one ' ' (SPACE) as pad is returned");
            print('foo'.padStart(10), '       foo', "String of length 10, with spaces filled as padding, is returned");
            print('foo'.padStart(10, ''), 'foo', "No padding added if the fillString is empty string");
            print('foo'.padStart(10, undefined), '       foo', "'undefined' fillString - string of length 10, with spaces filled as padding, is returned");
            print('foo'.padStart(10, ' '), '       foo', "fillString as one space - string of length 10, with spaces filled as padding, is returned");
            print('foo'.padStart(4, '123'), '1foo', "String of length 4, with only one character from fillString added as a padding, is returned");
            print('foo'.padStart(10, '123'), '1231231foo', "String of length 10, with repeatedly adding characters from fillString to create enough padding, is returned");
        }
    },
    {
        name: "String.prototype.padEnd functionality",
        body: function () {
            print('foo'.padEnd(), 'foo', "No arguments to padEnd will not affect string");
            print('foo'.padEnd(1), 'foo', "No padding added if maxLength (first argument) is less than the length of actual string");
            print('foo'.padEnd(-1), 'foo', "No padding added if maxLength (first argument), negative, is less than the length of actual string");
            print('foo'.padEnd(3), 'foo', "No padding added if maxLength (first argument) is equal to the length of actual string");
            print('foo'.padEnd(4), 'foo ', "String with one ' ' (SPACE) as pad is returned");
            print('foo'.padEnd(10), 'foo       ', "String of length 10, with spaces filled as padding, is returned");
            print('foo'.padEnd(10, ''), 'foo', "No padding added if the fillString is empty string");
            print('foo'.padEnd(10, undefined), 'foo       ', "'undefined' fillString - string of length 10, with spaces filled as padding, is returned");
            print('foo'.padEnd(10, ' '), 'foo       ', "fillString as one space - string of length 10, with spaces filled as padding, is returned");
            print('foo'.padEnd(4, '123'), 'foo1', "String of length 4, with only one character from fillString added as a padding, is returned");
            print('foo'.padEnd(10, '123'), 'foo1231231', "String of length 10, with repeatedly adding characters from fillString to create enough padding, is returned");
        }
    },
    {
        name: "String.prototype.padStart out of bound scenario",
        body: function () {
            print(() => { 'foo'.padStart(2147483647);}, RangeError, "index is out of bound", "String length is out of bound");
            print(() => { 'foo'.padEnd(2147483647);}, RangeError, "index is out of bound", "String length is out of bound");
            print(() => { 'foo'.padStart(2147483647, '');}, "Out of bounds pad length does not throw when padding with empty string");
            print(() => { 'foo'.padEnd(2147483647, '');}, "Out of bounds pad length does not throw when padding with empty string");
            print('foo'.padStart(2147483647, ''), 'foo', "String padded with empty string is returned even if length of padding > max string length");
            print('foo'.padEnd(2147483647, ''), 'foo', "String padded with empty string is returned even if length of padding > max string length");   
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
