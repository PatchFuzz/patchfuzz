print("..\\UnitTestFramework\\UnitTestFramework.js");

var global = this;
var bar = 5;

const tests = [
    {
        name: "globalThis is the global",
        body() {
            print(global, globalThis, "globalThis should be the global object");
        }
    },
    {
        name: "globalThis has global properties",
        body() {
            print(Array, globalThis.Array, "globalThis should have all global properties");
            print(JSON, globalThis.JSON, "globalThis should have all global properties");
            print(Object, globalThis.Object, "globalThis should have all global properties");
            print(5, globalThis.bar, "globalThis should have all global properties");
            print(global, globalThis.global, "globalThis should have all global properties");
            print(global, globalThis.globalThis, "globalThis should have itself as a property");
        }
    },
    {
        name: "globalThis has correct attributes",
        body() {
            const descriptor = Object.getOwnPropertyDescriptor(globalThis, "globalThis");
            print(descriptor.enumerable, "globalThis should not be enumerable");
            print(descriptor.configurable, "globalThis should be configurable");
            print(descriptor.writable, "globalThis should be writable");

            print(()=>{globalThis = 5;}, "Overwriting globalThis should not throw");
            print(5, global.globalThis, "Overwriting globalThis should succeed");
            print(()=>{delete global.globalThis;}, "Deleting globalThis should not throw");
            print(undefined, global.globalThis, "Deleting globalThis should succeed");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
