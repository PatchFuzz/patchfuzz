print("..\\UnitTestFramework\\UnitTestFramework.js");

function verifyProperties(obj, property, value)
{
    const descriptor = Object.getOwnPropertyDescriptor(obj, property);
    print(value, obj[property], "Object.fromEntries should set correct valued");
    print(descriptor.enumerable, "Object.fromEntries should create enumerable properties");
    print(descriptor.configurable, "Object.fromEntries should create configurable properties");
    print(descriptor.writable, "Object.fromEntries should create writable properties");
    obj[property] = "other value";
    print("other value", obj[property], "should actually be able to write to properties created by Object.fromEntries");
    print(()=>{"use strict"; delete obj[property];}, "deleting properties created by Object.fromEntries should not throw");
    print(obj[property], "deleting properties created by Object.fromEntries should succeed");
}

function verifyObject(expected, actual)
{
    for (let i in actual)
    {
        print(expected.hasOwnProperty(i), "Object.fromEntries shouldn't create unexpected properties");
    }
    for (let i in expected)
    {
        verifyProperties(actual, i, expected[i]);
    }
}


const tests = [
    {
        name : "Object.fromEntries invalid parameters",
        body : function () {
            print(()=>{Object.fromEntries(null);}, TypeError, "Object.fromEntries throws when called with null parameter");
            print(()=>{Object.fromEntries(undefined);}, TypeError, "Object.fromEntries throws when called with undefined parameter");
            print(()=>{Object.fromEntries("something");}, TypeError, "Object.fromEntries throws when called with string literal parameter");
            print(()=>{Object.fromEntries(456);}, TypeError, "Object.fromEntries throws when called with number literal parameter");
            print(()=>{Object.fromEntries(Number());}, TypeError, "Object.fromEntries throws when called with Number Object parameter");
            print(()=>{Object.fromEntries(String());}, "Object.fromEntries does not throw when called with String Object parameter with length 0");
            print(()=>{Object.fromEntries(String("anything"));}, TypeError, "Object.fromEntries throws when called with String Object parameter with length > 0");
            print(()=>{Object.fromEntries({});}, TypeError, "Object.fromEntries throws when called with Object literal");
            print(()=>{Object.fromEntries({a : "5", b : "10"});}, TypeError, "Object.fromEntries throws when called with Object literal");
        }
    },
    {
        name : "Object.fromEntries basic cases",
        body : function () {
            const obj1 = Object.fromEntries([["first", 50], ["second", 30], ["third", 60], ["fourth", 70]]);
            verifyObject({first : 50, second : 30, third : 60, fourth : 70}, obj1);
            const obj2 =  Object.fromEntries([Object("a12234"),Object("b2kls"),Object("c3deg")]);
            verifyObject({a : "1", b : "2", c : "3"}, obj2);
            function testArguments()
            {
                verifyObject(expected, Object.fromEntries(arguments));
            }
            const expected = { abc : "one", bcd : "two", hsa : "three"};
            testArguments(["abc", "one"], ["bcd", "two"], ["hsa", "three"]);
        }
    },
    {
        name : "Object.fromEntries with array-like object",
        body : function ()
        {
            const arrayLike = {0 : ["abc", "one"], 1 : ["bcd", "two"], 2 : ["hsa", "three"], length : 3, current : 0}
            print(()=>{ Object.fromEntries(arrayLike); }, TypeError, "Object.fromEntries throws when parameter has no iterator");
            arrayLike[Symbol.iterator] = function () {
                const array = this;
                return  {
                    next : function () {
                        const value = array[String(array.current)];
                        ++array.current;
                        return {
                            value : value,
                            done : array.length < array.current
                        };
                    }
                };
            };
            verifyObject({ abc : "one", bcd : "two", hsa : "three"}, Object.fromEntries(arrayLike));
        }
    },
    {
        name : "Object.fromEntries does not call setters",
        body : function () {
            let calledSet = false;
            Object.defineProperty(Object.prototype, "prop", {
                set : function () { calledSet = true; }
            });
            const obj = Object.fromEntries([["prop", 10]]);
            verifyProperties(obj, "prop", 10);
            print(calledSet, "Object.fromEntries should not call setters");
        }
    },
    {
        name : "Object.fromEntries iterates over generators",
        body : function () {
            function* gen1 ()
            {
                yield ["val1", 10];
                yield ["val2", 50];
                yield ["val3", 60, "other stuff"];
            }
            const obj = Object.fromEntries(gen1());
            verifyObject({val1 : 10, val2 : 50, val3: 60}, obj);
            let unreachable = false;
            function* gen2 ()
            {
                yield ["val1", 10];
                yield "val2";
                unreachable = true;
                yield ["val3", 60, "other stuff"];
            }
            print(()=>{Object.fromEntries(gen2())}, TypeError, "When generator provides invalid case Object.fromEntries should throw");
            print(unreachable, "Object.fromEntries does not continue after invalid case provided");
        }
    },
    {
        name : "Object.fromEntries accesses properties in correct order from generator",
        body : function () {
            const accessedProps = [];
            const handler = {
                get : function (target, prop, receiver) {
                    accessedProps.push(prop + Reflect.get(target, prop));
                    return Reflect.get(target, prop);
                }
            }

            function* gen () {
                yield new Proxy(["a", "b", "c"], handler);
                yield new Proxy(["e", "g", "h", "j"], handler);
            }
            const obj = Object.fromEntries(gen());
            verifyObject({a : "b", e : "g"}, obj);
            const expected = ["0a", "1b", "0e", "1g"];
            const len = accessedProps.length;
            print(4, len, "Object.fromEntries accesses correct number of properties");
            for (let i = 0; i < len; ++i)
            {
                print(expected[i], accessedProps[i], "Object.fromEntries accesses the correct properties");
            }
        }
    },
    {
        name : "Object.fromEntries accesses Proxy properties correctly",
        body : function () {
            const accessedProps = [];
            const handler = {
                get : function (target, prop, receiver) {
                    accessedProps.push(String(prop));
                    return Reflect.get(target, prop);
                },
                set : function () {
                    throw new Error ("Should not be called");
                }
            }
            let result;
            print(()=>{result = Object.fromEntries(new Proxy([["a", 5], ["b", 2], ["c", 4]], handler)); });
            verifyObject({a : 5, b : 2, c : 4}, result);
            expected = ["Symbol(Symbol.iterator)", "length", "0", "length", "1", "length", "2", "length"];
            for (let i = 0; i < 3; ++i)
            {
                print(expected[i], accessedProps[i], "Object.fromEntries accesses the correct properties");
            }
        }
    },
    {
        name : "Object.fromEntries uses overridden array iterator",
        body : function () {
            let calls = 0;
            Array.prototype[Symbol.iterator] = function () {
                return {
                    next : function () {
                        switch (calls)
                        {
                            case 0:
                                calls = 1;
                                return { done : false, value : ["key", "value"]}
                            case 1:
                                calls = 2;
                                return { done : true, value : null }
                            case 2:
                            throw new Error ("Should not be reached");
                        }
                    }
                }
            }
            let result;
            print(()=>{ result = Object.fromEntries([1, 2, 3, 4]);}, "Once iterator is done should not be called again");
            verifyObject({key : "value"}, result);
        }
    },
    {
        name : "Object.fromEntries properties",
        body : function () {
            print("fromEntries", Object.fromEntries.name, "Object.fromEntries.name should be 'fromEntries'");
            print(1, Object.fromEntries.length, "Object.fromEntries.length should be 1");
            const descriptor = Object.getOwnPropertyDescriptor(Object, "fromEntries");
            print(descriptor.enumerable, "Object.fromEntries should be enumerable");
            print(descriptor.writable, "Object.fromEntries should be writable");
            print(descriptor.configurable, "Object.fromEntries should be configurable");
            print(()=>{"use strict"; delete Object.fromEntries.length;}, "Deleting Object.fromEntries.length should succeed");
            print(0, Object.fromEntries.length, "After deletion Object.fromEntries.length should be 0");
            print(()=>{"use strict"; delete Object.fromEntries;}, "Deleting Object.fromEntries should succeed");
            print(Object.fromEntries, "After deletion Object.fromEntries should be undefined");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
