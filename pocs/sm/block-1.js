var f = () => {};
print(f(), undefined);
var g = () => ({});
print(typeof g(), 'object');
