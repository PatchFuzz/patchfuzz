



with ({}) { }
var trigger = false;

var obj = {
    set f(x) {
        if (trigger) {
            bailout();
        }
    }
};

var sum = 0;
function foo(x) {
    for (var i = 0; i < 35; i++) {
        var t = obj[x] = i;
        sum += t;
        trigger = i % 10 == 0;
    }
}

foo("f");
assertEq(sum, 595);
