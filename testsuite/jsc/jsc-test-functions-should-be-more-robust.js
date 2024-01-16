


var getHiddenValue =  $vm.getHiddenValue;
var setHiddenValue =  $vm.setHiddenValue;

function shouldEqual(actual, expected) {
    if (actual != expected) {
        throw "ERROR: expect " + expected + ", actual " + actual;
    }
}

function test(testAction, expectedException) {
    var exception;
    try {
        testAction();
    } catch (e) {
        exception = e;
    }
    shouldEqual(exception, expectedException);
}

test(() => { getHiddenValue(); }, "TypeError: Invalid use of getHiddenValue test function");
test(() => { getHiddenValue({}); }, "TypeError: Invalid use of getHiddenValue test function");

test(() => { setHiddenValue(); }, "TypeError: Invalid use of setHiddenValue test function");
test(() => { setHiddenValue({}); }, "TypeError: Invalid use of setHiddenValue test function");

