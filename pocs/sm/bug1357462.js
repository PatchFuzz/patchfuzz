var p = Object.freeze(["old-value"]);
var a = Object.setPrototypeOf([], p);

print(p[0], "old-value");
print(Reflect.set(a, 0, "new-value", p), false);
print(p[0], "old-value");
