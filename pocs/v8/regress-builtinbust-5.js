var a = [ 1, 2, 3 ];
var was_called = false;
function poison() { was_called = true; }
a.hasOwnProperty = poison;
Object.freeze(a);

print("a.unshift()", TypeError);
print(3, a.length);
print(was_called);
