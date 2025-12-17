var await = 0; 
if (await !== 0) {
    print('fail');
}

function f() {
    "use strict";
    var await = 1;

    if (await !== 1) {
        print('fail');
    }
}
f();

function test(awaitStr)
{
    try {
        print('var ' + awaitStr + ' = 0;', 'samethread');
    } catch (e) {
        return e.message === 'The use of a keyword for an identifier is invalid';
    }
    print("Failed: no syntax error of identifier '" + awaitStr + "'");
    return false;
}

print(test("await") & test("\\u0061wait")? 'pass' : '');
