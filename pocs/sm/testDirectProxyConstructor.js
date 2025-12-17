;


print(function () { Proxy({}, {}); }, TypeError);


print(function () { new Proxy(); }, TypeError);
print(function () { new Proxy({}); }, TypeError);


print(function () { new Proxy(0, {}); }, TypeError);
print(function () { new Proxy(null, {}); }, TypeError);


print(function () { new Proxy({}, 0); }, TypeError);
print(function () { new Proxy({}, null); }, TypeError);


print(typeof new Proxy({}, {}), 'object');
