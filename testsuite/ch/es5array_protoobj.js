





function test(o)
{
    o[0] = 1;
}
var obj = {};
function Ctor() { this[1] = 2; };
Ctor.prototype = obj;
Object.defineProperty(obj, "0", { value: 0, writable: false });
var o = new Ctor();
test(o);
WScript.Echo(o[0]);
var o = new Ctor();
test(o);
WScript.Echo(o[0]);
