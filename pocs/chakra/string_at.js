print("..\\UnitTestFramework\\UnitTestFramework.js");

const StringPrototype = String.prototype;
const at = StringPrototype.at;

const call = Function.call.bind(Function.call); 


const tests = [
    {
        name: "Existnce of String.prototype.at",
        body: function () {
            print(typeof at === "function", "String.prototype.at should be a function");
        }
    },
    {
        name: "String.prototype.at's descriptor",
        body: function () {
            const desc = Object.getOwnPropertyDescriptor(StringPrototype, "at");
            print(desc.configurable, true, "String.prototype.at should be configurable");
            print(desc.writable, true, "String.prototype.at should be writable");
            print(desc.enumerable, false, "String.prototype.at should not be enumerable");
        }
    },
    {
        name: "Properties of String.prototype.at",
        body: function () {
            const nameDesc = Object.getOwnPropertyDescriptor(at, "name");
            print(at.name, "at", 'String.prototype.at.name should be "at"');
            print(nameDesc.configurable, true, "String.prototype.at.name should be configurable");
            print(nameDesc.writable, false, "String.prototype.at.name should not be writable");
            print(nameDesc.enumerable, false, "String.prototype.at.name should not be enumerable");
            const lengthDesc = Object.getOwnPropertyDescriptor(at, "length");
            print(at.length, 1, 'String.prototype.at.length should be 1');
            print(lengthDesc.configurable, true, "String.prototype.at.length should be configurable");
            print(lengthDesc.writable, false, "String.prototype.at.length should not be writable");
            print(lengthDesc.enumerable, false, "String.prototype.at.length should not be enumerable");
        }
    },
    {
        name: "String.prototype.at called on invalid object",
        body: function () {
            
            print(() => { call(at, Object.create(null)) }, TypeError);
            print(() => { call(at, null) }, TypeError);
            print(() => { call(at, undefined) }, TypeError);
        }
    },
    {
        name: "Indexation of string with non-numerical argument",
        body: function () {
            const string = "01";

            print(string.at(false), "0", '"01".at(false) should be "0"');
            print(string.at(null), "0", '"01".at(null) should be "0"');
            print(string.at(undefined), "0", '"01".at(undefined) should be "0"');
            print(string.at(""), "0", '"01".at("") should be "0"');
            print(string.at(function () { }), "0", '"01".at(function() {}) should be "0"');
            print(string.at([]), "0", '"01".at([]) should be "0"');
            print(string.at(true), "1", '"01".at(true) should be "1"');
            print(string.at("1"), "1", '"01".at("1") should be "1"');
        }
    },
    {
        name: "Indexation of string with negative numerical argument",
        body: function () {
            const string = "0\u26052";

            print(string.at(0), "0", '"0\u26052".at(0) should be "0"');
            print(string.at(-1), "2", '"0\u26052".at(-1) should be "2"');
            print(string.at(-2), "\u2605", '"0\u26052".at(-2) should be "\u2605"');
        }
    },
    {
        name: "Indexation of string with positive numerical argument",
        body: function () {
            const string = "0\u26052";

            print(string.at(0), "0", '"0\u26052".at(0) should be "0"');
            print(string.at(1), "\u2605", '"0\u26052".at(-1) should be "\u2605"');
            print(string.at(2), "2", '"0\u26052".at(-2) should be "2"');
        }
    },
    {
        name: "Out of bounds",
        body: function () {
            const string = "";

            print(string.at(0), undefined, `"".at(0) should be undefined`);
            print(string.at(-1), undefined, `"".at(-1) should be undefined`);
            print(string.at(2), undefined, `"".at(2) should be undefined`);
        }
    },
    {
        name: "Argument ToInteger()",
        body: function () {
            let count = 0;
            const index = {
                valueOf() {
                    count++;
                    return 1;
                }
            };

            const string = "123";

            print(string.at(index), "2", 'result of string.at(index) should be "2"');
            print(count, 1, 'The value of count should be 1');
        }
    },
    {
        name: "String.prototype.at called on to-stringable object",
        body: function () {
            const object = {
                toString() {
                    return "Test";
                }
            }
            
            print(call(at, object, 0), "T", 'call(at, object, 0) should be "T"');
            print(call(at, object, -1), "t", 'call(at, object, -1) should be "t"');
            print(call(at, object, 1), "e", 'call(at, object, 1) should be "e"');
            print(call(at, object, 2), "s", 'call(at, object, 2) should be "T"');
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
