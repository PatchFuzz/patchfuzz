if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
    print("util.js");
}

var tests = [
    {
        name: "Reflect define Property for typedarray can not set writable to false",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "0", {
                value: 42,
                configurable: false,
                enumerable: true,
                writable: false,
            });
            print(sample[0], 0, "the value should be 0");
            print(result, false, "expect false");                    
        }
    },
    {
        name: "Reflect define Property for typedarray can not set configuration to true",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "0", {
                value: 42,
                configurable: true,
                enumerable: true,
                writable: false,
            });
            print(sample[0], 0, "the value should be 0");
            print(result, false, "expect false");                    
        }
    },
    {
        name: "Reflect define Property for typedarray can not set enumerable to false",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "0", {
                value: 42,
                configurable: false,
                enumerable: false,
                writable: true,
            });
            print(sample[0], 0, "the value should be 0");
            print(result, false, "expect false");                    
        }
    },
    {
        name: "Reflect define Property for typedarray can not use index >= length",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "2", {
                value: 42,
                configurable: false,
                enumerable: true,
                writable: true,
            });
            print(sample[0], 0, "the value should be 0");
            print(result, false, "expect false");                    
        }
    },
    {
        name: "Reflect define Property for typedarray can not use neg zero index",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "-0", {
                value: 42,
                configurable: false,
                enumerable: true,
                writable: true,
            });
            print(sample[0], 0, "the value should be 0");
            print(result, false, "expect false");                    
        }
    },
    {
        name: "Reflect define Property for typedarray can not use negative index",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "-10", {
                value: 42,
                configurable: false,
                enumerable: true,
                writable: true,
            });
            print(sample[0], 0, "the value should be 0");
            print(result, false, "expect false");                    
        }
    },
    {
        name: "Reflect define Property for typedarray can not use double index",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "1.1", {
                value: 42,
                configurable: false,
                enumerable: true,
                writable: true,
            });
            print(sample[0], 0, "the value should be 0");
            print(result, false, "expect false");                    
        }
    },
    {
        name: "Reflect define Property for typedarray can not use accessor descriptor",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "0", {
                get: function() {}
            }); 
            print(sample[0], 0, "the value should be 0");
            print(result, false, "expect false");                    
        }
    },
    {
        name: "Reflect define Property for typedarray support use symbol index",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, Symbol('foo'), {
                value: 42,
                configurable: false,
                enumerable: true,
                writable: true,
            });
            print(sample[0], 0, "the value should be 0");
            print(result, true, "expect true");                    
        }
    },
    {
        name: "Reflect define Property for typedarray work with valid descriptor and index",
        body: function () {
            const sample = new Float64Array(2)
            var result = Reflect.defineProperty(sample, "0", {
                value: 42,
                configurable: false,
                enumerable: true,
                writable: true,
            }); 
            print(sample[0], 42, "the value should be 42");
            print(result, true, "expect true");                    
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
