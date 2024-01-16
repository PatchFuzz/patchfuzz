


function testScriptedAtFunCallOp() {
    var f = function(x) {
        if (x === 130) bailout();
        return x;
    };
    f.call = f;

    for (var i = 0; i < 150; i++) {
        assertEq(f.call(i), i);
    }
}
testScriptedAtFunCallOp();


function testFunCallAtNormalCallOp() {
    var f = function(x) {
        if (x === 130) bailout();
        return x;
    };
    f.myCall = Function.prototype.call;

    for (var i = 0; i < 150; i++) {
        assertEq(f.myCall(null, i), i);
    }
}
testFunCallAtNormalCallOp();
