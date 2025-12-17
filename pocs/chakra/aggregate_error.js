print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
   {
       name: "AggregateError Prototype and Constructor Shape",
       body: function ()
       {
            print(AggregateError, AggregateError.prototype.constructor);
            print(AggregateError.prototype.hasOwnProperty("errors"));
            print("", AggregateError.prototype.message);
            print("AggregateError", AggregateError.prototype.name);
            print("object", typeof AggregateError.prototype);
            print(Error.prototype, Object.getPrototypeOf(AggregateError.prototype));
            print("AggregateError", AggregateError.name);
            print(2, AggregateError.length);
            print("function", typeof AggregateError);
            var proto = Object.getPrototypeOf(AggregateError);
            print(Error, proto);
            var obj = new AggregateError([]);
            print(AggregateError.prototype, Object.getPrototypeOf(obj));
        }
    },
    {
        name: "Failures in the iterable errors argument to list",
        body: function ()
        {
            class TestError extends Error {}

            
            var case1 = {
                get [Symbol.iterator]() { throw new TestError(); }
            };
            print(() => { new AggregateError(case1); }, TestError);

            
            var case2 = {
                get [Symbol.iterator]() { return {}; }
            };
            print(() => { new AggregateError(case2); }, TypeError);

            
            var case3 = {
                [Symbol.iterator]() { throw new TestError(); }
            };
            print(() => { new AggregateError(case3); }, TestError);

            
            var case4 = {
                [Symbol.iterator]() { return "a string"; }
            };
            print(() => { new AggregateError(case4); }, TypeError);

            
            var case5 = {
                [Symbol.iterator]() { return undefined; }
            };
            print(() => { new AggregateError(case5); }, TypeError);

            
            var case6 = {
                [Symbol.iterator]() {
                    return {
                        get next() {
                            throw new TestError();
                        }
                    }
                }
            };
            print(() => { new AggregateError(case6); }, TestError);

            
            var case7 = {
                [Symbol.iterator]() {
                    return {
                        get next() { return {}; }
                    }
                }
            };
            print(() => { new AggregateError(case7); }, TypeError);

            
            var case8 = {
                [Symbol.iterator]() {
                    return {
                        next() { throw new TestError(); }
                    }
                }
            };
            print(() => { new AggregateError(case8); }, TestError);

            
            var case9 = {
                [Symbol.iterator]() {
                    return {
                        next() {
                            return undefined;
                        }
                    }
                }
            };
            print(() => { new AggregateError(case9); }, TypeError);

            
            var case10 = {
                [Symbol.iterator]() {
                    return {
                        next() { return "a string"; }
                    }
                }
            };
            print(() => { new AggregateError(case10); }, TypeError);

            
            var case11 = {
                [Symbol.iterator]() {
                    return {
                        next() {
                            return {
                                get done() { throw new TestError(); }
                            };
                        }
                    }
                }
            };
            print(() => { new AggregateError(case11); }, TestError);
        }
    },
    {
        name: "Failures in the iterable errors argument to list with non-objects",
        body: function ()
        {
            const values = [
                undefined,
                null,
                42,
                false,
                true
            ];
            for (const value of values) {
                print(() => new AggregateError(value), TypeError);
            }

            var o = new AggregateError("string");
            print(o.errors, "string".split(""));
        }
    },
    {
        name: "Iterable errors argument to list",
        body: function ()
        {
            var count = 0;
            var values = [];
            var obj = {
                [Symbol.iterator]() {
                    return {
                        next() {
                            count += 1;
                            return {
                                done: count === 3,
                                get value() {
                                    values.push(count)
                                }
                            };
                        }
                    };
                }
            };
            new AggregateError(obj);
            print(3, count)
            print([1, 2], values)
        }
    },
    {
        name: "message method prop",
        body: function ()
        {
            var obj = new AggregateError([], "42");
            print("42", obj.message);
        }
    },
    {
        name: "message tostring abrupt symbol",
        body: function ()
        {
            class TestError extends Error {}

            var case1 = Symbol();
            print(() => {
                new AggregateError([], case1);
            }, TypeError)

            var case2 = {
                [Symbol.toPrimitive]() {
                    return Symbol();
                },
                toString() {
                    throw new TestError();
                },
                valueOf() {
                    throw new TestError();
                }
            };

            print(() => {
                new AggregateError([], case2);
            }, TypeError)
        }
    },
    {
        name: "message tostring abrupt",
        body: function ()
        {
            class TestError extends Error { }

            var case1 = {
                [Symbol.toPrimitive]() {
                    throw new TestError();
                },
                toString() {
                    throw "toString called";
                },
                valueOf() {
                    throw "valueOf called";
                }
            };

            print(() => {
                new AggregateError([], case1);
            }, TestError);
            var case2 = {
                [Symbol.toPrimitive]: undefined,
                toString() {
                    throw new TestError();
                },
                valueOf() {
                    throw "valueOf called";
                }
            };
            print(() => {
                new AggregateError([], case2);
            }, TestError);

            var case3 = {
                [Symbol.toPrimitive]: undefined,
                toString: undefined,
                valueOf() {
                    throw new TestError();
                }
            };
            print(() => {
                new AggregateError([], case3);
            }, TestError);
        }
    },
    {
        name: "message undefined no prop",
        body: function ()
        {
            var case1 = new AggregateError([], undefined);
            print(false, Object.prototype.hasOwnProperty.call(case1, "message"))

            var case2 = new AggregateError([]);
            print(false, Object.prototype.hasOwnProperty.call(case2, "message"))
        }
    },
    {
        name: "newtarget is undefined",
        body: function ()
        {
            var obj = AggregateError([], "");

            print(AggregateError.prototype, Object.getPrototypeOf(obj));
            print(obj instanceof AggregateError);
        }
    },
    {
        name: "newtarget proto custom",
        body: function ()
        {
            var custom = { x: 42 };
            var newt = new Proxy(function () { }, {
                get(t, p) {
                    if (p === "prototype") {
                        return custom;
                    }

                    return t[p];
                }
            });

            var obj = Reflect.construct(AggregateError, [[]], newt);
            print(custom, Object.getPrototypeOf(obj));
            print(42, obj.x);
        }
    },
    {
        name: "newtarget proto fallback",
        body: function ()
        {
            const values = [
                undefined,
                null,
                42,
                false,
                true,
                Symbol(),
                "string",
                AggregateError.prototype,
            ];

            const NewTarget = new Function();

            for (const value of values) {
                const NewTargetProxy = new Proxy(NewTarget, {
                    get(t, p) {
                        if (p === "prototype") {
                            return value;
                        }
                        return t[p];
                    }
                });

                const error = Reflect.construct(AggregateError, [[]], NewTargetProxy);
                print(AggregateError.prototype, Object.getPrototypeOf(error));
            }
        }
    },
    {
        name: "order of args evaluation",
        body: function () {
            let sequence = [];
            const message = {
                toString() {
                    sequence.push(1);
                    return "";
                }
            };
            const errors = {
                [Symbol.iterator]() {
                    sequence.push(2);
                    return {
                        next() {
                            sequence.push(3);
                            return {
                                done: true
                            };
                        }
                    };
                }
            };

            new AggregateError(errors, message);
            print(3, sequence.length);
            print([1, 2, 3], sequence);
        }
    }
];
for (var i = 0; i < tests.length; i ++) {tests[i].body()}
