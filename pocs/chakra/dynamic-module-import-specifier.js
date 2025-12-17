print("..\\UnitTestFramework\\UnitTestFramework.js");

function testScript(source, message, shouldFail = false, explicitAsync = false) {
    message += " (script)";
    let testfunc = () => testRunner.LoadScript(source, undefined, shouldFail, explicitAsync);

    if (shouldFail) {
        let caught = false;

        print(testfunc, SyntaxErrr, message);
        print(caught, `Expected error not thrown: ${message}`);
    } else {
        print(testfunc, message);
    }
}

function testModuleScript(source, message, shouldFail = false, explicitAsync = false) {
    message += " (module)";
    let testfunc = () => testRunner.LoadModule(source, 'samethread', shouldFail, explicitAsync);

    if (shouldFail) {
        let caught = false;

        
        
        try {
            testfunc();
        } catch(e) {
            caught = true;

            
            print(e.constructor.toString(), SyntaxError.toString(), message);
        }

        print(caught, `Expected error not thrown: ${message}`);
    } else {
        print(testfunc, message);
    }
}

function testDynamicImport(importFunc, thenFunc, catchFunc, _asyncEnter, _asyncExit) {
    var promise = importFunc();
    print(promise instanceof Promise);
    promise.then((v)=>{
        _asyncEnter();
        thenFunc(v);
        _asyncExit();
    }).catch((err)=>{
        _asyncEnter();
        catchFunc(err);
        _asyncExit();
    });
}

var tests = [
    {
        name: "Valid cases for import()",
        body: function () {
                let functionBody =
                    `
                    print(function () { eval("import(undefined)"); }, "undefined");
                    print(function () { eval("import(null)"); }, "null");
                    print(function () { eval("import(true)"); }, "boolean - true");
                    print(function () { eval("import(false)"); }, "boolean - false");
                    print(function () { eval("import(1234567890)"); }, "number");
                    print(function () { eval("import('abc789cde')"); }, "string literal");
                    print(function () { eval("import('number' + 100 + 0.4 * 18)"); }, "expression");
                    print(function () { eval("import(import(true))"); }, "nested import");
                    print(function () { eval("import(import(Infinity) + import(undefined))"); }, "nested import expression");
                    `;

                testScript(functionBody, "Test importing a simple exported function");
                testModuleScript(functionBody, "Test importing a simple exported function");
        }
    },
    {
        name: "Syntax errors for import() call",
        body: function () {
                let functionBody =
                    `
                    print(function () { eval("import()"); }, SyntaxError, "no argument");
                    print(function () { eval("import(1, 2)"); }, SyntaxError, "more than one arguments");
                    print(function () { eval("import('abc.js', 'def.js')"); }, SyntaxError, "more than one argument - case 2");
                    print(function () { eval("import(...['abc.js', 'def.js'])"); }, SyntaxError, "spread argument");
                    `;

                testScript(functionBody, "Test importing a simple exported function");
                testModuleScript(functionBody, "Test importing a simple exported function");
        }
    },
    {
        name: "Module specifier that are not string",
        body: function () {
            var testNonStringSpecifier = function (specifier, expectedType, expectedErrMsg, message) {
                if (typeof message === "undefined" ) {
                    message = specifier;
                }

                let functionBody =
                    `testDynamicImport(
                        ()=>{
                            return import(${specifier});
                        },
                        (v)=>{
                            print('Expected: promise rejected; actual: promise resolved: ' + '${message}');
                        },
                        (err)=>{
                            print(err instanceof Error, '${message}');
                            print(${expectedType}, err.constructor, '${message}');
                            print("${expectedErrMsg}", err.message, '${message}');
                        }, _asyncEnter, _asyncExit
                    )`;

                testScript(functionBody, "Test importing a simple exported function", false, true);
                testModuleScript(functionBody, "Test importing a simple exported function", false, true);
            };

            testNonStringSpecifier("undefined", "URIError", "undefined");
            testNonStringSpecifier("null", "URIError", "null");
            testNonStringSpecifier("true", "URIError", "true");
            testNonStringSpecifier("false", "URIError", "false");
            testNonStringSpecifier("NaN", "URIError", "NaN");
            testNonStringSpecifier("+0", "URIError", "0");
            testNonStringSpecifier("-0", "URIError", "0");
            testNonStringSpecifier("-12345", "URIError", "-12345");
            testNonStringSpecifier("1/0", "URIError", "Infinity");
            testNonStringSpecifier("1.123456789012345678901", "URIError", "1.1234567890123457");
            testNonStringSpecifier("-1.123456789012345678901", "URIError", "-1.1234567890123457");
            testNonStringSpecifier('Symbol("abc")', "TypeError", "No implicit conversion of Symbol to String");
            testNonStringSpecifier("{}", "URIError", "[object Object]");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
