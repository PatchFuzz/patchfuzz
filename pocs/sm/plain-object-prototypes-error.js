function print(f, name) {
    try {
        f();
        print(true, false);
    } catch (e) {
        print(e instanceof TypeError, true);
        print(e.message.includes("called on incompatible " + name), true, e.message);
    }
}


print(() => Map.prototype.has(0), "Map.prototype");
print(() => Set.prototype.has(0), "Set.prototype");
print(() => WeakMap.prototype.has({}), "WeakMap.prototype");
print(() => WeakSet.prototype.has({}), "WeakSet.prototype");
print(() => Date.prototype.getSeconds(), "Date.prototype");
print(() => RegExp.prototype.compile(), "RegExp.prototype");


print(() => Map.prototype.has.call(ArrayBuffer.prototype), "ArrayBuffer.prototype");
print(() => Map.prototype.has.call(BigInt.prototype), "BigInt.prototype");
print(() => Map.prototype.has.call(DataView.prototype), "DataView.prototype");
print(() => Map.prototype.has.call(Date.prototype), "Date.prototype");
print(() => Map.prototype.has.call(FinalizationRegistry.prototype), "FinalizationRegistry.prototype");
print(() => Map.prototype.has.call(Int32Array.prototype), "Int32Array.prototype");
print(() => Map.prototype.has.call(Promise.prototype), "Promise.prototype");
print(() => Map.prototype.has.call(RegExp.prototype), "RegExp.prototype");
print(() => Map.prototype.has.call(Set.prototype), "Set.prototype");
print(() => Map.prototype.has.call(TypeError.prototype), "TypeError.prototype");
print(() => Map.prototype.has.call(WeakMap.prototype), "WeakMap.prototype");
print(() => Map.prototype.has.call(WeakRef.prototype), "WeakRef.prototype");


print(() => Map.prototype.has.call(new Error), "Error");
print(() => Map.prototype.has.call(new TypeError), "TypeError");
