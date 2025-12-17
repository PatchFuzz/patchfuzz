function f1(b) {
    var w = 3;
    if (b)
        function w() {}
    return w;
}
print(typeof f1(true), "function");
print(f1(false), 3);

function f2(b, w) {
    
    
    if (b)
        function w() {}
    return w;
}
print(typeof f2(true, 3), "number");
print(f2(false, 3), 3);
