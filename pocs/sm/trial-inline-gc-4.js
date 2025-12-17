function h(i, x) {
    if (i === 900) {
        
        gc(this, "shrinking");
    }
    return x + 1;
}
function g2(i, x) {
    if (i === 820) {
        
        callee = g1;
    }
    return h(i, x) + x;
}
function g1(i, x) {
    if (i === 800) {
        
        callee = g2;
    }
    if (i === 900) {
        
        h(i, x);
    }
    return h(i, x) + x;
}

var callee = g1;

function f() {
    for (var i = 0; i < 1000; i++) {
        callee(i, i);
        callee(i, "foo");
    }
}
f();
