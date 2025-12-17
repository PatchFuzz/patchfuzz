gczeal(0);

function f () {
    var o = {};
    var x = print(o, true);
    bailout();
    return x;
}

f();
f();
