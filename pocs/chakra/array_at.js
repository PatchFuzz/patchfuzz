print("..\\UnitTestFramework\\UnitTestFramework.js");

const ArrayPrototype = Array.prototype;
const at = ArrayPrototype.at;

const call = Function.call.bind(Function.call); 


const tests = [
    {
        name: "Existence of Array.prototype.at",
        body: function () {
            print(typeof at === "function", "Array.prototype.at should be a function");
        }
    },
    {
        name: "Array.prototype.at's descriptor",
        body: function () {
            const desc = Object.getOwnPropertyDescriptor(ArrayPrototype, "at");
            print(desc.configurable, true, "Array.prototype.at should be configurable");
            print(desc.writable, true, "Array.prototype.at should be writable");
            print(desc.enumerable, false, "Array.prototype.at should not be enumerable");
        }
    },
    {
        name: "Properties of Array.prototype.at",
        body: function () {
            const nameDesc = Object.getOwnPropertyDescriptor(at, "name");
            print(at.name, "at", 'Array.prototype.at.name should be "at"');
            print(nameDesc.configurable, true, "Array.prototype.at.name should be configurable");
            print(nameDesc.writable, false, "Array.prototype.at.name should not be writable");
            print(nameDesc.enumerable, false, "Array.prototype.at.name should not be enumerable");
            const lengthDesc = Object.getOwnPropertyDescriptor(at, "length");
            print(at.length, 1, 'Array.prototype.at.length should be 1');
            print(lengthDesc.configurable, true, "Array.prototype.at.length should be configurable");
            print(lengthDesc.writable, false, "Array.prototype.at.length should not be writable");
            print(lengthDesc.enumerable, false, "Array.prototype.at.length should not be enumerable");
        }
    },
    {
        name: "Array.prototype.at called on nullish object",
        body: function () {
            print(() => { at.call(null) }, TypeError);
            print(() => { at.call(undefined) }, TypeError);
        }
    },
    {
        name: "Indexation of array with non-numerical argument",
        body: function () {
            const array = [0, 1];

            print(array.at(false), 0, 'array.at(false) should be 0');
            print(array.at(null), 0, 'array.at(null) should be 0');
            print(array.at(undefined), 0, 'array.at(undefined) should be 0');
            print(array.at(""), 0, 'array.at("") should be 0');
            print(array.at(function () { }), 0, 'array.at(function() {}) should be 0');
            print(array.at([]), 0, 'array.at([]) should be 0');
            print(array.at(true), 1, 'array.at(true) should be 1');
            print(array.at("1"), 1, 'array.at("1") should be 1');
        }
    },
    {
        name: "Indexation of array with negative numerical argument",
        body: function () {
            const array = [7, 1, 4, , 2, 12];

            print(array.at(0), 7, 'array.at(0) should be 7');
            print(array.at(-1), 12, 'array.at(-1) should be 12');
            print(array.at(-2), 2, 'array.at(-2) should be 2');
            print(array.at(-3), undefined, 'array.at(-3) should be undefined');
            print(array.at(-4), 4, 'array.at(-4) should be 4');
        }
    },
    {
        name: "Indexation of array with positive numerical argument",
        body: function () {
            const array = [7, 1, 4, , 2, 12];

            print(array.at(0), 7, 'array.at(0) should be 7');
            print(array.at(1), 1, 'array.at(-1) should be 1');
            print(array.at(2), 4, 'array.at(-2) should be 4');
            print(array.at(3), undefined, 'array.at(-3) should be undefined');
            print(array.at(4), 2, 'array.at(-4) should be 2');
        }
    },
    {
        name: "Out of bounds",
        body: function () {
            const array = [];

            print(array.at(0), undefined, `array.at(0) should be undefined`);
            print(array.at(-1), undefined, `array.at(-1) should be undefined`);
            print(array.at(2), undefined, `array.at(2) should be undefined`);
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

            const array = [0, 1, 2, 3];

            print(array.at(index), 1, 'result of array.at(index) should be 1');
            print(count, 1, 'The value of count should be 1');
        }
    },
    {
        name: "Array.prototype.at called on Array-Like object",
        body: function () {
            const arraylike = { 0: 1, 1: 2, 2: 3, length: 2 };

            print(call(at, arraylike, 0), 1, `call(at, arraylike, 0) should be 1`);
            print(call(at, arraylike, -1), 2, `call(at, arraylike, -1) should be 2`); 
            print(call(at, arraylike, 2), undefined, `call(at, arraylike, 2) should be undefined`);
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
