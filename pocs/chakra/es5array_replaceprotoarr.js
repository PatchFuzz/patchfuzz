function test(o)
{
    o[0] = 1;
}
var arr = [];
function Ctor() { this[1] = 2; };
Object.defineProperty(arr, "0", { value: 0, writable: false });
var o = new Ctor();
o.__proto__ = arr;
test(o);
print(o[0]);
var o = new Ctor();
o.__proto__ = arr;
test(o);
print(o[0]);
