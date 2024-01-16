








const promises = [];

function testDynamicImport(testCase, shouldThrow = false, errorType = URIError)
{
    if (shouldThrow) {
        promises.push(testCase
            .then(() => print("Promise should be rejected"))
            .catch (e => {if (!(e instanceof errorType)) throw new Error("fail");})
            .catch (() => print("Wrong error type"))
            );
    } else {
       promises.push(testCase.then(() => true).catch(e => print ("Test case failed")));
    }
}


testDynamicImport(import(undefined), true);
testDynamicImport(import(true), true);
testDynamicImport(import(false), true);
testDynamicImport(import({}), true);
testDynamicImport(import(' '), true);

WScript.RegisterModuleSource("case1", 'this is a syntax error');
WScript.RegisterModuleSource("case2", 'import "helper1";');
WScript.RegisterModuleSource("helper1", 'this is a syntax error');
WScript.RegisterModuleSource("case3", 'import "case1";');
WScript.RegisterModuleSource("case4", 'throw new TypeError("error");');
WScript.RegisterModuleSource("case5", 'import "case3";');
WScript.RegisterModuleSource("case6", 'import "case4";');
WScript.RegisterModuleSource("helper2", 'throw new TypeError("error");');
WScript.RegisterModuleSource("case7", 'import "helper2";');
WScript.RegisterModuleSource("passThrough", 'import "helper3"');
WScript.RegisterModuleSource("helper3", 'throw new TypeError("error");');
WScript.RegisterModuleSource("case8", 'import "passThrough";');
WScript.RegisterModuleSource("case9", 'import "case8";');


testDynamicImport(import("case1"), true, SyntaxError);

testDynamicImport(import("case2"), true, SyntaxError);

testDynamicImport(import("case3"), true, SyntaxError);

testDynamicImport(import("case4"), true, TypeError);

testDynamicImport(import("case5"), true, SyntaxError);


testDynamicImport(import("case6"), true, TypeError);

testDynamicImport(import("case7"), true, TypeError);

testDynamicImport(import("case8"), true, TypeError);

testDynamicImport(import("case9"), true, TypeError);

Promise.all(promises).then(() => print ("pass"));
