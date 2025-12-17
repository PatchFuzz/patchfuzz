if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

function verifyObjectDescriptors(descriptors, allTruePropName, allFalsePropName) {
    var allProperties = Object.getOwnPropertyNames(descriptors).concat(Object.getOwnPropertySymbols(descriptors));

    print([allTruePropName, allFalsePropName], allProperties, "Result should have one descriptor for each own property");

    print(descriptors.hasOwnProperty(allTruePropName), "Result should contain all own properties");
    print(descriptors.hasOwnProperty(allFalsePropName), "Result should contain all own properties");
    print(descriptors[allTruePropName].value, "fooAllTrue", "Result value attribute should match the value set by defineProperties");
    print(descriptors[allFalsePropName].value, "fooAllFalse", "Result value attribute should match the value set by defineProperties");

    var expectedProps = ['configurable', 'writable', 'enumerable'];
    for (var i in expectedProps) {
        print(descriptors[allTruePropName][expectedProps[i]], "Result value attribute should match the value set by defineProperties");
        print(descriptors[allFalsePropName][expectedProps[i]], "Result value attribute should match the value set by defineProperties");
    }
}

var tests = [
    {
        name: "Object has getOwnPropertyDescriptors method",
            body: function() {
                print(Object.hasOwnProperty("getOwnPropertyDescriptors"), 'Object should have getOwnPropertyDescriptors method');

                print(Object.hasOwnProperty({}, "getOwnPropertyDescriptors"), 'New objects should have a property getOwnPropertyDescriptors');
                print(Object.getOwnPropertyDescriptor({}, "getOwnPropertyDescriptors"), 'Object.getOwnPropertyDescriptor({}, "getOwnPropertyDescriptors") should be undefined');

                for (var p in {}) {
                    print(p != "getOwnPropertyDescriptors", "getOwnPropertyDescriptors should not be enumerable on new objects");
                }

                print(1, Object.getOwnPropertyDescriptors.length, "Object.getOwnPropertyDescriptors requires exactly one parameter.");
            }
    },
    {
        name: "Correctly handles bad parameters.",
        body: function() {
            print(function() {
                Object.getOwnPropertyDescriptors();
            }, TypeError, "Missing first parameter should cause a TypeError.", "Object expected");

            print(function() {
                Object.getOwnPropertyDescriptors(null);
            }, TypeError, "Null first parameter should cause a TypeError", "Object expected");
        }
    },
    {
        name: "The resulting get and set are identical with the original get and set.",
        body: function() {
            
            var a = {
                get a() {},
                set a(value) {}
            };
            var b = Object.getOwnPropertyDescriptors(a);

            print(b.a.get === Object.getOwnPropertyDescriptor(a, 'a').get);
            print(b.a.set === Object.getOwnPropertyDescriptor(a, 'a').set);
        }
    },
    {
        name: "For properties with string names, the list of property descriptors includes all own properties with correct descriptors",
        body: function() {
            var foo = {}

            Object.defineProperties(foo, {
                "fooAllTrue": {
                    configurable: true,
                    enumerable: true,
                    value: "fooAllTrue",
                    writable: true
                },
                "fooAllFalse": {
                    configurable: false,
                    enumerable: false,
                    value: "fooAllFalse",
                    writable: false
                }
            });

            var desc = Object.getOwnPropertyDescriptors(foo);
            print(desc instanceof Object, "Result must be an object");

            verifyObjectDescriptors(desc, "fooAllTrue", "fooAllFalse");
        }
    },
    {
        name: "For properties with number names, the list of property descriptors includes all own properties with correct descriptors",
        body: function() {
            var foo = {}

            var allTrueNum = 1234;
            var allFalseNum = 5678;

            Object.defineProperties(foo, {
                [allTrueNum]: {
                    configurable: true,
                    enumerable: true,
                    value: "fooAllTrue",
                    writable: true
                },
                [allFalseNum]: {
                    configurable: false,
                    enumerable: false,
                    value: "fooAllFalse",
                    writable: false
                }
            });

            var desc = Object.getOwnPropertyDescriptors(foo);
            print(desc instanceof Object, "Result must be an object");

            verifyObjectDescriptors(desc, allTrueNum.toString(), allFalseNum.toString());

            
            print(desc[allTrueNum].value, "fooAllTrue", "For properties with number names, resulting properties should be accessible with numeric names.")
            print(desc[allFalseNum].value, "fooAllFalse", "For properties with number names, resulting properties should be accessible with numeric names.")
        }
    },
    {
        name: "For properties with symbol names, the list of property descriptors includes all own properties with correct descriptors",
        body: function() {
            var foo = {}

            var allTrueSymbol = Symbol("allTrue");
            var allFalseSymbol = Symbol("allFalse");

            Object.defineProperties(foo, {
                [allTrueSymbol]: {
                    configurable: true,
                    enumerable: true,
                    value: "fooAllTrue",
                    writable: true
                },
                [allFalseSymbol]: {
                    configurable: false,
                    enumerable: false,
                    value: "fooAllFalse",
                    writable: false
                }
            });

            var desc = Object.getOwnPropertyDescriptors(foo);
            print(desc instanceof Object, "Result must be an object");

            verifyObjectDescriptors(desc, allTrueSymbol, allFalseSymbol);
        }
    },
    {
        name:"For any property, if getOwnPropertyDescriptor(property) is undefined, that property should not be present on the result.",
        body: function() {
            
            var proxyHandler = {
              getOwnPropertyDescriptor: function () {},
            };

            var key = "a";
            var obj = {};
            obj[key] = "value";

            var proxy = new Proxy(obj, proxyHandler);

            var descriptor = Object.getOwnPropertyDescriptor(proxy, key);
            print(undefined, descriptor, "Descriptor matches result of [[GetOwnPropertyDescriptor]] trap");

            var result = Object.getOwnPropertyDescriptors(proxy);
            print(result.hasOwnProperty(key), "key should not be present in result");

        }
    },
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
