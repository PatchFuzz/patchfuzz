print("..\\UnitTestFramework\\UnitTestFramework.js");

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
    {
        name: "Helpers should not show up in stack traces",
        body() {
            for (const builtin of [Array.prototype.forEach, Array.prototype.filter, Array.prototype.flatMap]) {
                print(typeof(builtin.name) === "string" && builtin.name.length > 0, `Test requires builtin.name to be set for ${builtin.toString()}`);
                try {
                    builtin.call([1, 2, 3], function callback() { throw new Error("error in callback") });
                    print(false, `Exception swallowed from callback for ${builtin.name}`);
                } catch (e) {
                    const frames = e.stack.split("\n");
                    print(/error in callback/.test(frames[0]), `Invalid first frame "${frames[0]}" for ${builtin.name}`);
                    print(/at callback \(/.test(frames[1]), `Invalid second frame "${frames[1]}" for ${builtin.name}`);
                    print(new RegExp(`at Array.prototype.${builtin.name} \\(native code\\)`, "i").test(frames[2]), `Invalid third frame "${frames[2]}" for ${builtin.name}`);
                    print(/at body \(/.test(frames[3]), `Invalid fourth frame "${frames[3]}" for ${builtin.name}`);
                }
            }
        }
    },
    {
        name: "(Existing) JsBuiltIns shouldn't be constructable",
        body() {
            for (const builtin of [
                Array.prototype.values,
                Array.prototype.entries,
                Array.prototype.keys,
                Array.prototype.indexOf,
                Array.prototype.forEach,
                Array.prototype.filter,
                Array.prototype.flat,
                Array.prototype.flatMap,
                Object.fromEntries,
            ]) {
                print(typeof(builtin.name) === "string" && builtin.name.length > 0, `Test requires builtin.name to be set for ${builtin.toString()}`);
                print(() => new builtin(), TypeError, `${builtin.name} should not be constructable (using new)`, "Function is not a constructor");
                print(() => Reflect.construct(builtin, []), TypeError, `${builtin.name} should not be constructable (using Reflect.construct target)`, "'target' is not a constructor");
                print(() => Reflect.construct(function(){}, [], builtin), TypeError, `${builtin.name} should not be constructable (using Reflect.construct newTarget)`, "'newTarget' is not a constructor");
            }
        }
    },
], { verbose: false });
