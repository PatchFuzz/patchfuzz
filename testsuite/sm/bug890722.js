


function bail() { bailout(); }
function bail2() { bailout(); return 2; }


function test() {
    return evalcx("1;");
}
assertEq(test(), 1)


function test2() {
    return evaluate("1; bail2();");
}
assertEq(test2(), 2)


function test3() {
    return evaluate("1; bail2(); 3");
}
assertEq(test3(), 3)


function test4() {
    return evaluate("1; for(var i=0; i<1097; i++) { 3; };");
}
assertEq(test4(), 3)
