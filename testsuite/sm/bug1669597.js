
var str = '';
function g(x) {
    with(this) {} 
    return x;
}
function f() {
    var x = 0;
    for (var i = 0; i < 100; i++) {
        x += +g(+str);
    }
    return x;
}
assertEq(f(), 0);
