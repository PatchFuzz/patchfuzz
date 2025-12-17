function test(o)
{
    o[0] = 1;
}
var arr = [];
function Ctor() { this[1] = 2; };
Ctor.prototype = arr;
Object.defineProperty(arr, "0", { value: 0, writable: false });
var o = new Ctor();
test(o);
print(o[0]);
var o = new Ctor();
test(o);
print(o[0]);
