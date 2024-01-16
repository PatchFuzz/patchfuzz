

function J(i) {
    
    if (i % 3)
        [1,2,3]
}

function h(i) {
    J(i);

    
    if (1 == 14) { eval(); }

    return J(i);
}

function g(i) {
    
    if (i == 14) { with ({}); }
    return h(i);
}

function f() {
    for (var i = 0; i < 9 * 2; i++) {
        g(i);
    }
}

f();



