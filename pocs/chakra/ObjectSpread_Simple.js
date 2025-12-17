if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

function verifyPropertyDesc(obj, prop, desc, propName) {
    var actualDesc = Object.getOwnPropertyDescriptor(obj, prop);
    if (typeof propName === "undefined") { propName = prop; }
    print(desc.configurable, actualDesc.configurable, propName+"'s attribute: configurable");
    print(desc.enumerable, actualDesc.enumerable, propName+"'s attribute: enumerable");
    print(desc.writable, actualDesc.writable, propName+"'s attribute: writable");
}

var a = {i: 1, j: 2};
var b = {x: 3, y: 4, z: 5};
var c = {foo: 6};

var tests = [
    {
        name: "Test shallow cloning",
        body: function() {
            let aClone = {...a};
            print(1, aClone.i);
            print(2, aClone.j);
            print(2, Object.keys(aClone).length);
        }
    },
    {
        name: "Test Spread Object in parens",
        body: function() {
            let aClone = {...(a)};
            print(1, aClone.i);
            print(2, aClone.j);
            print(2, Object.keys(aClone).length);
        }
    },
    {
        name: "Test merging 2 objects",
        body: function() {
            let merged = {...a, ...b};
            print(1, merged.i);
            print(2, merged.j);
            print(3, merged.x);
            print(4, merged.y);
            print(5, merged.z);
            print(5, Object.keys(merged).length);
        }
    },
    {
        name: "Test merging default properties with another object",
        body: function() {
            let merged = {i: 1, ...c};
            print(1, merged.i);
            print(6, merged.foo);
            print(2, Object.keys(merged).length);
            print(1, Object.keys(c).length);

            
            merged = {...c, i: 1};
            print(1, merged.i);
            print(6, merged.foo);
            print(2, Object.keys(merged).length);
            print(1, Object.keys(c).length);
        }
    },
    {
        name: "Test overrides",
        body: function() {
            let over = {i: 10, j: 11, ...a};
            print(1, over.i);
            print(2, over.j);
            print(2, Object.keys(over).length);

            over = {...a, i: 10, j: 11};
            print(10, over.i);
            print(11, over.j);
            print(2, Object.keys(over).length);

            over = {...a, ...{i: 10, j: 11}};
            print(10, over.i);
            print(11, over.j);
            print(2, Object.keys(over).length);

            let i = 10, j = 11;
            over = {...a, i, j};
            print(10, over.i);
            print(11, over.j);
            print(2, Object.keys(over).length);
        }
    },
    {
        name: "Getters in Object Literal should not be evaluated",
        body: function() {
            let getterExecuted = false;
            let objWithGetter = {get i() {getterExecuted = true;}, ...c};
            print(6, objWithGetter.foo);
            print(getterExecuted);
            print(2, Object.keys(objWithGetter).length);
            print(objWithGetter.hasOwnProperty("i"));
        }
    },
    {
        name: "Getters in Spread Object should be evaluated",
        body: function() {
            let getterExecuted = false;
            let obj = {i: 1, ...{get j() {getterExecuted = true; return 2;}}};
            print(1, obj.i);
            print(getterExecuted);
            print(2, obj.j);
            print(2, Object.keys(obj).length);
        }
    },
    {
        name: "Test Spread Object modifying itself",
        body: function() {
            let val = 1;
            let source = {get i() {val++; return 1;}, get j() {return val;}};
            let obj = {...source};
            print(1, obj.i);
            print(2, obj.j);
            print(2, Object.keys(obj).length);
        }
    },
    {
        name: "Test Spread Object modified by other Spread Object",
        body: function() {
            let a = {i: 1};
            let b = {get j() {a.i = 3; return 2;}};
            let obj = {...b, ...a};
            print(3, obj.i);
            print(2, obj.j);
            print(2, Object.keys(obj).length);
        }
    },
    {
        name: "Test multiple merges of same object",
        body: function() {
            let getterExecutions = 0;
            let objWithGetter = {get i() {getterExecutions++; return 1;}};
            let merged = {a: 2, ...objWithGetter, b: 3, ...objWithGetter};
            print(2, merged.a);
            print(3, merged.b);
            print(1, merged.i);
            print(3, Object.keys(merged).length);
            print(2, getterExecutions, "Getters should be executed twice, once for each `...`");
        }
    },
    {
        name: "Setters should not be called in Object Literal",
        body: function() {
            let setterExecuted = false;
            let objWithSetter = {set foo(v) {setterExecuted = true;}, ...c};
            print(6, objWithSetter.foo);
            print(1, Object.keys(objWithSetter).length);
            print(setterExecuted);
        }
    },
    {
        name: "Null and Undefined should be ignored",
        body: function() {
            let empty = {...null};
            print(0, Object.keys(empty).length);

            empty = {...undefined};
            print(0, Object.keys(empty).length);
        }
    },
    {
        name: "Test nesting",
        body: function() {
            let base = {name: "foo", prev: {}, num: 5};
            let derived = {...base, name: "bar", prev: {...base}};
            print("foo", base.name);
            print({}, base.prev);
            print(5, base.num);
            print(3, Object.keys(base).length);
            print("bar", derived.name);
            print("foo", derived.prev.name);
            print({}, derived.prev.prev);
            print(5, derived.prev.num);
            print(5, derived.num);
            print(3, Object.keys(derived).length);
        }
    },
    {
        name: "Test Spread with computed property names in Object Literal",
        body: function() {
            let obj = {[5]: 5, ["bar"]: 2, ...c};
            print(5, obj[5]);
            print(2, obj.bar);
            print(6, obj.foo);
            print(3, Object.keys(obj).length);
        }
    },
    {
        name: "Test Spread with functions in Object Literal",
        body: function() {
            let obj = {func() {return true;}, ...c};
            print(6, obj.foo);
            print(obj.hasOwnProperty("func"));
            print(2, Object.keys(obj).length);
        }
    },
    {
        name: "Property Descriptors from Spread should be default",
        body: function() {
            let obj = {...c};
            let defaultDesc = {
                configurable: true,
                enumerable: true,
                writable: true
            };
            verifyPropertyDesc(obj, "foo", defaultDesc);
        }
    },
    {
        name: "Copy only own properties",
        body: function() {
            let parent = {i: 1, j: 2};
            let child = Object.create(parent);
            child.i = 3;
            let obj = {...child};

            print(3, child.i);
            print(2, child.j);
            print(3, obj.i);
            print(obj.hasOwnProperty("j"));
        }
    },
    {
        name: "Spread includes symbols in properties",
        body: function() {
            let sym = Symbol("foo");
            let a = {};
            a[sym] = 1;
            let obj = {...a};
            print(1, obj[sym], "property with Symbol property name identifier should be copied over");
            print(1, Object.getOwnPropertySymbols(obj).length);
        }
    },
    {
        name: "Spread after assignment",
        body: function() {
            let temp = {};
            let obj = {...temp=a};
            print(2, Object.keys(obj).length);
            print(1, obj.i);
            print(2, obj.j);

            obj = {...temp=1};
            print(0, Object.keys(obj).length);
        }
    },
    {
        name: "Object Spread interacting with Array Spread",
        body: function() {
            let arr = [1, 2];
            let obj = {...[...arr, 3]};
            print(3, Object.keys(obj).length);
            print(1, obj[0]);
            print(2, obj[1]);
            print(3, obj[2]);
        }
    },
    {
        name: "Object Spread interacting with Numbers",
        body: function() {
            let obj = {...1}
            print(0, Object.keys(obj).length);
        }
    },
    {
        name: "Object Spread interacting with Functions",
        body: function() {
            let obj = {...function i() {return 1;}}
            print(0, Object.keys(obj).length);
        }
    },
    {
        name: "Object Spread interacting with Strings",
        body: function() {
            let obj = {..."edge"};
            print(4, Object.keys(obj).length);
            print("e", obj[0]);
            print("d", obj[1]);
            print("g", obj[2]);
            print("e", obj[3]);
        }
    },
    {
        name: "Test Proxy Object",
        body: function() {
            let proxy = new Proxy({i: 1, j: 2}, {});
            let obj = {...proxy};
            print(2, Object.keys(obj).length);
            print(1, obj.i);
            print(2, obj.j);
        }
    },
    {
        name: "Test Proxy Object with custom getter",
        body: function() {
            let handler = {get: function(obj, prop) {return obj[prop];}};
            let proxy = new Proxy({i: 1, j: 2}, handler);
            let obj = {...proxy};
            print(2, Object.keys(obj).length);
            print(1, obj.i);
            print(2, obj.j);
        }
    },
    {
        name: "Test Proxy Object with custom getter and setter",
        body: function() {
            let setterCalled = false;
            let handler = {
                get: function(obj, prop) {
                    return obj[prop];
                },
                set: function(obj, prop, value) {
                    setterCalled = true;
                }
            };
            let proxy = new Proxy({i: 1, j: 2}, handler);
            let obj = {...proxy};
            print(2, Object.keys(obj).length);
            print(1, obj.i);
            print(2, obj.j);
            print(setterCalled);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
