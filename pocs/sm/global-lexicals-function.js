class Foo {};
let x = 1;
const y = 2;
var z = 3;

var obj = globalLexicals();
print(Object.keys(obj).length >= 3, true);
print(obj.Foo, Foo);
print(obj.x, 1);
print(obj.y, 2);
print("z" in obj, false);

print("uninit" in obj, false);
let uninit;


obj.x = 2;
print(x, 1);
