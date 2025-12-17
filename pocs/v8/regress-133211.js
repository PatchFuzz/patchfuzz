var o = {};
var x = {};
Object.defineProperty(o, "foo", { get: undefined });
Object.defineProperty(x, "foo", { get: undefined, set: undefined });
var pd = Object.getOwnPropertyDescriptor(o, "foo");
print(undefined, pd.set);
