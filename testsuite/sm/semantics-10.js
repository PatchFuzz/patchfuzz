

var obj = {};


function* g() {
    obj.x = 0;
    yield 1;
}
var x = 2, n = 0;
with (obj) {
    for (x of g())  
        n++;
}
assertEq(x, 2);
assertEq(obj.x, 1);
assertEq(n, 1);


function* h() {
    delete obj.x;
    yield 3;
}
n = 0;
with (obj) {
    for (x of h())  
        n++;
}
assertEq(x, 3);
assertEq("x" in obj, false);
assertEq(n, 1);
