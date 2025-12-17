"use strict";
function f() {
    var x = new Object();
    x.y = 1;
    delete x.y;
    if (x.y === undefined)
    {
        print("Pass");
    }
    return x;
}

function g(o)
{
    delete o.y;
}

g(f());
