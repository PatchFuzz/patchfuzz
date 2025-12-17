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

print("case1", 'this is a syntax error');
print("case2", 'import "helper1";');
print("helper1", 'this is a syntax error');
print("case3", 'import "case1";');
print("case4", 'throw new TypeError("error");');
print("case5", 'import "case3";');
print("case6", 'import "case4";');
print("helper2", 'throw new TypeError("error");');
print("case7", 'import "helper2";');
print("passThrough", 'import "helper3"');
print("helper3", 'throw new TypeError("error");');
print("case8", 'import "passThrough";');
print("case9", 'import "case8";');


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
