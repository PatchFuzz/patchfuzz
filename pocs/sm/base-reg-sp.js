setJitCompilerOption("base-reg-for-locals", 0); 
function g(x) {
    with (this) {} 
    return x;
}
function f(x) {
    var sum = 0;
    for (var i = 0; i < x; i++) {
        sum += g(i);
    }
    return sum;
}
print(f(2000), 1999000);
