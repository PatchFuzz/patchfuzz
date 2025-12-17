;

var obj = {x: 1};
var p = new Proxy(obj, {
    set(target, key, value, receiver) { return false; }
});


print(p.x = 2, 2);
print(obj.x, 1);


print(() => { "use strict"; p.x = 2; }, TypeError);
print(obj.x, 1);


print(() => { "use strict"; p.x = 1; }, TypeError);
print(obj.x, 1);


print(() => { "use strict"; p.z = 1; }, TypeError);
print("z" in obj, false);


var arr = ["not", "already", "in", "order"];
var p2 = new Proxy(arr, {
    set(target, key, value, receiver) { return false; }
});
print(() => p2.sort(), TypeError);
print(arr, ["not", "already", "in", "order"]);
