print("..\\UnitTestFramework\\UnitTestFramework.js");

function checkSpeciesAccessorDescriptor(name, o, p)
{
    var desc = Object.getOwnPropertyDescriptor(o, p);

    var msg = "Property " + p.toString();

    print(!!desc, msg + "not found; there is no descriptor");

    print(false, desc.enumerable, msg + " enumerable");
    print(true, desc.configurable, msg + " configurable");
    print("function", typeof desc.get, name + "[@@species] is an accessor property that has getter");
    print("get [Symbol.species]", desc.get.name,
        name + "[@@species] is an accessor property whose getter function has the 'name' property 'get [Symbol.species]'");
    print(undefined, desc.set, msg + " set");
}

function getTypedArrayConstructor(o)
{
    return o.prototype.__proto__.constructor;
}

function verifyHasNotSpecies(o)
{
    print(o.hasOwnProperty(Symbol.species), o + " should not have [@@species] defined");
    print(undefined, o[Symbol.species], o + " should have [@@species] that returns 'this'");
}

var tests = [
    {
        name: "Built-in global objects that do not have [@@species] property",
        body: function () {
            verifyHasNotSpecies(Boolean);
            verifyHasNotSpecies(Date);
            verifyHasNotSpecies(Function);
            verifyHasNotSpecies(Math);
            verifyHasNotSpecies(Number);
            verifyHasNotSpecies(Object);
            verifyHasNotSpecies(Proxy);
            verifyHasNotSpecies(Reflect);
            verifyHasNotSpecies(String);
            verifyHasNotSpecies(Symbol);
            verifyHasNotSpecies(WeakMap);
            verifyHasNotSpecies(WeakSet);
        }
    },
    {
        name: "Array should have [@@species] property",
        body: function () {
            print(Array.hasOwnProperty(Symbol.species), "Array should have [@@species] defined");
            print(Array, Array[Symbol.species], "Array should have [@@species] that returns 'this'");
            checkSpeciesAccessorDescriptor("Array", Array, Symbol.species);
        }
    },
    {
        name: "Subclasses inherit [@@species] property from their super classes",
        body: function () {
            class MyArray extends Array {}
            print(MyArray.hasOwnProperty(Symbol.species), "Array subclass should not have [@@species] defined implicitly");
            print(MyArray, MyArray[Symbol.species], "Array subclass should have [@@species] that returns 'this'");

            class MyClass {}
            class MySubClass extends MyClass {}
            print(undefined, MyClass[Symbol.species], "MyClass[@@species] should be undefined");
            print(undefined, MySubClass[Symbol.species], "MySubClass[@@species] should be undefined");
        }
    },
    {
        name: "ArrayBuffer should have [@@species] property",
        body: function () {
            print(ArrayBuffer.hasOwnProperty(Symbol.species), "ArrayBuffer should have [@@species] defined");
            print(ArrayBuffer, ArrayBuffer[Symbol.species], "ArrayBuffer should have [@@species] that returns 'this'");
            checkSpeciesAccessorDescriptor("ArrayBuffer", ArrayBuffer, Symbol.species);
        }
    },
    {
        name: "Map should have [@@species] property",
        body: function () {
            print(Map.hasOwnProperty(Symbol.species), "Map should have [@@species] defined");
            print(Map, Map[Symbol.species], "Map should have [@@species] that returns 'this'");
            checkSpeciesAccessorDescriptor("Map", Map, Symbol.species);
        }
    },
    {
        name: "Promise should have [@@species] property",
        body: function () {
            print(Promise.hasOwnProperty(Symbol.species), "Promise should have [@@species] defined");
            print(Promise, Promise[Symbol.species], "Promise should have [@@species] that returns 'this'");
            checkSpeciesAccessorDescriptor("Promise", Promise, Symbol.species);
        }
    },
    {
        name: "RegExp should have [@@species] property",
        body: function () {
            print(RegExp.hasOwnProperty(Symbol.species), "RegExp should have [@@species] defined");
            print(RegExp, RegExp[Symbol.species], "RegExp should have [@@species] that returns 'this'");
            checkSpeciesAccessorDescriptor("RegExp", RegExp, Symbol.species);
        }
    },
    {
        name: "Set should have [@@species] property",
        body: function () {
            print(Set.hasOwnProperty(Symbol.species), "Set should have [@@species] defined");
            print(Set, Set[Symbol.species], "Set should have [@@species] that returns 'this'");
            checkSpeciesAccessorDescriptor("Set", Set, Symbol.species);
        }
    },
    {
        name: "Int8Array should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Int8Array);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Int8Array.hasOwnProperty(Symbol.species), "Int8Array should not have [@@species] defined");
            print(Int8Array, Int8Array[Symbol.species], "Int8Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint8Array should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Uint8Array);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Uint8Array.hasOwnProperty(Symbol.species), "Uint8Array should not have [@@species] defined");
            print(Uint8Array, Uint8Array[Symbol.species], "Uint8Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint8ClampedArray should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Uint8ClampedArray);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Uint8ClampedArray.hasOwnProperty(Symbol.species), "Uint8ClampedArray should not have [@@species] defined");
            print(Uint8ClampedArray, Uint8ClampedArray[Symbol.species], "Uint8ClampedArray should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Int16Array should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Int16Array);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Int16Array.hasOwnProperty(Symbol.species), "Int16Array should not have [@@species] defined");
            print(Int16Array, Int16Array[Symbol.species], "Int16Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint16Array should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Uint16Array);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Uint16Array.hasOwnProperty(Symbol.species), "Uint16Array should not have [@@species] defined");
            print(Uint16Array, Uint16Array[Symbol.species], "Uint16Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Int32Array should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Int32Array);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Int32Array.hasOwnProperty(Symbol.species), "Int32Array should not have [@@species] defined");
            print(Int32Array, Int32Array[Symbol.species], "Int32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Uint32Array should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Uint32Array);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Uint32Array.hasOwnProperty(Symbol.species), "Uint32Array should not have [@@species] defined");
            print(Uint32Array, Uint32Array[Symbol.species], "Uint32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Float32Array should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Float32Array);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Float32Array.hasOwnProperty(Symbol.species), "Float32Array should not have [@@species] defined");
            print(Float32Array, Float32Array[Symbol.species], "Float32Array should have [@@species] that returns 'this'");
        }
    },
    {
        name: "Float64Array should inherit [@@species] property from %TypedArray%",
        body: function () {
            let TypedArray = getTypedArrayConstructor(Float64Array);
            print(TypedArray.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);

            print(Float64Array.hasOwnProperty(Symbol.species), "Float64Array should not have [@@species] defined");
            print(Float64Array, Float64Array[Symbol.species], "Float64Array should have [@@species] that returns 'this'");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
