

function foo(o) {
    return o.y;
}

with ({}) {}

var sum = 0;


for (var i = 0; i < 30; i++) {
    sum += foo({y: 1});
}


for (var i = 0; i < 30; i++) {
    sum += foo({x: 1, y: 1});
}

assertEq(sum, 60);
