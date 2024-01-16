




'use strict';

function f(o) {
    o.x = 'me';
}

var o1 = { set x(v) { val = v; } };
var o2 = { get x() { WScript.Echo('get') } };

var val = 'you';
f(o1);
if (val !== 'me') WScript.Echo('fail 1');
val = 'you';
f(o1);
if (val !== 'me') WScript.Echo('fail 2');
try {
    f(o2);
}
catch(e) {
    val = e;
}
if (val.toString() === 'TypeError: Assignment to read-only properties is not allowed in strict mode')
    WScript.Echo('pass');
else
    WScript.Echo('fail 3');

