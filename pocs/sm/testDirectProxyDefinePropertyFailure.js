;

var obj = {x: 1, y: 2};
var nope = false;
var p = new Proxy(obj, {
    defineProperty(target, key, desc) { return nope; }
});


print(1);
print(() => Object.defineProperty(p, "z", {value: 3}), TypeError);
print("z" in obj, false);
print(() => Object.defineProperty(p, "x", {value: 0}), TypeError);



print(2);
print(p.z = 3, 3);
print(() => { "use strict"; p.z = 3; }, TypeError);


print(3);
for (nope of [0, -0, NaN, ""])
    print(() => { "use strict"; p.z = 3; }, TypeError);
