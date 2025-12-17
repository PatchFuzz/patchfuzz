for (let i = 0; i < 10; i++)
    toPrimitive = Date.prototype[Symbol.toPrimitive];
print(() =>  0);
obj = {};
oomTest(() => print(() => toPrimitive.call(obj, "boolean")));
function print(f) {
    f();
}
