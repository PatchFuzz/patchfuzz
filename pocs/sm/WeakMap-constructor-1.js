;

new WeakMap();
new WeakMap(undefined);
new WeakMap(null);

print(() => WeakMap(), TypeError);
print(() => WeakMap(undefined), TypeError);
print(() => WeakMap(null), TypeError);
