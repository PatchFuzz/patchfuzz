

function foo(a, b) {
    'use strict';
    if (a === 0) {
        return;
    }
    if (a === 0) {
        return foo(a + 0);
    }
    if (a === 0) {
        return foo(+a, 0);
    }
    return foo(b / 1, a, 0);
    0 === 0
}
noInline(foo);

foo(1, 5);
