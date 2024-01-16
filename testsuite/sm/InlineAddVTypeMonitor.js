

var x = {};
var y = [];

function f(i) {
    return x + y;
}

function g(m) {
    var i;
    for (i = 0; i < m; i++) {
        f(i);
    }
}

g(101);
