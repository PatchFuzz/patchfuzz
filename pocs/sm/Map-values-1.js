var m = new Map();
var ki = m.keys(), vi = m.values(), ei = m.entries();
var p = Object.getPrototypeOf(ki)
print(Object.getPrototypeOf(vi), p);
print(Object.getPrototypeOf(ei), p);

for (let k of ki)
    throw "FAIL";
for (let v of vi)
    throw "FAIL";
for (let [k, v] of ei)
    throw "FAIL";
