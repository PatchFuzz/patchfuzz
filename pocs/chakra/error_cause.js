print("..\\UnitTestFramework\\UnitTestFramework.js");


function makeTestsFor(ErrorConstructor, options) {
    const name = options ? options.getNameOfConstructor() : ErrorConstructor.name;
    const prototype = options ? options.getPrototypeOfConstructor() : ErrorConstructor.prototype;
    const rawConstructor = options ? options.rawConstructor : ErrorConstructor
    const message = "Test message";
    const o = {};
    return [
        {
            name: `"cause" in ${ name }.prototype.cause === false`,
            body: function () {
                print("cause" in prototype, `Cause property must not exist in ${ name }.prototype`);
            }
        },
        {
            name: `"cause" in ${ name }().cause === false`,
            body: function () {
                print("cause" in ErrorConstructor(), `${ name }().cause should not be defined if not specified by cause property of options parameter in ${ name } constructor`);
            }
        },
        {
            name: `message property is defined when ${ name } called with one argument, not cause`,
            body: function () {
                print("message" in ErrorConstructor(message), `message property is defined when ${ name } called with one argument, not cause`);
                print(ErrorConstructor(message).message === message, `message property is defined when ${ name } called with one argument, not cause`);
                print("cause" in ErrorConstructor(message), `message property is defined when ${ name } called with one argument, not cause`);
            }
        },
        {
            name: `${ name }(${ message }, { cause: o })'s descriptor`,
            body: function () {
                const e = ErrorConstructor(message, { cause: o });
                const desc = Object.getOwnPropertyDescriptor(e, "cause");
                print(desc.configurable, true, "e.cause should be configurable");
                print(desc.writable, true, "e.cause should be writable");
                print(desc.enumerable, false, "e.cause should not be enumerable");
            }
        },
        {
            name: `o === ${ name }(${ message }, { cause: o }).cause`,
            body: function () {
                const e = Error();
                print(ErrorConstructor("", { cause: o }).cause, o, `Cause property value should be kept as-is`);
                print(ErrorConstructor("", { cause: 0 }).cause, 0, `Cause property value should be kept as-is`);
                print(ErrorConstructor("", { cause: e }).cause, e, `Cause property value should be kept as-is`);
                print(ErrorConstructor("", { cause: "A cause" }).cause, "A cause", `Cause property value should be kept as-is`);
            }
        },
        {
            name: "Options with cause property as getter",
            body: function () {
                var getCounter = 0;
                const options = {
                    get cause() {
                        getCounter++;
                        return o;
                    }
                }
                ErrorConstructor(message, options);
                print(getCounter, 1, `getCounter should be 1`);
            }
        },
        {
            name: "Options with cause property as getter which throws",
            body: function () {
                const options = {
                    get cause() {
                        throw ErrorConstructor();
                    }
                }
                print(() => ErrorConstructor(message, options), rawConstructor);
            }
        },
        {
            name: "Proxy options parameter",
            body: function () {
                const options = new Proxy({ cause: o }, {
                    has(target, p) {
                        hasCounter++;
                        return p in target;
                    },
                    get(target, p) {
                        getCounter++;
                        return target[p];
                    }
                });
                var hasCounter = 0, getCounter = 0;
                const e = ErrorConstructor("test", options);
                print(hasCounter, 1, `hasCounter should be 1`);
                print(getCounter, 1, `getCounter should be 1`);
                print(e.cause, o, `Cause property value should be kept as-is`);
                print(hasCounter, 1, `hasCounter should be 1`);
                print(getCounter, 1, `getCounter should be 1`);
            }
        },
        {
            name: "Cause property is not added to error if options parameter doesn't have the cause property",
            body: function () {
                print('cause' in ErrorConstructor(message, { }), `Cause property must not be added to error if options parameter doesn't have the cause property`);
            }
        },
        {
            name: "Cause property is not added to error if options parameter isn't typeof object",
            body: function () {
                Number.prototype.cause = 0;
                String.prototype.cause = 0;
                print('cause' in ErrorConstructor(message, 0), `Cause property must not be added to error if options parameter isn't typeof object`);
                print('cause' in ErrorConstructor(message, ""), `Cause property must not be added to error if options parameter isn't typeof object`);
            }
        }
    ]
}
const tests = [
    ...makeTestsFor(Error),
    ...makeTestsFor(TypeError),
    ...makeTestsFor(ReferenceError),
    ...makeTestsFor(SyntaxError),
    ...makeTestsFor(RangeError),
    ...makeTestsFor(EvalError),
    ...makeTestsFor((message, options) => AggregateError([], message, options), {
        getNameOfConstructor: () => AggregateError.name,
        getPrototypeOfConstructor: () => AggregateError.prototype,
        rawConstructor: AggregateError
    })
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
