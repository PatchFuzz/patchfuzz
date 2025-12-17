var wm = new WeakMap();
var bar = {};
print(wm.set(bar, 'BAR'), wm);
var foo = {};
var a = wm.set(foo, 'FOO').get(foo);
print(a, 'FOO');
