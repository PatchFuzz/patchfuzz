



var a = [ 1, 2, 3 ];
var was_called = false;
function poison() { was_called = true; }
a.hasOwnProperty = poison;
Object.freeze(a);

assertThrows("a.unshift()", TypeError);
assertEquals(3, a.length);
assertFalse(was_called);
