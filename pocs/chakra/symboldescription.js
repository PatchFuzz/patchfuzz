print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Symbol.prototype.description API shape",
        body: function () {
            print(Symbol.prototype.hasOwnProperty('description'), "Symbol.prototype has a 'description' property");
            
            var descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description');
            print(undefined, descriptor.writable, "writable(description) isn't set");
            print(descriptor.enumerable, "enumerable(description) must be false");
            print(descriptor.configurable, "configurable(description) must be true");
            
            print('function', typeof descriptor.get, "Symbol.prototype.description is an accessor with a getter");
            print(0, descriptor.get.length, "Symbol.prototype.description getter has length 0");
            print("get description", descriptor.get.name, "Symbol.prototype.description getter has name 'get description'");
            print(undefined, descriptor.set, "Symbol.prototype.description has no setter");
        }
    },
    {
        name: "Symbol.prototype.description functionality",
        body: function () {
            print('foo', Symbol('foo').description);
            print('', Symbol('').description);
            print('null', Symbol(null).description);
            
            
            
            
            print('', Symbol().description);
            print('', Symbol(undefined).description);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
