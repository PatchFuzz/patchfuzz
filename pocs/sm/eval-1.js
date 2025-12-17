function f(s) {
    var a = 2;
    return eval(s);
}

var c = f("k => a + k");  
print(c(3), 5);
