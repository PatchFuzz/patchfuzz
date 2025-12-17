;

new WeakSet();
new WeakSet(undefined);
new WeakSet(null);

print(() => WeakSet(), TypeError);
print(() => WeakSet(undefined), TypeError);
print(() => WeakSet(null), TypeError);
