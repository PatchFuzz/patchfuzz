function bail() { bailout(); }
function bail2() { bailout(); return 2; }


function test() {
    return evalcx("1;");
}
print(test(), 1)


function test2() {
    return evaluate("1; bail2();");
}
print(test2(), 2)


function test3() {
    return evaluate("1; bail2(); 3");
}
print(test3(), 3)


function test4() {
    return evaluate("1; for(var i=0; i<1097; i++) { 3; };");
}
print(test4(), 3)
