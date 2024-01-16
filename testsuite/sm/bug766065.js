





function testApplyCallHelper(f) {
    for (var i = 0; i < 10; ++i) dumpStack.apply(this,[0,1]);
}
function testApplyCall() {
    var r = testApplyCallHelper(function (a0,a1,a2,a3,a4,a5,a6,a7) { x = [a0,a1,a2,a3,a4,a5,a6,a7]; });
}
testApplyCall();
