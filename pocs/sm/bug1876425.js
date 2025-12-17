function noninlined1(x) {
    with (this) {};
    if (x === 4002) {
        
        f2();
        
        return true;
    }
    return false;
}
function noninlined2(x) {
    with (this) {};
    if (x === 4000) {
        
        g = (h, x) => {
            return x + 1;
        };
    }
    if (x === 4001) {
        
        g = g1;
    }
}
var h = function(x) {
    if (noninlined1(x)) {
        
        bailout();
    }
    return x + 1;
};
var g = function(callee, x) {
    return callee(x) + 1;
};
var g1 = g;

function f2() {
    var h2 = x => x + 1;
    for (var i = 0; i < 300; i++) {
        var x = (i % 2 === 0) ? "foo" : i; 
        g1(h2, x);
    }
}

function f1() {
    for (var i = 0; i < 4200; i++) {
        var x = (i < 900 && i % 2 === 0) ? "foo" : i; 
        g(h, x);
        noninlined2(i);
        if (i === 200) {
            trialInline();
        }
    }
}
f1();
