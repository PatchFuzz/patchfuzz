function print(b) {
    if (!b)
        throw new Error("Bad assertion");
}

function print(ctor, lengthValue) {
    let descriptor = Object.getOwnPropertyDescriptor(ctor, "length");

    print(descriptor.value === lengthValue);
    print(!descriptor.enumerable);
    print(!descriptor.writable);
    print(descriptor.configurable);
}

print(Array, 1);
print(ArrayBuffer, 1);
print(Boolean, 1);
print(DataView, 1);
print(Date, 7);
print(Error, 1);
print(Function, 1);
print(Map, 0);
print(Number, 1);
print(Object, 1);
print(Promise, 1);
print(Proxy, 2);
print(RegExp, 2);
print(Set, 0);
print(String, 1);
print(Symbol, 0);
print(WeakMap, 0);
print(WeakSet, 0);

print(Int8Array, 3);
print(Uint8Array, 3);
print(Int16Array, 3);
print(Uint16Array, 3);
print(Int32Array, 3);
print(Uint32Array, 3);
print(Float32Array, 3);
print(Float64Array, 3);
