print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Subclass of Boolean",
        body: function () {
            class MyBoolean extends Boolean {
                constructor(...val) {
                    super(...val);
                    this.prop = 'mybool';
                }

                method() {
                    return this.prop;
                }
            }

            print('mybool', new MyBoolean(true).method(), "Subclass of Boolean has correct methods and properties");
            print(new MyBoolean(true) == true, "Subclass of Boolean object has correct boolean value");
            print(new MyBoolean(false) == false, "Subclass of Boolean object has correct boolean value");
        }
    },
    {
        name: "Subclass of Error",
        body: function () {
            function verifySubclassError(constructor, constructorName) {
                class MyError extends constructor {
                    constructor(...val) {
                        super(...val);
                        this.prop = 'myerrorsubclass of ' + constructorName;
                    }

                    method() {
                        return this.prop;
                    }
                }

                print('myerrorsubclass of ' + constructorName, new MyError('message').method(), "Subclass of " + constructorName + " has correct methods and properties");
                print(constructorName + ": message", new MyError('message').toString(), "Subclass of " + constructorName + " has correct message value");
            }

            verifySubclassError(Error, 'Error');
            verifySubclassError(EvalError, 'EvalError');
            verifySubclassError(RangeError, 'RangeError');
            verifySubclassError(ReferenceError, 'ReferenceError');
            verifySubclassError(SyntaxError, 'SyntaxError');
            verifySubclassError(TypeError, 'TypeError');
            verifySubclassError(URIError, 'URIError');
        }
    },
    {
        name: "Subclass of Number",
        body: function () {
            class MyNumber extends Number {
                constructor(...val) {
                    super(...val);
                    this.prop = 'mynumber';
                }

                method() {
                    return this.prop;
                }
            }

            print('mynumber', new MyNumber(0).method(), "Subclass of Number has correct methods and properties");
            print(new MyNumber(123) == 123, "Subclass of Number object has correct value");
            print(new MyNumber() == 0, "MyNumber constructor calls super with no argument should behave the same way as Number constructor and return NaN!");
        }
    },
    {
        name: "Subclass of Array",
        body: function () {
            class MyArray extends Array {
                constructor(...val) {
                    super(...val);
                    this.prop = 'myarray';
                }

                method() {
                    return this.prop;
                }
            }

            print('myarray', new MyArray().method(), "Subclass of Array has correct methods and properties");
            print(0, new MyArray().length, "Subclass of Array object has correct length when constructor called with no arguments");
            print(100, new MyArray(100).length, "Subclass of Array object has correct length when constructor called with single numeric argument");
            print(50, new MyArray(50.0).length, "Subclass of Array object has correct length when constructor called with single float argument");
            print(1, new MyArray('something').length, "Subclass of Array object has correct length when constructor called with single non-numeric argument");
            print('something', new MyArray('something')[0], "Subclass of Array object has correct length when constructor called with single non-numeric argument");

            var a = new MyArray(1,2,3);
            print(3, a.length, "Subclass of Array object has correct length when constructor called with multiple arguments");
            print(1, a[0], "Subclass of Array object has correct values when constructor called with multiple arguments");
            print(2, a[1], "Subclass of Array object has correct values when constructor called with multiple arguments");
            print(3, a[2], "Subclass of Array object has correct values when constructor called with multiple arguments");

            print(Array.isArray(a), "Subclass of Array is an array as tested via Array.isArray");
        }
    },
    {
        name: "Subclass of Array - proto chain",
        body: function () {
            class MyArray extends Array
            {
                constructor(...args) { super(...args); }
                getFirstElement() { return this.length > 0 ? this[0] : undefined; }
                getLastElement() { return this.length > 0 ? this[this.length-1] : undefined; }
            }
            class OurArray extends MyArray
            {
                constructor(...args) { super(...args); }
                getLength() { return this.length; }
            }

            function verifyProtoChain(obj, length, newElement, firstElement)
            {
                print(false, obj instanceof Function, "Subclass of Array is not a function object");
                print(true, obj instanceof Array, "Subclass of Array is an Array");
                print(true, obj instanceof MyArray, "Subclass of Array is a 'MyArray' instance");
                print(true, obj instanceof OurArray, "Subclass of Array is a 'OurArray' instance");

                print(OurArray.prototype, obj.__proto__, "obj's [[Prototype]] slot points to OurArray.prototype");
                print(MyArray.prototype, obj.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyArray.prototype");
                print(Array.prototype, obj.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Array.prototype");

                print(length, obj.length, "Subclass of Array is a 'OurArray' instance");
                obj[length] = newElement;
                print(length + 1, obj.length, "Subclass of Array is a 'OurArray' instance");

                print(length + 1, obj.getLength(), "obj.getLength() returns "+ (length + 1));
                print(firstElement, obj.getFirstElement(), "obj.getFirstElement() returns "+ firstElement);
                print(newElement, obj.getLastElement(), "obj.getLastElement() returns "+ newElement);
            }

            print(MyArray, OurArray.__proto__, "OurArray's [[Prototype]] slot points to MyArray");
            print(Array, MyArray.__proto__, "MyArray's [[Prototype]] slot points to Array");

            verifyProtoChain(new OurArray(), 0, 1, 1);
            verifyProtoChain(new OurArray('e'), 1, 'element', 'e');
            verifyProtoChain(new OurArray('xyz',2), 2, function(){}, 'xyz');
            verifyProtoChain(new OurArray(1,2,3), 3, 4, 1);
            verifyProtoChain(new OurArray('a','b','c','d'), 4, 'e', 'a');
            verifyProtoChain(new OurArray(100), 100, 'element', undefined);
        }
    },
    {
        name: "Subclass of built-in constructors - verify proto chain",
        body: function () {
            function testProtoChain (Type, isFunction, ctorArgs)
            {
                class MyType extends Type
                {
                    constructor(...args) { super(...args); this.prop1="method1"; }
                    method1() { return ">"+this.prop1; }
                }
                class OurType extends MyType
                {
                    constructor(...args) { super(...args); this.prop0="method0"; }
                    method0() { return ">"+this.prop0; }
                }

                function verifyProtoChain(obj)
                {
                    print(isFunction, obj instanceof Function, "Subclass of "+ Type.name +" is" + (isFunction ? "" : " not")  + " a function object");
                    print(true, obj instanceof Type, "Subclass of " + Type.name + " is an instance of " + Type.name);
                    print(true, obj instanceof MyType, "Subclass of " + Type.name + " is an instance of 'MyType'");
                    print(true, obj instanceof OurType, "Subclass of " + Type.name + " is an instance of 'OurType'");

                    print(OurType.prototype, obj.__proto__, "obj's [[Prototype]] slot points to OurType.prototype");
                    print(MyType.prototype, obj.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyType.prototype");
                    print(Type.prototype, obj.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Type.prototype");

                    print(">method0", obj.method0(), "obj");
                    print(">method1", obj.method1(), "obj");
                }

                print(MyType, OurType.__proto__, "OurType's [[Prototype]] slot points to MyType");
                print(Type, MyType.__proto__, "MyType's [[Prototype]] slot points to Type");

                verifyProtoChain(eval("new OurType("+ctorArgs+")"));
            }

            function testReflectConstructNewTarget (Type, isFunction, ctorArgs)
            {
                class MyType extends Type {}
                let obj = Reflect.construct(Type, eval("["+ctorArgs+"]"), MyType);

                print(true, obj instanceof MyType, "new.target should be available in built-in subclassable constructor " + Type.name);
            }

            function forEachBuiltinSubclassable(test)
            {
                let GeneratorFunction = (function* g() {}).constructor;
                let TypedArray = Int8Array.__proto__;

                test(Array, false, "");
                test(ArrayBuffer, false, "");
                test(SharedArrayBuffer, false, "");
                test(Boolean, false, "");
                test(DataView, false, "new ArrayBuffer()");
                test(Date, false, "");
                test(Error, false, "");
                test(  EvalError, false, "");
                test(  RangeError, false, "");
                test(  ReferenceError, false, "");
                test(  SyntaxError, false, "");
                test(  TypeError, false, "");
                test(  URIError, false, "");
                test(Function, true, "");
                test(GeneratorFunction, true, "");
                test(Map, false, "");
                test(Number, false, "");
                test(Object, false, "");
                test(Promise, false, "function() {}");
                test(RegExp, false, "");
                test(Set, false, "");
                test(String, false, "");
                print( function() { test(Symbol, false, ""); }, TypeError,
                    "Subclasses of Symbol cannot be instantiated", "Function is not a constructor");
                print( function() { test(TypedArray, false, ""); }, TypeError,
                    "Subclasses of typed array constructor cannot be instantiated", "Typed array constructor argument is invalid");
                test(  Int8Array, false, "");
                test(  Int16Array, false, "");
                test(  Int32Array, false, "");
                test(  Uint8Array, false, "");
                test(  Uint8ClampedArray, false, "");
                test(  Uint16Array, false, "");
                test(  Uint32Array, false, "");
                test(  Float32Array, false, "");
                test(  Float64Array, false, "");
                test(WeakMap, false, "");
                test(WeakSet, false, "");
            }
            forEachBuiltinSubclassable(testProtoChain);
            forEachBuiltinSubclassable(testReflectConstructNewTarget);
       }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
