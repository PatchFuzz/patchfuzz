print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Not okay to set Object.prototype.[[Prototype]] using __proto__",
        body: function () {
            var objectPrototypeObject = Object.getPrototypeOf(Object.prototype)
            var b = Object.create(null)

            print(function () { Object.prototype.__proto__ = b },
                TypeError,
                "It should not be okay to set Object.prototype.[[Prototype]] using __proto__",
                "Can't set the prototype of this object.")

            print(objectPrototypeObject, Object.prototype.__proto__, "Object.prototype.__proto__ is unchanged")
            print(objectPrototypeObject, Object.getPrototypeOf(Object.prototype), "Object.getPrototypeOf(Object.prototype) is unchanged")
        }
    },
    {
        name: "Not okay to set Object.prototype.[[Prototype]] using Object.setPrototypeOf",
        body: function () {
            var objectPrototypeObject = Object.getPrototypeOf(Object.prototype)
            var b = Object.create(null)

            print(function () { Object.setPrototypeOf(Object.prototype, b) },
                TypeError,
                "It should not be okay to set Object.prototype.[[Prototype]] using Object.setPrototypeOf",
                "Can't set the prototype of this object.")

            print(objectPrototypeObject, Object.prototype.__proto__, "Object.prototype.__proto__ is unchanged")
            print(objectPrototypeObject, Object.getPrototypeOf(Object.prototype), "Object.getPrototypeOf(Object.prototype) is unchanged")
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
