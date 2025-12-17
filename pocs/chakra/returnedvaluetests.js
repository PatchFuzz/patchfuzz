var value = 10;
var o = {
    get b() { return value; },
    set b(val) { value = val; }
}

function sum(a, b) {
    return a+b;
}
function mul(a, b) {
    return a*b;
}

function test1() {
    var k = 10;                
    k = sum(1,2) + sum(4,5);
    k = mul(4,5);
    k = mul(sum(3,2),sum(6,5));
    return k;
}
test1();

function test2() {
    var m = 10;                
    m = o.b;
    o.b = 31;
    m = sum(o.b, o.b);
}
test2();

function f1() {
    return function () {
        return function () {
            return "inside";
        }
    }
}

function f2() {
    function f3() {
        return 20;
    }
    return 31 + f3();
}

function test3() {
    var j = 10;                
    var j1 = f2();
    j1 = f1();
    f1()();
    f1()()();
}
test3();

print("Pass");