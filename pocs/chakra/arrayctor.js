function f(x, y) {
    return new Array(x, y);
}

f(1, 2);
f(2, 3);
Array = function (x, y) { print('arg: ' + x + ', ' + y); }
f(3, 4);
f(5, 6);
