print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Object.create with propertyDescriptor containing non-object keys",
        body: function() {
            print(function() { Object.create({}, {a: 0}) },
                TypeError,
                "Should throw TypeError because property 'a' is not an object.",
                "Invalid descriptor for property 'a'")
        }
    },
    {
        name: "Object.defineProperty with number for propertyDescriptor",
        body: function() {
            print(function() { Object.defineProperty({}, "x", 0) },
                TypeError,
                "Should throw TypeError because property 'x' is a number.",
                "Invalid descriptor for property 'x'")
        }
    },
    {
        name: "Object.create with array of non-objects for propertyDescriptor",
        body: function() {
            print(function() { Object.create({}, [0]) },
                TypeError,
                "Should throw TypeError because propertyDescriptor is an array containing non-objects.",
                "Invalid descriptor for property '0'")
        }
    },
    {
        name: "Object.create in sloppy mode with `this` as a propertyDescriptor when it contains non-object properties",
        body: function() {
            print(function() { Object.create({}, this) },
                TypeError,
                "Should throw TypeError because property Symbol.toStringTag is defined on `this` and is a non-object.",
                "Invalid descriptor for property 'Symbol.toStringTag'")
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
