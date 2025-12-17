print("..\\UnitTestFramework\\UnitTestFramework.js");

function lengthDefaultState(func, paramCount, identifier)
{
    "use strict";
    const descriptor = Object.getOwnPropertyDescriptor(func, "length");

    print(descriptor.configurable, identifier + " length is configurable");
    print(descriptor.writable, identifier + " length is not writeable");
    print(descriptor.enumerable, identifier + " length is not enumerable");
    print(func.hasOwnProperty("length"), identifier + " should have length property");
    print(func.length, paramCount, identifier + " length property should default to number of parameters");
    print(()=>{func.length = 5;}, TypeError, "Writing to " + identifier + " length should throw type error");
}

function deleteLength(func, identifier)
{
    "use strict";
    print(()=>{delete func.length}, "Deleting " + identifier + ".length should not throw");
    print(!func.hasOwnProperty("length"), "Deleting " + identifier + ".length should succeed");
    print(0, func.length, identifier + ".length once deleted should return 0 i.e. prototype value");
    print(()=>{func.length = 5}, TypeError, "Attempting to write to " + identifier + " deleted length should throw in strict mode");
    print(!func.hasOwnProperty("length"), "recreating deleted " + identifier + ".length fails");
    print(0, func.length, identifier + ".length once deleted should return 0 i.e. prototype value");
    reDefineLengthStrict(func, identifier);
}

function reDefineLengthStrict(func, identifier)
{
    "use strict";
    const initialValue = func.length;
    print(()=>{func.length = initialValue - 1}, TypeError, "Writing to " + identifier + ".length throws in strict mode");
    print(initialValue, func.length, "Failed attempt to write to " + identifier + ".length does not change it's value");
    Object.defineProperty(func, "length", {enumerable : true, writable : true, value : initialValue + 1});
    const descriptor = Object.getOwnPropertyDescriptor(func, "length");

    print(descriptor.writable, identifier + " after redefinition length can be writeable");
    print(descriptor.enumerable, identifier + " after redefinition length can be enumerable");
    print(initialValue + 1, func.length, identifier + ".length after redefinition takes new value");
    func.length = initialValue - 1;
    print(initialValue - 1, func.length, identifier + ".length after redefinition can be writeable");
}

function reDefineLength(func, identifier)
{
    const initialValue = func.length;
    print(()=>{func.length = initialValue - 1}, "Writing to " + identifier + ".length does not throw when not in strict mode");
    print(initialValue, func.length, "Failed attempt to write to " + identifier + ".length does not change it's value");
    Object.defineProperty(func, "length", {enumerable : true, writable : true, value : initialValue + 1});
    const descriptor = Object.getOwnPropertyDescriptor(func, "length");

    print(descriptor.writable, identifier + " after redefinition length can be writeable");
    print(descriptor.enumerable, identifier + " after redefinition length can be enumerable");
    print(initialValue + 1, func.length, identifier + ".length after redefinition takes new value");
    func.length = initialValue - 1;
    print(initialValue - 1, func.length, identifier + ".length after redefinition can be writeable");
}


const tests = [
    {
        name : "function.length default state",
        body : function()
        {
            function normalFunction (a, b) { }
            const anonymousFunction = function (a, b, c) { }
            const lambda = (a, b, c, d) => { }
            const anonGen = function* (a, b) {}
            function* genFunc () {}
            async function asyncFunc (a) {}
            const anonAsync = async function () { }

            lengthDefaultState(normalFunction, 2, "function");
            lengthDefaultState(anonymousFunction, 3, "Anonymous function");
            lengthDefaultState(lambda, 4, "Lambda function");
            lengthDefaultState(anonGen, 2, "Anonymous generator");
            lengthDefaultState(genFunc, 0, "Generator function");
            lengthDefaultState(anonAsync, 0, "Anonymous async function");
            lengthDefaultState(asyncFunc, 1, "Async function");
            deleteLength(normalFunction, "function");
            deleteLength(anonymousFunction, "Anonymous function");
            deleteLength(lambda, "Lambda function");
            deleteLength(anonGen, "Anonymous generator");
            deleteLength(genFunc, "Generator function");
            deleteLength(anonAsync, "Anonymous async function");
            deleteLength(asyncFunc, "Async function");
        }
    },
    {
        name : "Redefining function.length with defineProperty",
        body : function()
        {
            function normalFunction (a, b) { }
            const anonymousFunction = function (a, b, c) { }
            const lambda = (a, b, c, d) => { }
            const anonGen = function* (a, b) {}
            function* genFunc () {}
            async function asyncFunc (a) {}
            const anonAsync = async function () { }
            reDefineLength(normalFunction, "function");
            reDefineLength(anonymousFunction, "Anonymous function");
            reDefineLength(lambda, "Lambda function");
            reDefineLength(anonGen, "Lambda function");
            reDefineLength(genFunc, "Lambda function");
            reDefineLength(asyncFunc, "Lambda function");
            reDefineLength(anonAsync, "Lambda function");
        }
    },
    {
        name : "bound function.length default state",
        body : function()
        {
            function normalFunction (a, b) { }
            const anonymousFunction = function (a, b, c) { }
            const lambda = (a, b, c, d) => { }
            function* genFunc (a, b, c, d, e) {}
            async function asyncFunc (a, b) {}
            const boundNormal = normalFunction.bind({}, 1);
            const boundAnon = anonymousFunction.bind({}, 1, 1, 1, 1);
            const boundLambda = lambda.bind({}, 1, 1);
            const boundGen = genFunc.bind({}, 1, 1, 1, 1);
            const boundAsync = asyncFunc.bind({}, 1);

            lengthDefaultState(boundNormal, 1, "Bound Function");
            lengthDefaultState(boundAnon, 0, "Anonymous Bound Function");
            lengthDefaultState(boundLambda, 2, "Bound Lambda Function");
            lengthDefaultState(boundGen, 1, "Bound Generator Function");
            lengthDefaultState(boundAsync, 1, "Bound Async Function");
            deleteLength(boundNormal, "Bound Function");
            deleteLength(boundAnon, "Anonymous Bound Function");
            deleteLength(boundLambda, "Bound Lambda Function");
            deleteLength(boundGen, 1, "Bound Generator Function");
            deleteLength(boundAsync, 1, "Bound Async Function");
        }
    },
    {
        name : "Redefining boundFunction.length with defineProperty",
        body : function()
        {
            function normalFunction (a, b) { }
            const anonymousFunction = function (a, b, c) { }
            const lambda = (a, b, c, d) => { }
            const boundNormal = normalFunction.bind({}, 1);
            const boundAnon = anonymousFunction.bind({}, 1, 1, 1, 1);
            const boundLambda = lambda.bind({}, 1, 1);
            reDefineLength(boundNormal, "Bound Function");
            reDefineLength(boundAnon, "Anonymous Bound Function");
            reDefineLength(boundLambda, "Bound Lambda Function");
        }
    },
    {
        name : "Lengths of different bound functions",
        body : function()
        {
            const targ = function(a, b) {};
            let testBound = targ.bind({});
            print(testBound.length, 2, "Bound function uses target function's length when created");
            Object.defineProperty(targ, "length", {value : 5, writable : true});
            testBound = targ.bind({});
            print(testBound.length, 5, "Bound function uses target function's length when created if different to arg count");
            testBound = targ.bind({}, 1, 2);
            print(testBound.length, 3, "Bound function deducts bound parameters from length when created");
            targ.length = 1;
            print(testBound.length, 3, "Bound function length does not change if target function length is changed");
            testBound = targ.bind({}, 1, 2);
            print(testBound.length, 0, "Bound function length will default to 0 if it would be negative");
            delete targ.length;
            testBound = targ.bind({});
            print(testBound.length, 0, "Bound function length will default to 0 if target function has no length property");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
