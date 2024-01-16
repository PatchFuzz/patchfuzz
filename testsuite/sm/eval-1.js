

function f(s) {
    var a = 2;
    return eval(s);
}

var c = f("k => a + k");  
assertEq(c(3), 5);
