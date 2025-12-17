"use strict";



var s = "a".repeat(2 ** 22);
var o = {};
for (var i = 0; i < 100; ++i) {
    o["$" + i] = s;
}

Object.seal(o);





o.foo = 0;
