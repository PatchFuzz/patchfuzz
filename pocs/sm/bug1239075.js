function g0() { with({}){}; }
function f0(y, x) {
    var a = y >>> 0;
    a = a - 1 + 1;
    g0(); 
    var b = x / 2; 
    return ~(a + b);
}
print(f0(-1, 0), 0);
print(f0(-1, 1), 0);


function g1() { with({}){}; }
function f1(y, x) {
    var a = y >>> 0;
    a = a - 1 + 1;
    g1(); 
    var b = Math.pow(x / 2, x); 
    return ~(a + b);
}
print(f1(-1, 0), -1);
print(f1(-1, 1), 0);

function f2(x) {
    return ~(((~0 | 0) >>> 0 || 0) + Math.pow(Math.cos(x >>> 0), Math.atan2(0, x)))
}
print(f2(0), -1);
print(f2(-9999), 0);
