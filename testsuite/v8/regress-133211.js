




























var o = {};
var x = {};
Object.defineProperty(o, "foo", { get: undefined });
Object.defineProperty(x, "foo", { get: undefined, set: undefined });
var pd = Object.getOwnPropertyDescriptor(o, "foo");
assertEquals(undefined, pd.set);
