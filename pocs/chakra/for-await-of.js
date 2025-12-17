print("..\\UnitTestFramework\\UnitTestFramework.js");

const promises = [];


function AddPromise(test, Msg, promise, result, shouldFail = false)
{
    const resultPromise = shouldFail ?
    promise.then(
        ()=>{throw new Error(`Test ${test} failed -  ${Msg}`);},
        (x)=>{if (! equal(result, x)) {throw new Error(`Test ${test} failed - ${Msg} - ${JSON.stringify(x)} should equal ${JSON.stringify(result)}`);}}
        ) :
    promise.then(
        (x)=>{if (! equal(result, x)) {throw new Error(`Test ${test} failed - ${Msg} - ${JSON.stringify(x)} should equal ${JSON.stringify(result)}`);}},
        ()=>{throw new Error(`Test ${test} failed -  ${Msg}`);}
    );
    promises.push(resultPromise);
}

function equal(expected, actual) {
    if (typeof expected === 'object')
    {
        return expected.value === actual.value && expected.done === actual.done;
    }
    return expected === actual;
}

const tests = [
    {
        name : "for await of in a non-async function",
        body() {
            print(()=>{eval("function notAsync(){for await (let foo of Bar){}}")}, SyntaxError, "for await of cannot be used in a normal function", "'await' expression not allowed in this context");
            print(()=>{eval("function* notAsyncGen(){for await (let foo of Bar){}}")}, SyntaxError, "for await of cannot be used in a normal generator function", "'await' expression not allowed in this context");
        }
    },
    {
        name : "for await without of",
        body() {
            print(()=>{eval("async function asyncFunc(){for await (let foo in Bar){}}")}, SyntaxError, "for await must have an 'of'");
            print(()=>{eval("async function asyncFunc(){for await (let i = 0; i < bar; ++i){}}")}, SyntaxError, "for await must have an 'of'");
        }
    },
    {
        name : "Valid for await of statements",
        body() {
            print(()=>{eval("async function asyncFunc(){for await (let foo of Bar){}}")},"for await of is valid in an async function");
            print(()=>{eval("async function* asyncGenFunc(){for await (let foo of Bar){}}")}, SyntaxError, "for await of is valid in an async generator function");
        }
    },
    {
        name : "Basic use of for - await - of",
        body() {
            async function testCase() {
                let log = 0;
                for await (let bar of [2,3,4]) {
                    log += bar;
                }
                return log;
            }
            AddPromise(this.name, "Basic for await of loop with sync object", testCase(), 9, false);
            AddPromise(this.name, "Basic for await of loop with sync object called second time", testCase(), 9, false);
        }
    }
];


for(const test of tests) {
    test.body();
}

Promise.all(promises).then(()=>{print("pass")}, x => print (x));
