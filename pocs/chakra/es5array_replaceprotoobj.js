function test(o)
{
    o[0] = 1;
}
var obj = {}
function Ctor() { this[1] = 2; };
Object.defineProperty(obj, "0", { value: 0, writable: false });
var o = new Ctor();
o.__proto__ = obj;
test(o);
print(o[0]);
var o = new Ctor();
o.__proto__ = obj;
test(o);
print(o[0]);
