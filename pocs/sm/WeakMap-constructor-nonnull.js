;

var v1 = 42;

var primitive = 10;
print(() => new WeakMap([[primitive, v1]]), TypeError);

var empty_array = [];
print(() => new WeakMap([empty_array]), TypeError);
